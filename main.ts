input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 80)
})
input.onButtonPressed(Button.AB, function () {
    neZha.stopMotor(neZha.MotorList.M1)
})
input.onButtonPressed(Button.B, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -80)
})
basic.forever(function () {
    basic.pause(100)
    basic.showString("Ola")
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    music.playMelody("C C5 C5 G G G B E ", 120)
})
