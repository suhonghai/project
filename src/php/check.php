<?php 
	// 获取待注册的用户名
	$email = $_GET["email"];

	/* 查询数据库中是否存在注册的用户信息 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");

	// 设置读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	// 选择数据库
	mysql_select_db("h51710");
	// 创建查询语句
	$sql = "SELECT COUNT(*) FROM mall_users WHERE email='$email'";
	// 执行SQL语句，返回执行查询结果集
	$result = mysql_query($sql);

	// 判断是否存在
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] >= 1) // 用户存在
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"邮箱已存在"}}';
		else // 用户不存在
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"邮箱可用"}}';
	} else {
		echo '{"res_code":-1, "res_error":"服务器异常，用户检测出错", "res_body":{}}';
	}

	// 关闭数据库连接
	mysql_close();
 ?>