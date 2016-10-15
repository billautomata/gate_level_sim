module.exports = half_adder

var gate = require('../lib/gate.js')
var terminal = require('../lib/terminal.js')

function half_adder(){

  var A = terminal('A')
  var B = terminal('B')
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

  S.name('S')
  C.name('C')

  // CYCLE
  function tick(){
    gate_AND.operate()
    gate_XOR.operate()
  }

  var inputs = [ A, B ]
  var outputs = [ C, S ]

  return {
    inputs: inputs,
    outputs: outputs,
    tick: tick
  }

}
