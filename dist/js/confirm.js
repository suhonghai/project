"use strict";require(["config"],function(){require(["jquery","template","cookie","load"],function(o,c){o(function(){o.cookie.json=!0;var n=o.cookie("products")||[];0===n.length||o(".rmain_content").css({background:"none"});var t=c("cart",{products:n});function e(){var t=0;o(".ck_prod:checked").each(function(){t+=Number(o(this).parent().find(".i2").text())}),t+="元",o(".total span").text(t)}o(".rmain_content").html(t),o(".rmain_content .cart_template").each(function(t,c){o(this).data("prod",n[t])}),o(".rmain_content").on("click",".yichu",function(){var t=o(this).parent(".cart_template").data("prod"),c=o.inArray(t,n);n.splice(c,1),o.cookie("products",n,{expries:7,path:"/"}),o(this).parents(".cart_template").remove(),e()}),o(".rmain_content").on("blur",".input_amount",function(){var t=o(this).parents(".cart_template").data("prod");console.log(t),t.amount=o(this).val(),o.cookie("products",n,{expries:7,path:"/"}),o(this).parents(".cart_template").find(".i2").html((t.price*t.amount).toFixed(2)),e()}),o(".ck_all").click(function(){var t=o(this).prop("checked");o(".ck_prod").prop("checked",t),e()}),o(".rmain_content").on("click",".ck_prod",function(){o(".ck_all").prop("checked",o(".ck_prod:checked").length===n.length),e()}),o(".pay").on("click",function(){location="../html/confirm.html"})})})});