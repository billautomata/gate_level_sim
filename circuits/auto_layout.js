module.exports = auto_layout

var gate = require('../lib/gate.js')
var terminal = require('../lib/terminal.js')

function auto_layout(){

  var inputs = []
  var outputs = []
  var gates = []

  var A = terminal('A')
  var B = terminal('B')

  inputs.push(A)
  inputs.push(B)

  var O = terminal('O')

  var gate_AND = gate.and()
  var gate_XOR = gate.xor()

  gate_AND.name = 'and'
  gate_XOR.name = 'xor'

  gates.push(gate_AND)
  gates.push(gate_XOR)

  // set the inputs of the gates
  gate_AND.init(A, B)
  gate_XOR.init(B, gate_AND.get())

  // connect the outputs of the gates to the inputs of the terminals
  O.set(gate_XOR.get())

  outputs.push(O)

  // CYCLE
  function tick(){
    console.log('hello from inside tick in auto_layout.js')
    gates.forEach(function(gate,idx){
      console.log('checking gate', gate.name)
      // console.log(gate.wires())

      var wires = gate.wires()

      // are my inputs hooked up to the main inputs?
      wires.in.forEach(function(wire_input, gate_input_idx){
        inputs.forEach(function(main_input, main_idx){
          if(wire_input === main_input.get()){

            console.log('\nfound a connection to an input terminal')
            console.log(gate.name, 'input', gate_input_idx)
            console.log(main_input.get())
          }
        })
      })

      // are my outputs hooked up to the main outputs?
      wires.out.forEach(function(wire_output, gate_output_idx){
        outputs.forEach(function(main_output, main_idx){
          if(wire_output === main_output.get()){
            console.log('\nfound a connection to an output terminal')
            console.log(gate.name, 'output', gate_output_idx)
            console.log(main_output.get())
          }
        })
      })

      // are my outputs hooked up to any other gates inputs?
      wires.out.forEach(function(wire_output, gate_output_idx){
        gates.forEach(function(other_gate, other_gate_idx){
          if(gate !== other_gate){
            // or should I be able to detect connections to myself?
            var other_wires = other_gate.wires()
            other_wires.in.forEach(function(other_wire_input, other_wire_input_idx){
              if(wire_output === other_wire_input){
                console.log('\nfound a connection from one gate to another')
                console.log(gate.name, 'output', gate_output_idx)
                console.log(other_gate.name, 'input', other_wire_input_idx)
              }
            })
          }
        })
      })
    })
  }

  return {
    inputs: inputs,
    outputs: outputs,
    tick: tick
  }

}
