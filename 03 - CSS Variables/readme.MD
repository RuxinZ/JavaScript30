# Update CSS Variables

- Step 1: declare the variables on some sort of element. Most commonly the `root` element. 
- Step 2: add event listeners for `"change"` and `"mouseover"`
- NOTE that `document.querySelectorAll()` returns an array-like object, which has index-val pairs and a length property. But it does not have certain array functions like map(), reduce(), etc.
- Step 3: handle the suffix of the variables (for example the px for size) by using a `data-*` attribute
    `dataset` is an object that contains all the data attrbutes from the selected element

- Step 4: to select the CSS attribute. Set a `name` attribute for the input element. 
- Step 5: `use document.documentElement.style.setProperty()` to change the variable value;
