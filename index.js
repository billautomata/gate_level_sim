function and_gate(){

  // input terminal
  var input_a = {}
  var input_b = {}

  // result of the gate operation
  var value = terminal()

  // output terminal
  var output = terminal()

  function init(terminal_a, terminal_b){
    connect(terminal_a.get(),terminal_b.get())
  }

  function operate(){
    if(input_a.v && input_b.v){
      value.set(1)
    } else {
      value.set(0)
    }
  }

  function print(msg){
    if(msg){
      console.log(msg, 'value', value.get(), 'output', output.get())
    } else {
      console.log('value', value.get(), 'output', output.get())
    }
  }

  function connect(a,b){
    input_a = a
    input_b = b
  }

  function write(){
    output.set(value.get().v)
  }

  function get(){
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

function terminal(){  // PIN
  var val = { v: 0 }
  function set(v){
    val.v = v
  }
  function get(){
    return val
  }
  return {
    set: set,
    get: get
  }
}

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
gate.write()
gate.print()

PIN_0.set(0)
gate.operate()
gate.write()
gate.print()
