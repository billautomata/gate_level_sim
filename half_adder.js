var gate = require('./gate.js')
var terminal = require('./terminal.js')

var A = terminal()
var B = terminal()
var S = terminal()
var C = terminal()

var gate_AND = gate.and()
var gate_XOR = gate.xor()

// set the inputs of the gates
gate_AND.init(A, B)
gate_XOR.init(A, B)

// connect the outputs of the gates to the inputs of the terminals
S.set(gate_XOR.get())
C.set(gate_AND.get())

// set the values of the inputs
A.set(1)
B.set(1)

// CYCLE
gate_AND.operate()
gate_XOR.operate()

// check outputs
console.log('C', C.get().v.get())
console.log('S', S.get().v.get())
