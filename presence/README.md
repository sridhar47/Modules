# presence

>This module detects the presence of elements in the page and group them in a object with required and optional elements. Fires a fail method if some required element is not found.

---

## Config

### required :{}

A list of required elements to search for.

```js
{
    required :{
        menu :'.my-menu',
        container :'.container',
        user_list :'ul.user'
    }
}
```

### optional :{}

A list of optional elements to search for.

```js
{
    optional :{
        acount :'a.my-account',
        avatar :'img.avatar'
    }
}
```

---

Presence will find all that elements and return another object with the same `required` and `optional` fields and will replace the css query strings for jQuery elements.
It will return a new field called `missing` for optionals elements which can't be found.


## Methods

### .create( holder )

Creates a presence instance and saves the holder as a context.

### .done( Function ) : `{}`

Executes a callback if all required elements were found if there's any required setted.

### .fail( Function ) : `null`

Executes a callback if at least one required element wasn't found.

### .init( {config} ) : `null`

Initiate search for elements passed in `config` parameter.





## Usage


### Setup

```js
var holder = $('.my-holder');
presence.create( holder );
```

### Done

```js
presence.done(function( config )){
    console.log( config );
});
```


### Fail

```js
presence.fail(function(error){
    //This is a override method,
    //presence already fires up a fail method
    console.log( error );
})
```
