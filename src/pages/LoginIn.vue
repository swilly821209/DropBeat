<template>
  <!-- <router-link to="/AccountManage" class="text-red-400 block">帳號管理頁面</router-link> -->
  <div id="app">
    <div class="container">
      <p class="title">會員登入</p>
      <input type="text" placeholder="請輸入帳號名稱 / 電子郵件" class="account" v-model="member.account">
      <input type="password" placeholder="密碼" class="password" v-model="member.pwd">
      <p v-if="warn" class="text-xs justify-self-start w-[256px] text-orange">登入失敗, 請輸入正確的帳號與密碼！</p>
      <div class="login_txt ">
        <div class="first">
          <!-- <img class="uncheckbox" src="https://img.icons8.com/ios/50/000000/unchecked-checkbox.png"/>
          <p>保持登入狀態</p> -->
          <input type="checkbox" v-model="keepLogin" name="keep" class="checkbox  border-2 border-gray-light rounded-md ">
          <label for="keep" class=" text-sm text-gray-dark ">保持登入狀態</label>
        </div>
        <div class="second">
          <a href="#" class="text-sm text-gray-dark hover:text-orange">忘記密碼？</a>
        </div>
      </div>
      <!-- <router-link to="/" @click="login" class="text-red-400 block login_btn">登入</router-link> -->
      <button @click="login" class="text-red-400 block login_btn">登入</button>
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
      <p class="line"></p>
      <span>還沒有帳號嗎？<router-link to="/Register" class="text-orange hover:text-blue-light ml-2">立即註冊</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keepLogin: true,
      warn: false,
      member: {
        account: '',
        pwd: ''
      },
      users: [],
      container: ''
    }
  },
  methods: {
    async login () {
      const form = new FormData()
      form.append('account', this.member.account)
      form.append('password', this.member.pwd)
      const response = await fetch('http://localhost/DropbeatBackend/login.php', {
        method: 'POST',
        body: form
      })
      const responseData = await response.json()
      if (responseData.length > 0) {
        this.$store.dispatch('login', {
          account: responseData[0].account, // 存localStorage
          memberId: responseData[0].member_id // 存localStorage
        })
        if (this.keepLogin) {
          localStorage.setItem('member', JSON.stringify({
            account: responseData[0].account,
            memberId: responseData[0].member_id
          }))
        }
        this.$router.replace('/')
      } else {
        this.warn = true
      }
      // console.log(this.$store.getters.loginState) // 這是user account
      // console.log(this.$store.getters.memberIdState) // 這是user id
    }
  }
}
</script>

<style scoped>
#app{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container{
    /* border:1px solid red; */
    /* height: 650px; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7b7b7b;
    flex-wrap: wrap;
    width: 300px;
    margin: 90px 0 0 0;
}
p.title{
    font-size: 32px;
    font-weight: 500;
    color:#383838;
    margin-bottom: 20px;
}
.account, .password{
  border-radius: 5px;
  margin: 7px auto;
  padding: 8px;
  outline: none;
  border: 2px solid #ededed;
  width: 260px;
  font-size: 16px;
}
input:focus {
  border: 2px solid #ff9d83;
}
input::-webkit-input-placeholder {
  color: #b5b5b5;
}
/* .uncheckbox{
    transform: scale(0.4);
    position: absolute;
    top: -13px;
    left: -16px;
} */
.login_txt{
    display: flex;
    justify-content: space-between;
    width: 260px;
    /* align-items: center; */
    /* position: relative; */
    margin: 30px 0 0 0;
}
.login_txt .first{
    /* padding-left: 25px; */
    display: flex;
    align-items: center;
    padding: 0 0 0 5px;
}
.checkbox{
  transform: scale(1.2);
  margin: 0 5px 0 0;
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
    margin: 10px 0 7px 0;
    width: 260px;
    text-align: center;
}
.login_btn:hover{
      background-color: #31BDC5;
}
.community {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* font-family: "Roboto", "Noto Sans TC"; */
  color: #7b7b7b;
  font-size: 12px;
  font-weight: 500;
  /* width: 107px; */
  margin-top: -5px;
}
.community:hover .icon_txt_1 {
  border-bottom: 1px solid #7b7b7b;
}
.icon_txt_2 {
  /* font-family: "Roboto", "Noto Sans TC"; */
  color: #7b7b7b;
  font-size: 12px;
  font-weight: 500;
  /* width: 90px; */
  margin: -5px 0 0 6px;
}
.community:hover .icon_txt_2 {
  border-bottom: 1px solid #7b7b7b;
}
.line {
  /* color: white; */
  border-bottom: 1px solid #b5b5b5;
  width: 300px;
  margin: 5px 0 10px 0;
}
span{
    color: #7b7b7b;
    font-size: 14px;
    margin: 5px 0 0 0;
}
</style>
