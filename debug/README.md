# debug

> Debug is a automated tool for debugging Jails modules interactions.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This is a very simple debugger, is still very beta, but very easy and useful.

## Configuration

You just have to load it as a main dependency in config file, and call it before jails starts.
It will be automatic, you don't need to call any method.

Debugger is still on development, it's not efficient yet, but it will get there =).

```js
require.config({

    baseUrl :'assets/js/',
    deps    :['jquery', 'jails', 'debug', global.page],

    paths   :{
        jails		:'//rawgit.com/jails-org/Jails/master/source/jails.min',
        jquery 		:'//code.jquery.com/jquery-2.1.1.min',
        debug		:'my/modules/debug'
    },

    callback :function( jquery, jails, debug ){

        debug();
        jails.start({ base :jquery });
    }
});

```
