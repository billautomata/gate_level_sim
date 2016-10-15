// test half adder
var run_test = require('./test_apparatus/run_test.js')

var truth_table_half_adder = [
  { inputs: [0,0], outputs: [0,0] },
  { inputs: [1,0], outputs: [0,1] },
  { inputs: [0,1], outputs: [0,1] },
  { inputs: [1,1], outputs: [1,0] },
]

var half_adder = require('./circuits/half_adder.js')()

run_test(truth_table_half_adder, half_adder)

var truth_table_full_adder = [
  { inputs: [0,0,0], outputs: [0,0] },
  { inputs: [0,0,1], outputs: [0,1] },
  { inputs: [0,1,0], outputs: [0,1] },
  { inputs: [0,1,1], outputs: [1,0] },
  { inputs: [1,0,0], outputs: [0,1] },
  { inputs: [1,0,1], outputs: [1,0] },
  { inputs: [1,1,0], outputs: [1,0] },
  { inputs: [1,1,1], outputs: [1,1] },
]

var full_adder = require('./circuits/full_adder.js')()

run_test(truth_table_full_adder, full_adder)
