# Notes

## Logic Planning

1. Use v-on:click for all buttons? How would that work?
    * v-on:click = "numberFunction" or "operatorFunction"
    * numberFunction
        * Correct number (7 followed by 3 = 73 != 10)
        * Show number on top display
        * Add number to tape register array
    * How to implement Vue
        * Top display can be Vue data object
        * tapeRegisterArray Vue object???
        * Operators will be methods in Vue

2. Use array for tape register display?
    * Push every number to array when operator is selected
    * Then, operator and output are pushed to next spot
    * All items will be right justified

```
Example tape register display:

   40
+   2
-----
   42

tapeRegisterArray = ['4', '+2', '----', '6']
```

3. Vue data
    * display
    * tapeRegisterArray
    * previous entry

4. Vue methods
    * numericButtonPress
        * Add values to string until operator is pressed
    * operatorButtonPress
        * convert values string to number
        * perform operation on value and previous value
        * output answer
    * displayTapeRegister
        * Could a `<textfield>` work for this?
            * [Mapping an Array to Elements with `v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for)
