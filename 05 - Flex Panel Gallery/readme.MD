# CSS Flex Panels Image Gallery

1. In CSS, `>` is a direct children combinator. It is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.

2. To select the first/last child of of a class in CSS
```
.parentName > *:first-child
.parentName > *:last-child
```
Note: no whitespace after ":"

3. To hide an element outside of the sceen, and have it fly into its position from the top, use
```
transform: translateY(-100%)
transform: translateY(0)
```

4. To transite an element, define it's active style in the class, and toggle the class to control the transition

5. Add event listener for `transitionend` on the panel class element. NOTE: transitionend usually have multiple properties (pass the element to the function and console.log its propertyName to check which transitionend happened). Need to verify the propertyName and then attach changes.
```
function checkTransitionEnd(e) {
  console.log(e.propertyName)
  if (e.propertyName === targetPropety) {
    this.classList.toggle('className');
  }
}
```