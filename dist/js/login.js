"use strict";require(["config"],function(){require(["jquery","cookie"],function(i){i(function(){}),i(function(){i(".login_form").submit(function(){return i.post("http://localhost/demo_Practice/php/login.php",i(this).serialize(),function(o){0===o.res_code?(i.cookie.json=!0,i.cookie("loginUser",o.res_body,{path:"/"}),location="/index.html"):alert("用户名或密码错误")},"json"),!1})})})});