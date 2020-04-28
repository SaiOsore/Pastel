export default function(url) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error('Error loading image'))
        img.src = url
    })
}
