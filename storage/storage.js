define(function(){

	//https://gist.github.com/cowboy/3749767
	function stringify(obj, prop){
		var placeholder = '____PLACEHOLDER____';
		var fns = [];
		var json = JSON.stringify(obj, function(key, value) {

				if (typeof value === 'function') {
					fns.push(value);
					return placeholder;
				}
				return value;
			}, 2);

			json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
				return fns.shift();
			});
			return 'this["' + prop + '"] = ' + json + ';';
	}

	return{
		set :function( name, data ){
			localStorage.setItem( name, stringify( data ) );
			return data;
		},

		get :function( name ){
			return (new Function( 'return ' + localStorage.getItem( name ) ) )();
		},

		remove :function( name ){
			var data = this.get( name );
			localStorage.removeItem( name );
			return data;
		}
	};
});
