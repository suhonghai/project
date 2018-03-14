require(["config"], function(){
	require(["jquery", "template", "cookie", "load"], function($, template){
		$(function(){
			$.cookie.json = true;
			let data = $.cookie("prods");
			// console.log(data);
			$(".left").find("img").attr({src:data[0].src});
			$(".price").find("span").html(data[0].img);
			$(".huohao").find("span").html(data[0].brand);
		});
		

		//点击加入进货单跳到购物车界面
			$(function(){
				$(".zom").delegate(".cart",'click',function(){
					// console.log(this);
				//获取当前选购商品信息
					var product = {
						produce: " ",
						price: $(this).siblings(".price").find("span").first().text().slice(1),
						img: $(this).parent().siblings(".left").find("img").attr("src"),
						number: $(this).siblings(".huohao").find("span").text(),
						amount: 1
					};
					console.log(product.produce)
					console.log(product.price)
					console.log(product.img)
					console.log(product.number)
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
					// alert("加入成功");
					location = "../html/cart.html";
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
	})
});