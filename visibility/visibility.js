define(function(){

	return function( html, visible, hidden ){

		var
			cp = this, win, noop, methods,
			x, y, z, h, visible, hidden, once;

		noop = new Function;
		visible	= visible || noop;
		hidden 	= hidden || noop;
		win		= $(window);
		h 		= html.get(0).scrollHeight;

		methods = {

			visible :visible,
			hidden	:hidden,

			check :function(){

				x = window.scrollY;
				y = window.innerHeight;
				z = html.offset().top;

				if( ((z+h) <= x) || (x+y) < z ){
					methods.hidden();
				}else{
					methods.visible();
				}
			}
		}

		function check(){
			methods.check();
		}

		win.on('scroll', check);

		return{

			once 	:function( callback ){

				var once = false;
				callback = callback || noop;

				methods.visible = function(){
					callback();
					methods.visible = noop;
				};

				check();
				return this;
			},

			visible :function( callback ){

				methods.visible = callback;
				check();
				return this;
			},

			hidden 	:function( callback ){

				methods.hidden = callback;
				check();
				return this;
			},

			off		:function( uat ){

				if( uat && methods[uat] )
					methods[uat] = noop;
				return this;
			}
		};

	};
});
