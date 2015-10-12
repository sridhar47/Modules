# Models

> Jails Models does not have any relationship with the other Jails classes aswell your application. It is just a simple AMD module with some helpful CRUD and FIND methods.

## .data

Saves your object inside model wrapper so model can use instance methods to handle your object.
If your object is an array, you can pass a `string` id in order to transform the array to a json table.

    .data( object, [id] );


The id should be your primary key of your table. The following array response will be transform to a json table:

```js
model.data([
    { name :'John', email:'john@gmail.com', age :30 },
    { name :'Marcus', email:'marcus@gmail.com', age :15 },
    { name :'Joseph', email:'joseph@gmail.com', age :20 },
    { name :'Mary', email:'mary@gmail.com', age :44 }
],'email');
```

Since we passed a string `email` to be the `key` of json array, it will result:

```js
{
    'john@gmail.com'    :{ name :'John', email:'john@gmail.com', age :30 },
    'marcus@gmail.com'  :{ name :'Marcus', email:'marcus@gmail.com', age :15 },
    'joseph@gmail.com'  :{ name :'Joseph', email:'joseph@gmail.com', age :20 },
    'mary@gmail.com'    :{ name :'Mary', email:'mary@gmail.com', age :44 }
}
```

It looks redundant, but it helps on finding, removing and updating methods, and let them faster.


## .on
Just like a jQuery event, set any event as string and method is a callback.
Model comes with the `update` event already defined, and triggered every time you change model data, using model methods.

    .on( event, Function );


## .trigger
Fires the desired event, you can pass a `object` if you will.

    .trigger( event, [object]);

## .find
Find a entry on the model json table, `id` must be a `string`.

    .find( id );

## .remove
Removes an entry on the model json table.
*Triggers `change` event*.

    .remove( id );

## .update
Updates data.
*Triggers `change` event*.

    .update( id, value );



## .to_array
Transforms the json table into a array. Very useful since mustache doesn't handle hash like a list

    .to_array();


## .transform

Method which makes the transformation from Array to Json table. It's used in the **.data()** method when there's a `id` parameter.

    .transform( primary_key, object );
