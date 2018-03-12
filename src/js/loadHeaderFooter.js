define(["jquery", "cookie"], function() {
	$("header").load("/html/include/header.html", function(){
		// /* 绑定搜索键盘事件 */
		// $(".text .bottom_1").on("keyup", function(){
		// 	// jsonp 接口
		// let val = $(this).val(),
		// 	url = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&callback=?`;
		// 	$.ajax({
		// 		type : "get",
		// 		url : url,
		// 		dataType : "jsonp",
		// 		success : function(data){
		// 			let html = "";
		// 			data.result.forEach(function(curr){
		// 				html += `<div style="width:430px; height:10px; border:1px solid red;">${curr[0]}</div>`;
		// 			});
		// 			$(".suggest").html(html);
		// 		}
		// 	});
		// });

		// /* 查询是否有登录用户 */
		// let user = $.cookie("loginUser");
		// if (user)
		// 	$(".login_reg").html(`<a href="${user}"></a>`);
	});
	$("footer").load("/html/include/footer.html",function(){
		
	});

});