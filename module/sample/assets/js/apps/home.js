define([

	'jails',
	'../../../../module'

], function( jails, Module ){

	jails.app('sample', function(html, data){

		this.init = function(){
			Module.init();
		};

	});

});
