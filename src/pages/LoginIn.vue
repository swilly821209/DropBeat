<template>
  <div id="app">
    <div class="container">
      <p class="title">會員登入</p>
      <input type="text" placeholder="請輸入帳號名稱 / 電子郵件">
      <input type="password" placeholder="密碼">
      <p class="fail">登入失敗, 請輸入正確的帳號與密碼！</p>
      <div class="login_txt">
        <div class="first">
          <img class="uncheckbox" src="https://img.icons8.com/ios/50/000000/unchecked-checkbox.png"/>
          <p>保持登入狀態</p>
        </div>
        <div class="second">
          <a href="#">忘記密碼？</a>
        </div>
      </div>
      <router-link to="/" @click="login" class="text-red-400 block login_btn">登入</router-link>
      <a href="#" class="community">
        <div class="icon_container">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 50.304 50"><path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M50.867,25.715A25.152,25.152,0,1,0,21.785,50.563V32.985H15.4V25.715h6.389V20.173c0-6.3,3.753-9.785,9.5-9.785a38.708,38.708,0,0,1,5.631.491v6.187H33.743c-3.124,0-4.1,1.939-4.1,3.928v4.721H36.62L35.5,32.985h-5.86V50.563A25.161,25.161,0,0,0,50.867,25.715Z" transform="translate(-0.563 -0.563)" fill="#305ea7"/></svg>
        </div>
        <p class="icon_txt_1">Facebook 登入</p>
      </a>
      <a href="#" class="community">
        <div class="icon_container">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 50 50"><path id="google" d="M25-7733a24.855,24.855,0,0,1-9.731-1.964,24.917,24.917,0,0,1-7.947-5.358,24.907,24.907,0,0,1-5.358-7.946A24.846,24.846,0,0,1,0-7758a24.846,24.846,0,0,1,1.965-9.731,24.915,24.915,0,0,1,5.358-7.946,24.918,24.918,0,0,1,7.947-5.358A24.855,24.855,0,0,1,25-7783a24.855,24.855,0,0,1,9.731,1.964,24.918,24.918,0,0,1,7.947,5.358,24.915,24.915,0,0,1,5.358,7.946A24.846,24.846,0,0,1,50-7758a24.846,24.846,0,0,1-1.965,9.731,24.907,24.907,0,0,1-5.358,7.946,24.917,24.917,0,0,1-7.947,5.358A24.855,24.855,0,0,1,25-7733Zm.781-42.269a17.328,17.328,0,0,0-12.336,5.1,17.329,17.329,0,0,0-5.1,12.336,17.326,17.326,0,0,0,5.1,12.336,17.328,17.328,0,0,0,12.336,5.1,18.482,18.482,0,0,0,6.881-1.262,15.425,15.425,0,0,0,5.329-3.522,15.68,15.68,0,0,0,3.442-5.387,18.975,18.975,0,0,0,1.222-6.857,15.336,15.336,0,0,0-.273-2.911h-16.6v6h9.9c-.412,2.6-3.012,7.516-9.9,7.516a10.922,10.922,0,0,1-10.807-11.01,11.158,11.158,0,0,1,.946-4.577,10.565,10.565,0,0,1,2.491-3.468,11.208,11.208,0,0,1,7.528-2.967,9.713,9.713,0,0,1,6.79,2.7l4.745-4.563a16.864,16.864,0,0,0-5.226-3.346A17.259,17.259,0,0,0,25.781-7775.269Z" transform="translate(0 7783)" fill="#bf1c22"/></svg>
        </div>
        <p class="icon_txt_2">Google 登入</p>
      </a>
      <p class="line">123</p>
      <span>還沒有帳號嗎？<router-link to="/Register" class="text-orange">立即註冊</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.dispatch('login', true)
    }
  }
}
</script>

<style scoped>
#app{
    display: flex;
    justify-content: center;
    align-content: center;
}
.container{
    height: 650px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #707070;
    flex-wrap: wrap;
    width: 300px;
}
p.title{
    font-size: 24px;
    margin-bottom: 20px;
}
p.fail{
    opacity: 0;
    color: #ff9d83;
    height: 30px;
}
input{
  border-radius: 5px;
  margin: 7px auto;
  padding: 8px;
  outline: none;
  border: 1px solid #b5b5b5;
  width: 260px;
}
input:focus {
  border: 1px solid #ff9d83;
  border-radius: 5px;
}
.uncheckbox{
    transform: scale(0.4);
    position: absolute;
    top: -13px;
    left: -16px;
}
.login_txt{
    display: flex;
    justify-content: space-between;
    width: 260px;
    align-items: center;
    position: relative;
}
.login_txt .first{
    padding-left: 25px;
    cursor: pointer;
}
.login_txt .second{
    cursor: pointer;
}
.login_txt div p{
    display: inline-block;
}
.login_btn{
    color: white;
    background-color: #ff9d83;
    border-radius: 5px;
    padding: 10px;
    margin: 15px 0 7px 0;
    width: 260px;
    text-align: center;
}
.community {
  width: 100px;
  height: 60px;
  margin: 15px;
}
.icon_container {
  width: 100px;
  display: flex;
  justify-content: center;
}
.icon_txt_1 {
  font-family: "Roboto", "Noto Sans TC";
  font-weight: bold;
  color: #7b7b7b;
  width: 107px;
}
.icon_txt_1:hover {
  border-bottom: 1px solid #7b7b7b;
}
.icon_txt_2 {
  font-family: "Roboto", "Noto Sans TC";
  color: #7b7b7b;
  font-weight: bold;
  width: 90px;
  margin-left: 6px;
}
.icon_txt_2:hover {
  border-bottom: 1px solid #7b7b7b;
}
.line {
  color: white;
  border-bottom: 1px solid #b5b5b5;
  margin: 10px;
  width: 300px;
}
span{
    color: #B5B5B5;
}
</style>
