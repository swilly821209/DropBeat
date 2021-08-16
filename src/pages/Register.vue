<template>
  <div id="app">
    <div class="member_container" >
      <p class="member_title">會員註冊</p>
      <input @blur="checkAccount" type="text" name="account" v-model="member.account" placeholder="請輸入帳號名稱" />
      <p v-if="accountWarn" class="text-orange text-xs justify-self-end w-[256px]">請輸入帳號名稱!</p>
      <p v-if="sameAccount" class="text-orange text-xs justify-self-end w-[256px]">帳號已重複，請輸入其他帳號！</p>
      <input @blur="checkEmail" type="email" name="email" v-model="member.email" placeholder="信箱" />
      <p v-if="emailWarn" class="text-orange text-xs justify-self-end w-[256px]">請輸入信箱!</p>
      <input @blur="checkPassword" type="password" name="pwd" v-model="member.pwd" placeholder="密碼" />
      <input @blur="reconfirmPassword" type="password" v-model="member.pwd2" placeholder="確認密碼" />
      <p v-if="passwordWarn" class="text-orange text-xs justify-self-end w-[256px]">請輸入密碼!</p>
      <p v-if="reconfirm" class="text-orange text-xs justify-self-end w-[256px]">密碼不相符請確認!</p>
      <div class="birthdayAll">
        <p class="birthday">生日：</p>
        <div class="birth">
          <select v-model="year">
            <option disabled>年</option>
            <option :value="1949+year" v-for="year in years" :key="year" class="w-6/12">{{1949+year}} 年</option>
          </select>
          <select v-model="month">
            <option  disabled >月</option>
            <option :value="month" v-for="month in months" :key="month.months" class="w-3/12">{{month}} 月</option>
          </select>
          <select v-model="date">
            <option  disabled >日</option>
            <option :value="day" v-for="day in days" :key="day" class="w-3/12">{{day}} 日</option>
          </select>
        </div>
      </div>
      <button type="button" class="registered" @click="sendData">註冊</button>
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
      <span>已經有帳號了？<router-link to="/LoginIn" class="text-orange hover:text-blue-light ml-2">立即登入</router-link></span>    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sameAccount: false,
      accountWarn: false,
      emailWarn: false,
      passwordWarn: false,
      reconfirm: false,
      years: 101,
      months: 12,
      days: 31,
      member: {
        account: '',
        email: '',
        pwd: '',
        pwd2: ''
      }
    }
  },
  computed: {
    birthday () {
      return `${this.year}-${this.month}-${this.date}`
    }
  },
  methods: {
    reconfirmPassword () {
      if (this.member.pwd !== this.member.pwd2) {
        this.reconfirm = true
      } else {
        this.reconfirm = false
      }
    },
    checkPassword () {
      if (this.member.pwd === '') {
        this.passwordWarn = true
      } else {
        this.passwordWarn = false
      }
    },
    checkAccount () {
      if (this.member.account === '') {
        this.accountWarn = true
      } else {
        this.accountWarn = false
        this.sameAccount = false
      }
    },
    checkEmail () {
      if (this.member.email === '') {
        this.emailWarn = true
      } else {
        this.emailWarn = false
      }
    },
    async sendData () {
      if (this.member.account !== '' && this.member.email !== '' && this.member.pwd !== '' && this.member.pwd2 !== '') {
        // INSERT會員(MEMBER)、音樂人(MUSICIAN)資料
        const form = new FormData()
        form.append('account', this.member.account)
        form.append('email', this.member.email)
        form.append('pwd', this.member.pwd)
        form.append('birthday', this.birthday)
        const response = await fetch('http://localhost/DropbeatBackend/registerInsert.php', {
          method: 'POST',
          body: form
        })
        // 回傳註冊成功者資訊->登入
        const forms = new FormData()
        forms.append('accountThis', this.member.account)
        const responseAll = await fetch('http://localhost/DropbeatBackend/registerSelect.php', {
          method: 'POST',
          body: forms
        })
        const responseAllData = await responseAll.json()
        const responseData = await response.text()
        console.log(responseAllData)
        if (responseData === this.member.account) {
          this.sameAccount = true
        } else {
          // this.$store.dispatch('login', responseAllData[0][2]) // account
          // this.$store.dispatch('loginId', responseAllData[0][0]) // id
          this.$store.dispatch('login', {
            account: responseAllData[0][2],
            memberId: responseAllData[0][0]
          })
          this.$router.replace('/')
        }
      } else {
        alert('請確認輸入欄位')
      }
    }
  }
}
</script>

<style scoped>
#app{
    display: flex;
    justify-content: center;
    align-items: center;
}
.member_container {
  /* border:1px solid red; */
  /* margin: 0 auto; */
  width: 300px;
  /* height: 900px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  /* height: 720px; */
  margin: 90px 0 0 0;
}
.member_title {
  /* text-align: center; */
  /* padding: 10px; */
  font-size: 32px;
  font-weight: 500;
  color: #383838;
  margin-bottom: 20px;
}
input {
  border-radius: 5px;
  margin: 7px auto;
  padding: 8px;
  outline: none;
  border: 2px solid #ededed;
  width: 260px;
  font-size: 16px;
  color:#7b7b7b;
}
input:focus {
  border: 2px solid #ff9d83;
}
input::-webkit-input-placeholder {
  color: #b5b5b5;
}
.birthdayAll{
  /* border:1px solid red; */
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  width: 260px;
}
.birthday {
  /* text-align: left; */
  font-weight: 500;
  color: #7b7b7b;
  font-size: 16px;
  margin: 0 0 0 3px;
  /* margin-right: 150px; */
  /* margin-left: 80px; */
  /* margin-top: 5px; */
}
.birth {
  display: flex;
  justify-content: space-between;
}
select:first-child {
  width: 95px;
  background-image: url("https://truth.bahamut.com.tw/s01/202107/954ba87f268da64497442dda478ca750.PNG");
  background-repeat: no-repeat;
  background-position: 68px 10px;
  background-size: 20%;
}
select {
  /* margin: 5px 1px; */
  border-radius: 5px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 75px;
  border: 2px solid #ededed;
  padding: 7px;
  background-image: url("https://truth.bahamut.com.tw/s01/202107/954ba87f268da64497442dda478ca750.PNG");
  background-repeat: no-repeat;
  background-position: 48px 10px;
  background-size: 25%;
  background-color: transparent;
  color: #b5b5b5;
  font-size: 16px;
  /* margin: 5px; */
}
option {
  background: transparent;
  border: 0;
}
select:focus {
  border: 2px solid #ff9d83;
  border-radius: 5px;
}
.registered {
  color: white;
  background-color: #ff9d83;
  border-radius: 5px;
  padding: 10px;
  margin: 40px 0 5px 0;
  width: 260px;
  text-align: center;
}
.registered:hover {
  background-color: #31bdc5;
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
/* .already {
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
} */
</style>
