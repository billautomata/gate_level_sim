module.exports = and
var terminal = require('./terminal.js')

function and(){
  return gate(function a(input_a, input_b, value) {
    if (input_a.v && input_b.v) {
      value.set(1)
    } else {
      value.set(0)
    }
  })
}

function gate(fn) {

  // input terminal
  var input_a = {}
  var input_b = {}

  // result of the gate operation
  var value = terminal()

  // output terminal
  var output = terminal()

  function init(terminal_a, terminal_b) {
    connect(terminal_a.get(), terminal_b.get())
  }

  var op = fn

  function operate() {
    fn(input_a, input_b, value)
  }

  function print(msg) {
    if (msg) {
      console.log(msg, '\t', 'value', value.get(), 'output', output.get())
    } else {
      console.log('\t\t', 'value', value.get(), 'output', output.get())
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

  return {
    connect: connect,
    operate: operate,
    init: init,
    get: get,
    print: print,
    write: write
  }

}