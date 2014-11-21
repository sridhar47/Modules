# persistence

> This **Module** persist model changes into Storage system.

---



## Usage

```js
persistence( model ).on();
// Persist model to Storage.

persistence( model ).detach();
// Detach model from Storage but keeps data saved.

persistence( model ).drop();
// Clear data from Storage.

persistence( model ).off();
//  Remove model from Storage and clears Storage data.
```
