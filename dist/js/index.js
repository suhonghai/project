"use strict";require(["config"],function(){require(["jquery","template","load","carousel","cookie"],function(e,i){e(function(){e(".banner_slider").carousel({imgs:[{href:"http://ximilu6.go2.cn?pos=a3.802631.3",src:"http://aodo.i.ximgs.net/1/394153/20180312153145838"},{href:"http://mlnr715268.go2.cn/?pos=a3.802629.3",src:"http://aodo.i.ximgs.net/1/400554/20180309133325641"},{href:"http://yinfei123.go2.cn/?pos=a3.802630.3",src:"http://aodo.i.ximgs.net/1/357194/20180312172450747"},{href:"http://ximilu6.go2.cn?pos=a3.802631.3",src:"http://aodo.i.ximgs.net/1/394153/20180312153145838"}],width:241,height:135,duration:2e3})}),e(function(){e.getJSON("../mock/list.json",function(o){var t={products:o.res_body.data},n=i("prod1",t);e(".main_content").prepend(n)})}),e(function(){e.getJSON("../mock/list1.json",function(o){var t={products:o.res_body.data},n=i("prod2",t);e(".shili_content").prepend(n)})}),e(function(){e.getJSON("../mock/list2.json",function(o){var t={products:o.res_body.data},n=i("prod3",t);e(".yshy_content").prepend(n)})}),e(function(){e(".yshyfooter").carousel({imgs:[{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/l1.jpg"},{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/l2.jpg"},{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/l3.jpg"},{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/l4.jpg"}],width:1190,height:265,duration:2e3})}),e(function(){e.getJSON("../mock/list3.json",function(o){var t={products:o.res_body.data},n=i("prod4",t);e(".ycd_content1").prepend(n)})}),e(function(){e(".ycdfooter").carousel({imgs:[{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/y1.jpg"},{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/y2.jpg"},{href:"http://xinmeile.go2.cn/?pos=go2_a4?pos=a4.806984.1",src:"../images/l3.jpg"}],width:1190,height:265,duration:2e3})}),e(function(){e.getJSON("../mock/list4.json",function(o){var t={products:o.res_body.data},n=i("prod5",t);e(".img1").prepend(n)})}),e(function(){e.getJSON("../mock/list4.json",function(o){var t={products:o.res_body.data},n=i("prod5",t);e(".img2").prepend(n)})}),e(function(){e.getJSON("../mock/list4.json",function(o){var t={products:o.res_body.data},n=i("prod5",t);e(".img3").prepend(n)})}),e(function(){e(".main_content, .shili_content, .yshy_content, .ycd_content1").delegate(".img","click",function(){var o={src:e(this).find("img").attr("src"),img:e(this).next(".price").find("i").text(),brand:e(this).siblings(".brand").text()};e.cookie.json=!0;var t=[];t.push(o),e.cookie("prods",t,{expries:7,path:"/"}),location="../html/detail.html"})})})});