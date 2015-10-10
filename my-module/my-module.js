define([], function(){

	//Module don't need to depend on Jails
	//It's a valid AMD file.
	//Can be used on other projects without Jails

	return{
		//My module
		init :function(){
			alert('Module init called');
		}
	};

});
