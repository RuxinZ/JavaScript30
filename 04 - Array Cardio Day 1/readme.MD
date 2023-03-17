# Array methods

Challenge 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name from this [page](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris).

Note that we need to select the correct element from the page.<br>
Also, querySelector would return a NodeList, not an array. Therefore we won't have access to the map() method unless if we convert it to an array first.

```
const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'))
    const de = links.map(link => link.textContent).filter(
      name => name.includes('de')
    )
    console.log(de);
```