define(function(){

	var Persistence, models = {};

	Persistence = function(model){

		return{

			on :function(){

				models[ model.name ] = Entity.create( model );
			},

			detach :function(){

				var
				name = model.name,
				m = models[name];

				if(!m) return;

				m.unbind();
				delete models[name];
			},

			drop :function(){
				localStorage.removeItem( model.name );
			},

			off :function(){

				var name = model.name;
				localStorage.removeItem( name );

				this.detach( model );
			}
		};

	};

	var Entity = {

		_class :function(m){

			var method = {}, current;

			current = change;

			m.data( JSON.parse(localStorage.getItem( m.name )) );
			m.on('change', execute);

			this.unbind = function(){
				current = noop;
			};

			function change(){
				localStorage.setItem( m.name, JSON.stringify(data) );
			}

			function noop(){}

			function execute(e, data){
				current( data );
			}

		},

		create :function(model){ return new this._class(model); }
	}


	return Persistence;
});
