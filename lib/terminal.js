module.exports = terminal

function terminal(s){  // PIN
  var val = { v: 0 }

  if(s !== undefined){
    name(s)
  }

  function set(v){
    // console.log('calling set', val, v)
    if(typeof v === 'object'){
      val = v.get()
    } else {
      // v is a number and you want to set the actual pin value
      val.v = v
    }
  }
  function get(){
    return val
    // if(val.v !== undefined){
    //   return val
    // } else {
    //   return val.get()
    // }
  }
  function name(s){
    // console.log('setting name', s)
    if(s === undefined){
      // read value
    } else {
      // set value
      val.id = s
    }
  }
  return {
    set: set,
    get: get,
    name: name
  }
}
