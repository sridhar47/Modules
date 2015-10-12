define(function(){

	return function(name, Class){

		var data = {}, model;

		Class.apply( model = {

			name :name,

			data :function(response, id){
				if(response){
					data = response;
					if(id){
						data = this.transform(id, response);
					}
					$? $(this).trigger('change', data) :null;
				}
				else return data;
			},

			on :function(action, method){
				$(this).on(action, function(e, o){
					method.call(this, o);
				});
			},

			trigger :function(action, params){
				$(this).trigger(action, params);
			},

			find :function(id){
				return data[id];
			},

			remove :function(id){
				delete data[id];
				this.trigger( 'change', data );
			},

			update :function(id, value){
				data[id] = value;
				this.trigger( 'change', data );
			},

			to_array :function(){
				return $.map( data, function(item){ return [item]; });
			},

			transform :function(primary, response){

				response = response || data;
				response = response.push? response :[ response ];
				var json = {}, l = response.length, i, item;

				for(i = 0; i < l; i++){
					item = response[i];
					json[ item[primary || i] ] = item;
				}

				count = i;
				return json;
			}

		});

		return model;
	};
});
