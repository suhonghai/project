require.config({
	baseUrl : "/",
	paths : {
		jquery : "lib/jquery/jquery-1.12.4.min",
		cookie : "lib/jquery_plugins/jquery.cookie",
		zoom : "lib/jquery_plugins/jquery.elevateZoom-3.0.8.min",
		carousel : "lib/jquery_plugins/jquery.xmcarousel",
		template : "lib/artTemplate/template",
		load : "js/loadHeaderFooter"
	},
	shim : {
		carousel : {
			deps : ["jquery"]
		},
		zoom : {
			deps : ["jquery"]
		}
	}
});