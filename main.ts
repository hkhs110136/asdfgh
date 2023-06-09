input.onButtonPressed(Button.A, function () {
    本機.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    子彈.set(LedSpriteProperty.X, 本機.get(LedSpriteProperty.X))
    子彈.set(LedSpriteProperty.Y, 本機.get(LedSpriteProperty.Y))
    子彈.set(LedSpriteProperty.Brightness, 125)
    for (let index = 0; index < 4; index++) {
        子彈.set(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.set(LedSpriteProperty.Brightness, -1)
    子彈.set(LedSpriteProperty.X, 4)
    子彈.set(LedSpriteProperty.Y, 4)
})
input.onButtonPressed(Button.B, function () {
    本機.change(LedSpriteProperty.X, 1)
})
let 本機: game.LedSprite = null
let 子彈: game.LedSprite = null
let 分數 = 0
子彈 = game.createSprite(4, 4)
本機 = game.createSprite(2, 4)
let 敵方 = game.createSprite(0, 0)
子彈.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    if (敵方.isTouching(本機)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (子彈.isTouching(敵方)) {
        分數 += 1
        basic.showNumber(分數)
        basic.pause(500)
        敵方.set(LedSpriteProperty.X, 0)
        敵方.set(LedSpriteProperty.Y, 0)
    }
})
basic.forever(function () {
    basic.pause(1000)
    敵方.change(LedSpriteProperty.X, 1)
    if (敵方.get(LedSpriteProperty.X) == 4) {
        basic.pause(1000)
    }
    敵方.set(LedSpriteProperty.X, 0)
    敵方.change(LedSpriteProperty.X, 1)
})
