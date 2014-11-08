# router

> This is a routing module, executes a method over a set of rules.

>The rules are a list of matching strings with priorities, the first element of the list have a higher priority over the rest of elements.

---

You can get parameters by using `:something`, it will be sent as a parameter to the function.

## Methods

### .watch( routes ) : `null`
Adds a listener in the `document.location` object, and sets routes.

```js
router.watch([
    { 'blog'            :controller.posts    },
    { 'post/list'       :controller.list     },
    { 'post/create'     :controller.create   },
    { 'post/update/:id' :controller.update   },
    { 'post/:id'		:controller.single   },
    { 'post/'           :controller.posts    }
]);
```

### .execute( routes, url ) : `null`
This method is usefull when you want to execute routing in a standalone way.
If routes or url is null, then Router will look routes in `Router.routes` and url in `document.location`.


## Config

### context : document.location

The current context points to document location, module router listen `hashchange` event.

### routes :{}

You can set a default set of rules and saving it on module object.

```js
router.routes = [
    { 'blog'            :controller.posts    },
	{ 'post/list'       :controller.list     },
	{ 'post/create'     :controller.create   },
	{ 'post/update/:id' :controller.update   },
	{ 'post/:id'		:controller.single   },
    { 'post/'           :controller.posts    }
];
```
---
