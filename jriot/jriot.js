define(['riot'], function( riot ){

	return function( mixin ){

		return function(element, anno){

			var component = this;
			var tag = element.getAttribute('riot-tag');
				tag = tag || element.nodeName.toLowerCase();

			riot.tag( tag, element.innerHTML, function(opts){
				this.component = component;
				mixin.call(this, element, anno, opts);
			});

			riot.mount( element );
		};

	};
});
