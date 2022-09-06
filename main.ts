input.onButtonPressed(Button.A, function () {
    Team_1 += 1
    if (Team_1 == 69) {
        music.playTone(988, music.beat(BeatFraction.Breve))
    } else {
        basic.showString("" + (Team_1))
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Tie!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Team_2 += 1
    basic.showString("" + (Team_2))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Team_1 = 0
    Team_2 = 0
})
let Team_2 = 0
let Team_1 = 0
Team_1 = 0
Team_2 = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
