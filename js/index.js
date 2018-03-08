require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		$.getJSON("/mock/list.json", function(data){
			data = {list : data.res_body.data};
			let html = template("list_template", data);
			$(".list").html(html);
		});
	});
});