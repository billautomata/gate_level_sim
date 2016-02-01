var and_gate = require('./gate.js').and
var terminal = require('./terminal.js')

var PIN_0 = terminal()
var PIN_1 = terminal()

var gate = and_gate()
gate.init(PIN_0, PIN_1)
gate.operate()
gate.print('before write')
gate.write()
gate.print('after write')

PIN_0.set(1)
PIN_1.set(1)
gate.operate()
gate.print('before write')
gate.write()
gate.print('after write')

PIN_0.set(0)
gate.operate()
gate.write()
gate.print()

var not_gate = require('./gate.js').not()
not_gate.init(PIN_0)
PIN_0.set(0)
not_gate.operate()
not_gate.write()
not_gate.print('not gate')

PIN_0.set(1)
not_gate.operate()
not_gate.write()
not_gate.print('not gate')
