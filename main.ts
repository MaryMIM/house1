player.onChat("stair", function () {
    player_x = player.position().getValue(Axis.X)
    player_y = player.position().getValue(Axis.Y)
    player_z = player.position().getValue(Axis.Z)
    radius = 20
    for (let value of COLORS) {
        for (let index = 0; index <= 180; index++) {
            POINTX = index
            POINTY = index
            blocks.place(value, world(POINTX, POINTY, 0))
        }
        radius += 1
    }
})
player.onChat("balcone1", function () {
    builder.teleportTo(player.position())
    builder.move(BACK, 11)
    builder.move(RIGHT, 11)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 22)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 22)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(MAGENTA_WOOL, 1)
})
player.onChat("hello", function () {
    blocks.print(
    "MARRY ENGLISH !!!",
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
player.onChat("walls", function () {
    builder.teleportTo(player.position())
    builder.move(BACK, 10)
    builder.move(RIGHT, 10)
    builder.mark()
    for (let value of COLORS) {
        for (let index = 0; index < 4; index++) {
            builder.move(FORWARD, 20)
            builder.turn(LEFT_TURN)
        }
        builder.raiseWall(value, 10)
    }
})
player.onChat("floor", function () {
    builder.teleportTo(player.position())
    builder.move(BACK, 11)
    builder.move(RIGHT, 11)
    builder.mark()
    for (let index = 0; index < 10; index++) {
        builder.move(FORWARD, 22)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 22)
        builder.turn(RIGHT_TURN)
        builder.move(FORWARD, 1)
        builder.turn(RIGHT_TURN)
    }
    builder.raiseWall(LIME_WOOL, 1)
})
player.onChat("balcone", function () {
    builder.teleportTo(player.position())
    builder.move(BACK, 10)
    builder.move(RIGHT, 10)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, 20)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, 20)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(GRASS, 1)
})
player.onChat("rainbow", function () {
    builder.teleportTo(player.position())
    POINTX = player.position().getValue(Axis.X)
    POINTY = player.position().getValue(Axis.Y)
    player_z = player.position().getValue(Axis.Z)
    radius = 1
    builder.mark()
    for (let value of COLORS) {
        for (let index = 0; index <= 180; index++) {
            POINTX = 0 + radius * (Math.cos(index * 3.142) / 180)
            POINTY = 0 + radius * (Math.sin(index * 3.142) / 180)
            blocks.place(value, world(POINTX, POINTY, 0))
        }
        radius += 1
    }
})
let POINTY = 0
let POINTX = 0
let radius = 0
let player_z = 0
let player_y = 0
let player_x = 0
let COLORS: number[] = []
COLORS = [
PURPLE_WOOL,
BLUE_WOOL,
LIGHT_BLUE_WOOL,
GREEN_WOOL,
YELLOW_WOOL,
ORANGE_WOOL,
RED_WOOL
]
