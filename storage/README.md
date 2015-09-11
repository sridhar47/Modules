# storage

> The storage AMD is just a wrapper for the localStorage global object.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This AMD module has the simplest way to use the localStorage object, very useful to persist data on client side.

## Usage

```js
//Save data
storage.set('item', { my :'item' }); // Save data and return { my:'item' }

//Get data
storage.get('item'); // return { my:'item' }

//Delete data
storage.remove('item'); // Removes and return { my:'item' }
```
