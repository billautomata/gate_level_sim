module.exports.and = and
module.exports.or = or
module.exports.xor = xor
module.exports.nand = nand
module.exports.nor = nor
module.exports.not = not

function nor(){
  return gate(function a(input_a, input_b, value) {
    if (!input_a.v && !input_b.v) {
      value.set(1)
    } else {
      value.set(0)
    }
  })
}

function not(){
  return gate(function a(input_a, input_b, value) {
    value.set(!input_a.v)
  })
}

function nand(){
  return gate(function a(input_a, input_b, value) {
    if (input_a.v && input_b.v) {
      value.set(0)
    } else {
      value.set(1)
    }
  })
}

function xor(){
  return gate(function a(input_a, input_b, value) {
    if (!input_a.v && !input_b.v) {
      value.set(0)
    } else if (input_a.v && input_b.v) {
      value.set(0)
    } else {
      value.set(1)
    }
  })
}


function and(){
  return gate(function a(input_a, input_b, value) {
    if (input_a.v && input_b.v) {
      value.set(1)
    } else {
      value.set(0)
    }
  })
}

function or(){
  return gate(function a(input_a, input_b, value) {
    if (input_a.v || input_b.v) {
      value.set(1)
    } else {
      value.set(0)
    }
  })
}


var terminal = require('./terminal.js')

function gate(fn) {

  // input terminal
  var input_a = {}
  var input_b = {}

  // result of the gate operation
  var value = terminal()

  // output terminal
  var output = terminal()

  function init(terminal_a, terminal_b) {
    if(terminal_a !== undefined && terminal_b === undefined){
      connect(terminal_a.get(), terminal())
    } else {
      connect(terminal_a.get(), terminal_b.get())
    }
  }

  var op = fn

  function operate() {
    op(input_a, input_b, value)
    write()
  }

  function print(msg) {
    if (msg) {
      console.log(msg, '\t', 'value', value.get(), 'output', output.get(), 'inA', input_a.v, 'inB', input_b.v)
    } else {
      console.log('\t\t', 'value', value.get(), 'output', output.get(), 'inA', input_a.v, 'inB', input_b.v)
    }
  }

  function connect(a, b) {
    input_a = a
    input_b = b
  }

  function write() {
    output.set(value.get().v)
  }

  function get() {
    return output
  }

  function wires(){
    return {
      in: [
        input_a,
        input_b,
      ],
      out: [
        output.get()
      ]
    }
  }

  return {
    connect: connect,
    operate: operate,
    init: init,
    get: get,
    print: print,
    wires: wires,
    write: write
  }

}
