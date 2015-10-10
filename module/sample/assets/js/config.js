require.config({

	baseUrl :'assets/js/',
	deps    :['jquery', 'jails', global.page],

	paths   :{
		jails		:'//rawgit.com/jails-org/Jails/rebuild/jails/source/jails.min',
		jquery 		:'//code.jquery.com/jquery-2.1.1.min'
	},

	callback :function( jquery, jails ){
		jails.start();
	}
});
