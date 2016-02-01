module.exports = terminal

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
