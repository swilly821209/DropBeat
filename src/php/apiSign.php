<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $account = $request->account;
        $email = $request->email;
        $pwd = $request->pwd;

        // 請輸入自己的MySQL登入資料
        $servername = "127.0.0.1";
        $username = "root";
        $password = "00000000";
        $dbname = "DROPBEAT";

        // 建立連線
        $conn = new mysqli($servername, $username, $password, $dbname);
        // 確認連線
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO test (account, email, pwd)
        VALUES ('".$account."', '".$email."', '".$pwd."')";

        if ($conn->query($sql) === TRUE) {
            var_dump("New record created successfully");
        } else {
            var_dump("Error: " . $sql . "<br>" . $conn->error);
        }

        $conn->close();
    }
?>