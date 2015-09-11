define(function(){
	
	return{
		set :function( name, data ){
			localStorage.setItem( name, JSON.stringify( data ) );
			return data;
		},

		get :function( name ){
			return JSON.parse(localStorage.getItem( name ));
		},

		remove :function( name ){
			var data = this.get( name );
			localStorage.removeItem( name );
			return data;
		}
	};
});
