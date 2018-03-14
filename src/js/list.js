require(["config"], function(){
	require(["jquery", "template", "cookie", "load"], function($, template){
		$(function(){
			$.getJSON("../mock/list5.json", function(data){
				let rendData = {
					products:data.res_body.data
				}
				let html = template("prod5", rendData);
				$(".main_content").html(html);
				$("img").load(function(){
						//获取dom元素
				$(function(){
					let height, spacing, boxWidth;
					let containerWidth = $(".main_content").width() - 17,
						imgBoxes = $(".prod");
					boxWidth = $(".prod").width();
					let cols = Math.floor(containerWidth / boxWidth);

					spacing = (containerWidth - cols * boxWidth) / (cols + 1);

					height = new Array(cols);

					height.fill(0);
					
					// 最短列
					$.each(Array.from(imgBoxes), function(){
						let index = height.indexOf(Math.min.apply(null, height));
						$(this).css({left: (index + 1) * spacing + index * boxWidth, top: height[index] + 10});
						height[index] += parseFloat($(this).css("height")) + 10;
						$(".main_content").css({height: Math.max.apply(null, height) + 10});
					});
				});
				});
			});
		});
		//点击图图片跳到详情页面
		$(function(){
			$(".main_content").delegate("img",'click',function(){
				let product = {
					src: $(this).attr("src"),
					img: $(this).siblings(".price").text().slice(1),
					brand:$(this).parent().siblings(".number").text()
				};
				console.log(product.img)
				$.cookie.json = true;
				let _prod = [];
					_prod.push(product);
				$.cookie("prods", _prod, {expries: 7, path:"/"});
				location = "../html/detail.html";
			});
			//点击加入进货单跳到购物车界面
			$(function(){
				$(".main_content").delegate(".cart",'click',function(){
				//获取当前选购商品信息
					var product = {
						produce: $(this).parent().prev().text(),
						price: $(this).parent().siblings(".img").find(".price").text().slice(1),
						img: $(this).parent().siblings(".img").find("img").attr("src"),
						number: $(this).parent().siblings(".number").text(),
						amount: 1
					};
					//cookie
					$.cookie.json = true;
					//先查找cookie中是否已经保存有购物车
					let _products = $.cookie("products") || [],
						index = exist(product.img, _products);
						if(index ===-1){//新添加商品
							_products.push(product);		
						}else{
							_products[index].amount++;
						}
					//保存在cookie中
					$.cookie("products", _products, {expries: 7, path:"/"});
					alert("加入成功");
					return false;
				});
				//查找指定id的商品在数组中的坐标
				function exist(src, products){
					for(let i = 1;i < products.length;i++){
						if(products[i].img === src)
							return i;
					}
					return -1;
				}
			});
		});
	});
});