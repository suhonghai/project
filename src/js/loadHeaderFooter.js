define(["jquery", "cookie"], function() {
	$("header").load("/html/include/header.html", function(){
		/* 绑定搜索键盘事件 */
		$(".bottom_1 .text").keyup(function(){
			// jsonp 接口

		let val = $(this).val(),
			url = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&callback=?`;
			$.ajax({
				type : "get",
				url : url,
				dataType : "jsonp",
				success : function(data){
					let html = "";
					data.result.forEach(function(curr){
						html += `<div style="width:430px; height:30px;"><a href="#" style="color:black;">${curr[0]}</a></div>`;
					});
					$(".suggest").html(html);
				}
			});
		});

		/* 查询是否有登录用户 */
		$.cookie.json = true;
		let user = $.cookie("loginUser");
		if (user && user.firstname !== undefined){
			$(".left_1 .login").html(`<a href="/html/user.html" style="padding:9px;">欢迎${user.firstname}</a>`);
			$(".left_2, .left_3").css({display:"none"});
			$(".left_1 a").hover(function(){
				$(".zhuxiao").show();
				$(".zhuxiao").hover(function(){
					$(".zhuxiao").show();
				},function(){
					$(".zhuxiao").hide();
				});
			},function(){
				$(".zhuxiao").hide();
			});
			$(".zhuxiao").on("click", function(){
				let _date = +new Date() - 1;
				$.cookie("loginUser",{expries:_date});
				location = "/index.html";
			});
		}
			
	});
	$("footer").load("/html/include/footer.html",function(){
		
	});

});