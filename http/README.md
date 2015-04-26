# http

>This component wraps all ajax requests you need.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

## Methods

| Object        |     methods
|:--------------|:----------------:
| **http**     | `get`, `post`, `put`, `delete`, `json`

http is a simple wrapper for jQuery ajax calls, every method is
implemented in the same way jQuery does.

***http calls returns always a promise.***

## Usage

```js
http.get('/my/rest/user', { id : 2}, callback);
http.post('/my/rest/user', { id : 2}, callback);
http.put('/my/rest/user', { id : 2}, callback);
http.delete('/my/rest/user', { id : 2}, callback);
http.json('/my/rest/user', { id : 2}, callback);

```

If you want a jsonp request:

```js
http.json('/my/jsonp/service', { callback :'?' }, callback);
```
