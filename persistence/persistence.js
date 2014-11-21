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

			var base = {};
			base.on_update = m.on_update;

			m.data( JSON.parse(localStorage.getItem( m.name )) );

			m.on_update = function(data){
				base.on_update.apply(m, arguments);
				localStorage.setItem( m.name, JSON.stringify(data) );
			};

			this.unbind = function(){
				m.on_update = base.on_update;
			};
		},

		create :function(model){ return new this._class(model); }
	}


	return Persistence;
});
