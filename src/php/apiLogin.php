<?php
    header("Access-Control-Allow-Origin: *");


    // 請輸入自己的MySQL登入資料
    $mysqli=new mysqli('127.0.0.1','root','00000000','DROPBEAT');

    // 請在mysql建立dropbeat資料庫，並在裡面建立test的table
    $sql="select * from test";
    $res=$mysqli->query($sql);

    $arr=array();
	while ($row=$res->fetch_assoc()) {
		$arr[]=$row;
	}

    $res->free();
	//關閉連線
	$mysqli->close();
	
	echo(json_encode($arr));//這裡用echo而不是return
?>