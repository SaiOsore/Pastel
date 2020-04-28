import Matter from 'matter-js'

const {
    Bodies,
    Body,
    Composite,
    Composites,
    Constraint,
    Engine,
    Events,
    Mouse,
    MouseConstraint,
    Render,
    Runner,
    Vertices,
    World,
} = Matter

export default class MatterWrapper {
    constructor({
        element,
        width,
        height,
        gravity,
        canvas,
        options = {},
        autoRender = true,
        autoStart = true,
        hasBounds = true,
        isInteractive = true,
        onUpdate = null,
    }) {
        this.dimensions = { width, height }
        this.runner = Runner.create()
        this.engine = Engine.create()
        this.world = this.engine.world
        this.mouse = null
        this.mouseConstraint = null
        this.render = autoRender
            ? Render.create({
                  element,
                  engine: this.engine,
                  options: {
                      width,
                      height,
                      background: 'transparent',
                      wireframeBackground: '#333',
                      showAngleIndicator: false,
                      wireframes: false,
                      ...options,
                  },
              })
            : null
        this.canvas = this.render ? this.render.canvas : element
        this.itemDefaults = {
            restitution: 0.7,
        }

        this.world.gravity = gravity || { x: 0, y: 2 }
        hasBounds && this.addBounds()
        isInteractive && this.bindMouse()
        autoStart && this.start()
        onUpdate && Events.on(this.runner, 'afterUpdate', onUpdate)

        if (autoRender) {
            Render.run(this.render)
            Render.lookAt(this.render, {
                min: { x: 0, y: 0 },
                max: { x: width, y: height },
            })
        }
    }

    destroy() {
        this.stop()
        World.clear(this.world)
        Engine.clear(this.engine)

        if (this.render) {
            Render.stop(this.render)
            this.render.canvas.remove()
            this.render.canvas = null
            this.render.context = null
            this.render.textures = {}
        }
    }

    resize(width, height) {
        this.canvas.width = width
        this.canvas.height = height
    }

    bindMouse() {
        this.mouse = Mouse.create(this.canvas)
        this.mouseConstraint = MouseConstraint.create(this.engine, {
            mouse: this.mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        })

        World.add(this.world, this.mouseConstraint)

        if (this.render) {
            this.render.mouse = this.mouse
        }
    }

    start() {
        Runner.run(this.runner, this.engine)
    }

    stop() {
        Runner.stop(this.runner)
    }

    getBodies() {
        return Composite.allBodies(this.world)
    }

    applyForce(body, position, force) {
        Body.applyForce(body, position, force)
    }

    addBounds() {
        const { width, height } = this.dimensions
        const options = { isStatic: true }
        const size = 50
        const offset = size / 2

        World.add(this.world, [
            Bodies.rectangle(width / 2, -offset, width + offset, size, options),
            Bodies.rectangle(width / 2, height + offset, width + offset, size, options),
            Bodies.rectangle(width + offset, height / 2, size, height + offset * 2, options),
            Bodies.rectangle(-offset, height / 2, size, height + offset * 2, options),
        ])
    }

    addBody(body) {
        World.add(this.world, body)
    }

    removeBody(body) {
        World.remove(this.world, body)
    }

    rotateBody(body, rotation) {
        Body.rotate(body, rotation)
    }

    positionBody(body, position) {
        Body.setPosition(body, position)
    }

    addEvent(event, handler) {
        Events.on(this.engine, event, handler)
    }

    removeEvent(event, handler) {
        Events.off(this.engine, event, handler)
    }

    addShape(x, y, points, options = {}) {
        const vertices = Vertices.fromPath(points.join(' '))
        const shape = Bodies.fromVertices(x, y, vertices, {
            ...this.itemDefaults,
            ...options,
        })
        World.add(this.world, shape)

        return shape
    }

    addRectangle(x, y, width, height, options = {}) {
        const rect = Bodies.rectangle(x, y, width, height, {
            ...this.itemDefaults,
            ...options,
        })
        World.add(this.world, rect)

        return rect
    }

    addCircle(x, y, radius, options = {}) {
        const circ = Bodies.circle(x, y, radius, {
            ...this.itemDefaults,
            ...options,
        })
        World.add(this.world, circ)

        return circ
    }

    addPolygon(x, y, sides, size, options = {}) {
        const poly = Bodies.polygon(x, y, sides, size, {
            ...this.itemDefaults,
            ...options,
        })
        World.add(this.world, poly)

        return poly
    }

    addItemToString({ item, x, y, length, parent, offset = 0 }) {
        const group = Body.nextGroup(true)
        const segments = Math.round(length / 100)
        const segmentLength = Math.round(length / segments * 2)
        const string = Composites.stack(x, y, 1, segments, 2, 2, (x, y) =>
            Bodies.rectangle(x, y, 2, segmentLength / 2, {
                collisionFilter: { group },
                frictionAir: 0.1,
                render: { fillStyle: '#333' },
            })
        )
        const lastBody = string.bodies[string.bodies.length - 1]
        const { position } = string.bodies[0]
        const { position: lastPosition } = lastBody
        const constraint = Constraint.create({
            bodyA: item,
            bodyB: lastBody,
            pointA: { x: 0, y: offset },
            pointB: { x: 0, y: segmentLength / 4 },
            stiffness: 0.9,
            render: { visible: false },
        })

        Body.set(item, {
            density: 0.00005,
            friction: 1,
            position: {
                x: lastPosition.x,
                y: lastPosition.y + offset,
            },
            collisionFilter: lastBody.collisionFilter,
        })

        Composites.chain(string, 0, 0.49, 0, -0.49, {
            stiffness: 0.9,
            length: 0,
            render: { type: 'line', visible: false },
        })

        Composite.add(
            string,
            Constraint.create({
                bodyA: parent,
                bodyB: string.bodies[0],
                pointA: {
                    x: position.x - (parent ? parent.position.x : 0),
                    y: position.y - (parent ? parent.position.y : 0),
                },
                pointB: { x: 0, y: 0 },
                stiffness: 0.9,
            })
        )

        World.add(this.world, [string, constraint])

        return string
    }
}
