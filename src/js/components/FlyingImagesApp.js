import Matter from './Matter'
import preload from '../utils/preload'
import shuffle from '../utils/helpers'
import images from '../utils/images'

const MAX_IMAGES = 8

export default class FlyingImagesApp {
    constructor(element) {
        this.images = shuffle(images)
        this.bodies = []
        this.bounds = []
        this.matter = new Matter({
            element,
            width: window.innerWidth,
            height: window.innerHeight,
            gravity: { x: 0, y: -0.1 },
            hasBounds: false,
            onUpdate: () => this.onRenderUpdate(),
        })
        this.preloadImages()
        this.addBounds()
        this.createImages()

        // events
        window.addEventListener('resize', this.onResize.bind(this), false)
    }
    preloadImages() {
        this.images.forEach(({ url }) => {
            preload(url).catch(() => {})
        })
    }
    addBounds() {
        const height = window.innerHeight * 3
        const mid = height / 2
        const options = { isStatic: true }
        this.bounds.push(this.matter.addRectangle(window.innerWidth + 25, mid, 50, height, options))
        this.bounds.push(this.matter.addRectangle(-25, mid, 50, height, options))
    }
    addImage(isNew = false) {
        const { url, width, height } = this.images[0]
        const isSmall = window.innerWidth < 800
        const scale = isSmall ? 0.4 : 0.5
        const x = window.innerWidth * Math.random()
        const y = window.innerHeight * (isNew ? Math.random() + 1 : 1.5)
        const body = this.matter.addRectangle(x, y, width * scale, height * scale, {
            render: {
                sprite: {
                    texture: url,
                    xScale: scale,
                    yScale: scale,
                },
            },
        })

        this.matter.applyForce(
            body,
            { x: x + (Math.random() - Math.random()) * 20, y: y + 10 },
            { x: (Math.random() - Math.random()) * 0.5, y: -Math.random() * (isSmall ? 0.1 : 0.3) }
        )
        this.bodies.push(body)
        this.images.push(this.images.shift())
    }
    createImages() {
        for (let i = 0; i < MAX_IMAGES; i++) {
            this.addImage(true)
        }
    }
    onRenderUpdate() {
        this.bodies.forEach((body, i) => {
            const { x, y } = body.position
            if (y < -200) {
                const old = this.bodies.splice(i, 1)[0]
                this.matter.removeBody(old)
                this.addImage()
            }
        })
    }
    onResize() {
        this.bounds.forEach(bound => {
            this.matter.removeBody(bound)
        })
        this.bodies.forEach(body => {
            this.matter.removeBody(body)
        })
        this.bounds = []
        this.bodies = []
        this.matter.resize(window.innerWidth, window.innerHeight)
        this.addBounds()
        this.createImages()
    }
}
