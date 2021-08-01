*以下提供登入與註冊的測試使用方式

<MySQL>
1.mysql建立資料庫，名稱為dropbeat
2.建立table名為test
3.欄位有account, email, pwd

<php>
1.開啟XAMPP
2.修改apiLogin.php與apiSign.php檔中的MySQL登入資料
3.將apiLogin.php與apiSign.php檔案方在htdocs資料夾中

<頁面>
1.嘗試註冊，目前資料會抓帳號、信箱、密碼，生日跟是否有輸入內容尚未做判斷式
2.嘗試登入，輸入剛才的帳號與密碼，要兩個都正確右上角才會出現icon