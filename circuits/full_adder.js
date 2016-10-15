// https://en.wikipedia.org/wiki/Adder_(electronics)#Full_adder

module.exports = full_adder

var gate = require('../lib/gate.js')
var terminal = require('../lib/terminal.js')

function full_adder(){
  var A = terminal('A')
  var B = terminal('B')
  var Cin = terminal('Cin')

  var inputs = [ A, B, Cin ]

  var S = terminal('S')
  var C = terminal('Cout')

  var outputs = [ C, S ]

  var cycles = []

  var cycle0_XOR = gate.xor()
  var cycle1_XOR = gate.xor()
  var cycle1_AND = gate.and()
  var cycle1_ANDb = gate.and()
  var cycle2_OR = gate.or()

  // set the inputs of the gates
  cycle0_XOR.init(A, B)
  cycle1_XOR.init(cycle0_XOR.get(), Cin)
  cycle1_AND.init(cycle0_XOR.get(), Cin)
  cycle1_ANDb.init(A, B)
  cycle2_OR.init(cycle1_AND.get(), cycle1_ANDb.get())

  // setup the cycles
  cycles.push([ cycle0_XOR ])
  cycles.push([ cycle1_XOR, cycle1_AND, cycle1_ANDb ])
  cycles.push([ cycle2_OR ])

  // connect the outputs of the gates to the inputs of the terminals
  S.set(cycle1_XOR.get())
  C.set(cycle2_OR.get())

  // CYCLE
  function tick(){
    cycles.forEach(function(gates){
      gates.forEach(function(g){
        g.operate()
      })
    })
  }

  return {
    inputs: inputs,
    outputs: outputs,
    tick: tick
  }

}
