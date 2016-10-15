# gate_level_sim
building cpu components from gate level simulation

reimplement logic level programming in javascript starting at terminals and gates (AND, NOT, OR, XOR)

visualized in a network diagram

At a system level, to preserve state the operations are split into a `operate()` and `write()` functions.  The main program will do a sweep of all the gates with the `operate` function.  Then do a sweep with the `write` function to set the state of the output terminals.

The operator of the API will construct chains of input terminals, gates that given input will provide
