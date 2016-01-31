function and_gate(){

  var input_a = {}    // connected on init
  var input_b = {}
  var output = terminal()

  function init(terminal_a, terminal_b){
    connect(terminal_a.get(),terminal_b.get())
  }

  function operate(){
    if(input_a.v && input_b.v){
      output.set(1)
    } else {
      output.set(0)
    }
    console.log('output', output.get())
  }

  function connect(a,b){
    input_a = a
    input_b = b
  }

  function get(){
    return output
  }

  return {
    connect: connect,
    operate: operate,
    init: init,
    get: get
  }

}

var PIN_0 = terminal()
var PIN_1 = terminal()

var gate = and_gate()
gate.init(PIN_0, PIN_1)
gate.operate()

PIN_0.set(1)
PIN_1.set(1)
gate.operate()

PIN_0.set(0)
gate.operate()


function terminal(){
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
