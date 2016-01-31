# gate_level_sim
building cpu components from gate level simulation

reimplement logic level programming in javascript starting at terminals and gates (AND, NOT, OR, XOR)

visualized in a network diagram

At a system level, to preserve state the operations are split into a `operate()` and `write()` functions.  The main program will do a sweep of all the gates with the `operate` function.  Then do a sweep with the `write` function to set the state of the output terminals.

```javascript
var a = terminal()
var b = terminal()
var g = gate_and()
g.init(a,b)

a.set(0)
b.set(0)
g.operate()
g.write()
console.log(g.get())  // output, 0

a.set(1)
b.set(1)
g.operate()
g.write()
console.log(g.get())  // 1, 1&&1 = 1

a.set(0)
g.operate()
g.write()
console.log(g.get())  // 0, 1&&0 = 0

```
