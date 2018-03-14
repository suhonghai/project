require(["config"], function(){
	require(["jquery", "template", "load","carousel", "cookie"], function($, template){
		// 加载轮播图
		$(function(){
			$(".banner_slider").carousel({
				imgs:[
					{href:"http://ximilu6.go2.cn?pos=a3.802631.3",src:"http://aodo.i.ximgs.net/1/394153/20180312153145838"}
					,{href:"http://mlnr715268.go2.cn/?pos=a3.802629.3",src:"http://aodo.i.ximgs.net/1/400554/20180309133325641"}
					,{href:"http://yinfei123.go2.cn/?pos=a3.802630.3",src:"http://aodo.i.ximgs.net/1/357194/20180312172450747"}
					,{href:"http://ximilu6.go2.cn?pos=a3.802631.3",src:"http://aodo.i.ximgs.net/1/394153/20180312153145838"}
					],
				width: 241,
				height:135,
				duration: 2000
			});
		});
		//加载prod1
		$(function(){
			$.getJSON("../mock/list.json", function(data){
				let rendData = {
					products: data.res_body.data
				};
				let html = template("prod1", rendData);
				$(".main_content").prepend(html);

			});
		});
		// 加载prod2
		$(function(){
			$.getJSON("../mock/list1.json", function(data){
				let rendData = {
					products:data.res_body.data
				}
				let html = template("prod2", rendData);
				$(".shili_content").prepend(html);
			});
		});
			// 加载prod3
		$(function(){
			$.getJSON("../mock/list2.json", function(data){
				let rendData = {
					products:data.res_body.data
				}
				let html = template("prod3", rendData);
				$(".yshy_content").prepend(html);
			});
		});
		//加载  轮播图1
		$(function(){
			$(".yshyfooter").carousel({
				imgs:[
					{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/l1.jpg"}
					,{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/l2.jpg"}
					,{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/l3.jpg"}
					,{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/l4.jpg"}
				],
				width: 1190,
				height: 265,
				duration:2000
			});
		});
		//渲染原产地货源
		$(function(){
			$.getJSON("../mock/list3.json", function(data){
				let rendData = {
					products: data.res_body.data
				}
				let html = template("prod4",rendData);
				$(".ycd_content1").prepend(html);
			});
		});
			//加载  轮播图2
		$(function(){
			$(".ycdfooter").carousel({
				imgs:[
					{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/y1.jpg"}
					,{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/y2.jpg"}
					,{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1" , src:"../images/l3.jpg"}
				],
				width: 1190,
				height: 265,
				duration:2000
			});
		});
		//猜你喜欢轮播1页
		$(function(){
			$.getJSON("../mock/list4.json", function(data){
				let rendData = {
					products: data.res_body.data
				}
				let html = template("prod5",rendData);
				$(".img1").prepend(html);
			});
		});
		//猜你喜欢轮播2页
		$(function(){
			$.getJSON("../mock/list4.json", function(data){
				let rendData = {
					products: data.res_body.data
				}
				let html = template("prod5",rendData);
				$(".img2").prepend(html);
			});
		});
		//猜你喜欢轮播3页
		$(function(){
			$.getJSON("../mock/list4.json", function(data){
				let rendData = {
					products: data.res_body.data
				}
				let html = template("prod5",rendData);
				$(".img3").prepend(html);
			});
		});
		$(function(){
			$(".main_content, .shili_content, .yshy_content, .ycd_content1").delegate(".img",'click', function(){
				let product = {
					src: $(this).find("img").attr("src"),
					img: $(this).next(".price").find("i").text(),
					brand:$(this).siblings(".brand").text()
				};
				$.cookie.json = true;
				let _prod = [];
					_prod.push(product);
				$.cookie("prods", _prod, {expries: 7, path:"/"});
				location = "../html/detail.html";
			});
		});
	});
});
