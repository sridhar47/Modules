# {{my-module}}

>A brief description about what your module does.

>**Dependencies**: `lib1`, `lib2`, `lib3`

>**Author**: [Author's name](http://link-to-find-me)

>**Sample**: [Demo](//rawgit.com/jails-org/Modules/master/module/sample/index.htm)

---

A module don't need to depend on Jails as component does. So, it can be a valid AMD file and used on any other project
without Jails framework.

Sample is not mandatory, you can remove the sample line from the header.
Also Dependencies are not mandatory, if your module doesn't have any, just remove that line too.


## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options       |     default      |        values
|:--------------|:----------------:|:-----------------
| option   |    null          |  `string` *Should be the name of something*
| other    |    false         |  `true`, `false` *Should be the state of something*


## Methods

## .method
    .method();

Show your module's public methods.

---

### .another
    .another(String text, [String css]);

Also if it has parameters.

---

### .method2
    .method2();

If you need to show code:

```js
myModule({
    something :'here',
    other :'params',
    like :'that',
    num  :1000
})
```

---
