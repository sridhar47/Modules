# jriot

>A wrapper module to use Jails components with the power of excellent Riot.js library.

>**Dependencies** :`riot.js`

>**Version** :`0.1.0`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

>**Demo**: [Codepen](//codepen.io/Javiani/pen/YyrdBy)

---

Riot.js is one of the best micro-libraries out there, and you can use all the power of virtual dom of it on your Jails Components.

This is a alternative for the default `view` Jails component.


### Important

1. jriot module looks for `riot` module which is the `riot.js` library. If you don't have it mapped on your config file, requirejs will raise a 404 error after tries to locate `riot` library.

2. `riot.js` library needs a `riot-tag` property with a name if you're not using a custom tag. This attribute is not required for custom tags.


## Usage

jriot sets a riot environment for your component development and gives back the Jails.component scope.
Considering that you already have `riot.js` library mapped on your config.js, with name `riot`:


### Markup

```js
<form riot-tag="test" data-component="test">
	<p>{opts.name}</p>
	<button onclick={submit}>Send</button>
</form>
```

### JS

```js
define([

	'jails',
	'jriot'

], function( jails, jriot ){

	return jails.component('test', jriot(function( element, anno, opts ){

		// We are on Riot scope
		this.opts.name = 'Edu';

		//Accessing Jails component scope
		this.component.init = function(){
			//Component scope
		};

		this.submit = function(e){

			opts.name = 'Eduardo';

			this.update();
			this.component.emit('submit'); //Emiting jails component event.

			e.preventDefault();
		};

	}));
});

```

## More information

If you need more information about Riot.js, I really recommend you to read [Riot's site](//riotjs.com/).
