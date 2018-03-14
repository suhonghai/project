require(["config"], function(){
	require(["jquery","cookie"], function($){
		//验证码
		$(function(){
			// console.log($("#canvas").font);
			// $("#yanzheng").blur(function(){
			// 	$(this).val()
			// });
		});
		//提交表单到后台
		$(function(){
			$(".login_form").submit(function(){
				$.post("http://localhost/demo_Practice/php/login.php", $(this).serialize(), function(data){
					if(data.res_code === 0){
						//保存登录成功的信息到cookie中
						$.cookie.json = true;//自动调用JSON.stringfly(),JSON.parse()来转换json值
						$.cookie("loginUser", data.res_body, {path:"/"});
						location = "/index.html"; 
					}
					else{
						alert("用户名或密码错误");
					}
				},"json");
				return false;
			});
		});

	});
});