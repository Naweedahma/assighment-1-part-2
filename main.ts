let Numbers_2 = 0
let Numbers = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(Numbers_2)
    Numbers_2 += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Numbers)
    basic.pause(1000)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(Numbers)
    Numbers += 1
})
basic.forever(function () {
	
})
