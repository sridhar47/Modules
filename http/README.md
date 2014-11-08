# http

>This component wraps all ajax requests you need.

---

## Methods

| Object        |     methods
|:--------------|:----------------:
| **http**     | `get`, `post`, `getScript`, `getJSON`

http is a simple wrapper for jQuery ajax calls, every method is
implemented in the same way jQuery does.

## Usage

```js
http.get('/my/rest/user', { id : 2}, callback);
http.post('/my/rest/user', { id : 2}, callback);
http.getJSON('/my/rest/user', { id : 2}, callback);

```

If you want a jsonp request:

```js
http.getJSON('/my/jsonp/service', { jsoncallback :'?' }, callback);
```
