proximidad = 0
def gira(grado: number):
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 56)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 56)
def gira_derecha(grado2: number):
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 56)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 56)
def avanza(cm: number):
    pass

def on_forever():
    if sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS) <= 2:
        pass
basic.forever(on_forever)

def on_forever2():
    global proximidad
    proximidad = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)
