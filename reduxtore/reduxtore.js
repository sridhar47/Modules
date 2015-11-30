define(function(){

	return function( reducer, state ){

		var listeners = [];
		state = state || {};

		this.getState = function(){
			return state;
		};

		this.dispatch = function(action){
			state = reducer( state, action );
			listeners.forEach(function(listener){ listener(); });
		};

		this.subscribe = function( listener ){
			listeners.push( listener );
			return function(){
				listeners = listeners.filter(function(l){
					return l !== listener;
				});
			};
		};

		this.dispatch({});
	};
});
