# Requirements

## Tech

1. HTML
2. CSS
3. JavaScript w/ Vue framework

## MVP (minimal viable product)

The calculator should have a display area at the top.

The display should show "0" by default.

The calculator should have 6 function buttons:
  1. Division (/)
  2. Multiplication (x)
  3. Subtraction (-)
  4. Addition (+)
  5. Calculate (=)
  6. Clear (c)

The calculator should have 10 number buttons, 0-9.

The calculator should also have a decimal button.

The calculator should store three values internally:
  1. The first number entered by the user (possibly multi-digit)
  2. The operator selected by the user (/, x, -, +)
  3. The second number entered by the user

The display area should update as a user clicks number buttons.

When the user clicks a function button after the first and second
values are entered (instead of =), the result should be saved in
the first value and the new function should be saved as the
selected operator.

When the calculate button (=) is clicked, the calculator should
apply the operation to the two stored numbers in the appropriate
order (important for subtraction and division) and update the
display.

When the clear button (c) is pressed, all stored data should be
erased and the display should show "0" again.
