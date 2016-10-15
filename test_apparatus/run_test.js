module.exports = function run_test(truth_table, circuit){
  truth_table.forEach(function(test_case){
    test_case.inputs.forEach(function(v,i){
      circuit.inputs[i].set(v)
    })
    circuit.tick()
    var display_vals = []
    test_case.inputs.forEach(function(v,i){
      display_vals.push(v)
    })
    var test_case_passed = true
    test_case.outputs.forEach(function(v,i){
      display_vals.push(circuit.outputs[i].get().v)
      if(circuit.outputs[i].get().v !== v){
        test_case_passed = false
      }
    })

    display_vals.push(test_case_passed)

    console.log(display_vals.join(' '))

  })
}
