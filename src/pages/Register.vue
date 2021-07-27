<template>
  <div id="app">
    <div class="member_container" >
      <p class="member_title">會員註冊</p>
      <input type="text" placeholder="請輸入帳號名稱" />
      <input type="email" placeholder="信箱" />
      <input type="password" placeholder="密碼" />
      <input type="password" placeholder="確認密碼" />
      <p class="birthday">生日</p>
      <br />
      <form action="">
        <select>
          <option disabled>年</option>
          <option value="year" v-for="year in years" :key="year">{{1949+year}}年</option>
        </select>
        <select>
          <option  disabled>月</option>
          <option value="month" v-for="month in months" :key="month.months">{{month}}月</option>
        </select>
        <select>
          <option  disabled>日</option>
          <option value="day" v-for="day in days" :key="day">{{day}}日</option>
        </select>
      </form>
      <a href="#" class="registered">註冊</a>
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
      <p class="already">已經有帳號了？<a href="#" class="now_login">立即登入</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      years: 101,
      months: 12,
      days: 31
    }
  }
}
</script>

<style scoped>
.member_title {
  text-align: center;
  padding: 10px;
  font-size: 24px;
  color: #707070;
}
.member_container {
  margin: 0 auto;
  width: 380px;
  /* height: 900px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 720px;
}
p {
  width: 210px;
  text-align: center;
}
input {
  border-radius: 5px;
  margin: 7px auto;
  padding: 8px;
  outline: none;
  border: 1px solid #b5b5b5;
  width: 235px;
}
input:focus {
  border: 1px solid #ff9d83;
  border-radius: 5px;
}
input::-webkit-input-placeholder {
  color: #b5b5b5;
}
.birthday {
  text-align: left;
  font-weight: bold;
  color: #7b7b7b;
  margin-right: 150px;
  margin-left: 80px;
  margin-top: 5px;
}
form {
  font-size: 0;
}
select:first-child {
  width: 85px;
  background-image: url("https://truth.bahamut.com.tw/s01/202107/954ba87f268da64497442dda478ca750.PNG");
  background-repeat: no-repeat;
  background-position: 62px 10px;
  background-size: 19%;
}
select {
  margin: 5px 1px;
  border-radius: 5px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 65px;
  border: 1px solid #b5b5b5;
  padding: 7px;
  background-image: url("https://truth.bahamut.com.tw/s01/202107/954ba87f268da64497442dda478ca750.PNG");
  background-repeat: no-repeat;
  background-position: 43px 10px;
  background-size: 26%;
  color: #b5b5b5;
  font-size: 16px;
  margin: 5px;
}
option {
  background: transparent;
  border: 0;
}
select:focus {
  border: 1px solid #ff9d83;
  border-radius: 5px;
}
.registered {
  color: white;
  background-color: #ff9d83;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 50px 7px 50px;
  width: 235px;
  text-align: center;
}
.registered:hover {
  background-color: #31bdc5;
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
.already {
  margin: 10px;
  font-weight: bold;
  color: #b5b5b5;
}
.already .now_login {
  color: #ff9d83;
  font-weight: bold;
  margin-left: 5px;
}
.already .now_login:hover {
  border-bottom: 1px solid #ff9d83;
}
</style>
