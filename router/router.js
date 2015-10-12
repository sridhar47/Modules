define(['jails'], function(jails){

	var Router = {

		_class :function(o){

			o = o || {};

			var
				_self = this, uri,
				win = $(window), callback;

			callback = o.callback || new Function;

			this.context = o.context || function(){ return location.hash };
			this.routes = null;

			this.execute = function(routes, url){

				var ret;

				routes = routes || this.routes;
				url    = url || this.context();
				ret = filter( routes, url );

				callback();
				return ret;
			};

			this.watch = function(routes, always){

				this.routes = routes || this.routes;

				callback = always? always :callback;
				win.on('hashchange', change);
			};

			this.change = function(){
				change();
			};

			function change(){

				if( !_self.context() ) return;

				if( uri != _self.context() ){
					uri  = _self.context();
					_self.execute( null, _self.context() );
				}
			}
		},

		create :function(routes, context){
			return new this._class(routes, context);
		}
	};

	function filter(array, url){

		var
			result = null,
			i, json, key, param, aux, len, j, k, ret, always;

		ret = {};

		for( i = 0; i < array.length; i++){
			json = array[i];

			for( key in json ){

				param = key.match(/(\w*)\/\:\w*/g);
				aux = key.replace(/\:\w*/g, '([^&/#?]+)');

				if( result = url.match( aux ) ){

					result.shift();
					len = result.length;

					for(j = 0; j < len; j++){
						result[j] = decodeURIComponent( result[j] );
						k = param[j].split(/\//).pop().replace(/\W/, '') || 'root';
						ret[ k ] = result[j];
					}

					jails.data().params = ret;
					json[key].apply( ret, result );

					return ret;
				}
			}
		}


		return ret;
	};

	return Router;

});
