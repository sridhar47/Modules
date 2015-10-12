# visibility

> Checks wheter an html element is on visible area of the browser or not

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This module can be very useful for your components and controllers if they have a lot of dependencies within. You can use the **visibility** module in order to load all the required dependencies only if your component is on visible area.


## Instantiation

```js
var vy = visibility( $(form) );
```

## Methods

### .visible( Function callback )

Set a function to be called on scrolling every time that html element is visible to user.

### .once( Function callback )

Almost the same as visible, but it will called just once.

### .hidden( Function callback )

The opposite of visible, this function will be called on scroll when html element is no visible to user.

### .off( String [visible, hidden] )

You can unbind an event by yourself if you don't want to use **once** method.
You have 2 options :`visible` or `hidden`.


### Usage

```js

define([

	'jails',
	'modules/visibility'

], function( jails, visibility ){

	var deps = ['a', 'b', 'c', 'd'];

	jails.component('my-lazy-component', function( html, data ){

		var cp = this;

		this.init = function(){
			//This init is the default init method of jails modules.
            visibility( html ).once( load );
		};

		function init(){
            // All your dependencies is ready.
			// Now you can do all complex stuff and
			// register any events you need to.
		}

		function load(){
			require( deps, init );
		}

	});
});

```
