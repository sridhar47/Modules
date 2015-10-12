define(['jails'],function( jails ){

	var root, items;

	items = {
		app 		:jails.apps,
		controller 	:jails.controllers,
		component	:jails.components
	};

	function print( string ){

		for (var i = 1; i < arguments.length; i++){
			string = string.replace( new RegExp('\\{' + (i-1) + '\\}', 'g'), arguments[i] );
		}

		return '👓[Jails:Module:debug] 👉 ' + string;
	}

	//1. Html markup not found
	function no_used_modules(target){

		var type, name;

		for( type in items ){
			for( name in items[type] ){
				if( !(target||root).querySelector('[data-'+type+'*='+name+']' ) ){
					console.warn(
						print( '{0}.{1} was not found on html markup.', type, name )
					);
				}
			}
		}
	}

	//2. Html markup found but not the module
	function no_module_found(target){

		for( var type in items){
			var m = (target||root).querySelectorAll('[data-'+type+']');

			for( var c = 0; c < m.length; c++){
				var name = m[c].getAttribute('data-'+type).replace(/\s/, '').split(/\,/);

				for(var x = 0; x < name.length; x++)
					if( !(name[x] in jails[type+'s']) ){
						console.warn(
							print( '{0}.{1} is on html, but module is not loaded into Jails yet.', type, name[x] )
						);
					}
			}
		}
	}

	//3. Watch for emit's
	function emit_watcher(){

		for( var type in items )(function(type, items){

			for( var m in items[type] )(function(m){

				var fn = jails[type+'s'][m];

				jails[type+'s'][m] = function(element){

					fn.apply(this, arguments);
					var emit = this.emit;
					var listen = this.listen;

					this.emit = function(ev){
						console.log( print( '%c{0}.{1} emits \'{1}:{2}\'', type, m, ev ), 'color:green;' );
						emit.apply(this, arguments);
					};

					this.listen = function(ev){

						console.log( print( '{0}.{1} is listening to %c\'{2}\'', type, m, ev ), 'color:#336699;' );
						listen.apply(this, arguments);

						element.on(ev, function(){
							console.log( print( '{0}.{1} listened to %c\'{2}\'', type, m, ev ), 'color:green;' );
						});
					};

				};

			})(m);

		})(type, items);
	}

	//4. Method not found
	function no_method_found(target){

		for( var type in items){
			var m = (target||root).querySelectorAll('[data-'+type+']');

			for( var c = 0; c < m.length; c++){

				var element = $(m[c]);

				element.on('instance', function(e){
					e.stopPropagation();
				});

				element.on('execute', function(e, o){
					element.trigger('instance', function(name, instance){
						var method = o.args[0];
						if(!method){
							console.error( print( '{0}() was executed with no method argument. \nYou need to pass a method name. e.g {0}("someMethod")', this.name, method ) );
						}
						else if(!(method in this)){
							console.warn( print( '{0} has no method %c.{1}().', this.name, method ), 'color:red; font-weight:bold' );
							console.info( print('%cDon\'t worry with that warning if you have another component in the same html markup that has it ✓'), 'font-style:italic' );
						}
					});
				});
			}
		}
	}

	function refresh(){

		var ref = jails.refresh;

		jails.refresh = function( context ){

			context = context[0];

			no_used_modules( context );
			no_module_found( context );
			no_method_found( context );

			ref.apply(this, arguments);
		};
	}

	return function(scope){

		root = document.documentElement;

		console.log( '👓%c[ Welcome to Jails Debugger Module ]👓', 'color:#336699');

		no_used_modules();
		no_module_found();
		no_method_found();

		emit_watcher();
	};

});
