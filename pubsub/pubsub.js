define(function(){

	//Inspired by:
	//http://dev.housetrip.com/2014/09/15/decoupling-javascript-apps-using-pub-sub-pattern/

	function PubSub( topics ){

		topics = {};

		return{

			subscribe :function( key, method ){
				topics[key] = topics[key] || [];
				topics[key].push( method );
			},

			publish :function( key, args ){
				topics[key] = topics[key] || [];
				topics[key].forEach(function( f ) {
					if( f ) f.apply( this, args );
				});
			},

			create :PubSub
		};
	}

	return PubSub();
});
