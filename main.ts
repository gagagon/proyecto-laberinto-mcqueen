let donde_girado = 0
let proximidad = 0
function gira (grado: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 56)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 56)
}
function gira_derecha (grado: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 56)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 56)
}
function avanza (cm: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 152)
}
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 4) {
        if (donde_girado == 2) {
            gira(1)
        } else {
            donde_girado = 2
        }
    }
})
basic.forever(function () {
    avanza(1)
})
basic.forever(function () {
    proximidad = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 4) {
        if (donde_girado == 1) {
            gira_derecha(1)
        } else {
            donde_girado = 1
        }
    }
})
