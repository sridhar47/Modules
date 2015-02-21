define(function(){

	function request(method, verb){

		return function(url, data, type){
			data = data || {};
			verb? data._method = verb :null;
			return $[method](url, data, null, type || 'json');
		}
	}

	return {
		'post'	:request('post'),
		'get'	:request('get'),
		'json'	:request('getJSON'),
		'put'	:request('post', 'put'),
		'delete':request('post', 'delete')
	};

});
