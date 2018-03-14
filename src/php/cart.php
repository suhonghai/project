<?php 	
	$conn = mysql_connect("localhost", "root", "");
	mysql_select_db("h51710", $conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	$action = $_GET["action"];
	$uid = $_GET["uid"];
	if ($action == "load") { // 加载用户的购物车信息
		$sql = "SELECT * FROM mall_carts WHERE uid='$uid' and status=0";
		$result = mysql_query($sql);
		$arr = array();
		while($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			$arr[] = $row;
		}
		echo '{"res_code":0, "res_error":"", "res_body":{"data":'. json_encode($arr) .'}}';
	} else if($action == "combine") { // 合并用户本地与服务器购物车信息
		$products = stripslashes($_GET["products"]);
		$products = json_decode($products);
		foreach ($products as $key => $value) {
			$pid = $value->pid;
			$sql = "SELECT COUNT(*) FROM mall_carts WHERE uid='$uid' AND pid='$pid' AND status=0";
			$result = mysql_query($sql);
			if ($row = mysql_fetch_array($result)) {
				if ($row[0] == 0) {
					add($pid, $value->title, $value->price, $value->amount, $value->img);
				} else {
					modify_amount($uid, $pid, $value->amount, "combine");
				}
			}
		}
	} else if ($action == "add") { // 添加购物车信息
		$pid = $_GET["pid"];
		$title = $_GET["title"];
		$price = $_GET["price"];
		$amount = $_GET["amount"];
		$img = $_GET["img"];
		add($uid, $pid, $title, $price, $amount, $img);
	} else if ($action == "modify_amount") { // 修改商品数量
		$pid = $_GET["pid"];
		$amount = $_GET["amount"];
		modify_amount($uid, $pid, $amount, "total_amount");
	} else if ($action == "del_single") { // 删除单件商品
		$pid = $_GET["pid"];
		$sql = "UPDATE mall_carts SET status=-1 WHERE uid='$uid' AND pid='$pid' AND status=0";
		$result = mysql_query($sql);
		if ($result)
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"success"}}';
		else
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"failed"}}';
	} else if ($action == "del_multi") { // 删除选中商品
		$pids = $_GET["pids"];
		$sql = "UPDATE mall_carts SET status=-1 WHERE uid='$uid' AND pid IN ($pids) AND status=0";
		$result = mysql_query($sql);
		if ($result)
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"success"}}';
		else
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"failed"}}';
	} else if ($action == "clear") { // 清空购物车
		$sql = "UPDATE mall_carts SET status=-1 WHERE uid='$uid' AND status=0";
		$result = mysql_query($sql);
		if ($result)
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"success"}}';
		else
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"failed"}}';
	}
	
	// 关闭数据库连接
	mysql_close();

	function add($uid, $pid, $title, $price, $amount, $img) {
		$sql = "INSERT INTO mall_carts VALUES (NULL, '$uid', '$pid', '$title', '$price', '$amount', '$img', 0)";
		$result = mysql_query($sql);
		if ($result)
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1,"message":"success"}}';
		else
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"failed"}}';
	}

	function modify_amount($uid, $pid, $amount, $status) {
		if ($status == "combine")
			$str = "amount=amount+'$amount'";
		else
			$str = "amount='$amount'";
		$sql = "UPDATE mall_carts SET $str WHERE uid='$uid' AND pid='$pid' AND status=0";
		$result = mysql_query($sql);
		if ($result)
			echo '{"res_code":0, "res_error":"", "res_body":{"status":1, "message":"success"}}';
		else
			echo '{"res_code":0, "res_error":"", "res_body":{"status":0, "message":"failed"}}';
	}
 ?>