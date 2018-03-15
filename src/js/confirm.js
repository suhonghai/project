require(["config"], function(){
	require(["jquery", "template", "cookie", "load"], function($, template){
			$(function(){
				//显示购物车数据
				$.cookie.json = true;

				// 读取cookie中保存的购物车数据
				let _products = $.cookie("confirmprod") || [];

				//判断是否有cookie并显示隐藏表格和提示
					if(_products.length === 0)
						;
					else
						$(".rmain_content").css({background:"none"});

				//渲染模板引擎
				let rendData = {products: _products}
				let	html = template("cart", rendData);
				$(".rmain_content").html(html);
				calcTotal();
				/*计算合计*/
				function calcTotal(){
					let total = 0;
					$(".i2").each(function(){
						total += Number($(this).text());
					});
					total += "元";
					$(".totalall").text(total);
				}
				$(".paytotal").on("click",function(){
					location ="/html/zhifubao.html";
				})
			});



	});
});

