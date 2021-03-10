input.onButtonPressed(Button.A, function () {
    Counter += 1
})
input.onButtonPressed(Button.B, function () {
    Counter = 5
})
let Counter = 0
basic.showString("Yello")
basic.showNumber(1)
basic.forever(function () {
    basic.showString("Red")
    basic.showNumber(5)
})
