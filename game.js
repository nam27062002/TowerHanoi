kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
})
const scaleTube = [500, 30]
const NumberFloor = 6
const distanceTube = 50
function LoadImages() {
    for (let i = 1; i <= NumberFloor; i++) {
        loadSprite(i, "images/" + i + ".png")
    }

}
LoadImages()
scene("game", () => {
    for (let i = 1; i <= NumberFloor; i++) {
        console.log(i)
        add([
            sprite(i.toString(), { width: scaleTube[0] - distanceTube * i, height: scaleTube[1] }),
            pos(550 + distanceTube / 2 * i, 500 - i * scaleTube[1]),
        ])
    }
})
go("game")

