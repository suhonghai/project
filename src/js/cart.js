require(["config"], function(){
	require(["jquery", "template", "cookie", "load"], function($, template){
			$(function(){
				//显示购物车数据
				$.cookie.json = true;

				// 读取cookie中保存的购物车数据
				let _products = $.cookie("products") || [];

				//判断是否有cookie并显示隐藏表格和提示
					if(_products.length === 0)
						;
					else
						$(".rmain_content").css({background:"none"});

				//渲染模板引擎
				let rendData = {products: _products}
				let	html = template("cart", rendData);
				$(".rmain_content").html(html);

				//将当前遍历到的数据缓存在行中
				$(".rmain_content .cart_template").each(function(index, element){
					//在当前遍历到的行中缓存与之对应的商品信息
					$(this).data("prod", _products[index]);
				});
				/***************************************/
				// 购物车操作
				// 删除商品:事件委派
				$(".rmain_content").on("click", ".yichu", function(){
					// 获取当前删除行中的对象商品
					let _prod = $(this).parent(".cart_template").data("prod");
					// 查找其在peoducts中的索引
					let _index = $.inArray(_prod, _products);
					//从数组中删除元素
					_products.splice(_index, 1);
					//从cookie中删除元素
					$.cookie("products", _products, {expries:7, path: "/"});
					// 从DOM中删除
					$(this).parents(".cart_template").remove();

					//计算合计
					calcTotal();
				});
				//输入数量修改
				$(".rmain_content").on("blur", ".input_amount", function(){
					//找到这一行缓存的数据
					let _prod = $(this).parents(".cart_template").data("prod");
					console.log(_prod);
					//把输入的值修改给缓存的数量
					_prod.amount = $(this).val();
					//保存cookie
					$.cookie("products", _products, {expries: 7, path: "/"});
					//修改小计
					$(this).parents(".cart_template").find(".i2").html((_prod.price * _prod.amount).toFixed(2));
					//计算合计
					calcTotal();
				});


			/*全选*/
				$(".ck_all").click(function(){
					//获取全选复选框选中状态
					let status = $(this).prop("checked");
					//设置所有行钱复选框与全选状态一致
					$(".ck_prod").prop("checked", status);
					//计算合计
					calcTotal();
				});
				// 部分选中
				$(".rmain_content").on("click", ".ck_prod", function(){
					//当所有的.ck_prod的值为checked时把全选的checked值设置为true
					$(".ck_all").prop("checked", $(".ck_prod:checked").length === _products.length);
					//计算合计
					calcTotal();
				});
				/*计算合计*/
				function calcTotal(){
					let total = 0;
					$(".ck_prod:checked").each(function(){
						total += Number($(this).parent().find(".i2").text());
					});
					total += "元";
					$(".total span").text(total);
				}
				$(".pay").on("click",function(){
					location ="../html/confirm.html" ;
				})
			});



	});
});

