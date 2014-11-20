define(function(){

	var Router = {

		_class :function(routes, context){

			var _self = this, uri, win = $(window);

			this.context = context || location,
			this.routes = routes || null;

			this.execute = function(routes, url){

				routes = routes || this.routes;
				url    = url || this.context.hash;

				return filter( routes, url );
			};

			this.watch = function(routes){

				this.routes = routes || this.routes;
				win.on('hashchange', change);
			};

			function change(){

				if( !_self.context.hash ) return;

				if( uri != _self.context.hash ){
					uri = _self.context.hash;
					_self.execute( null, _self.context.hash );
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
			i, json, key, param, aux, len, j, k, ret;

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
						k = param[j].split(/\//).shift() || 'root';
						ret[ k ] = result[j];
					}

					json[key].apply( ret, result );

					return ret;
				}
			}
		}

		return ret;
	};

	return Router;

});
