<template>
  <div class="range">
    <div class="pre">
      <div class="preicon"></div>
      <div class="title00">
        <h2><router-link :to="lastUrl" class="text-[18px] sm:text-3xl">更改募資方案</router-link></h2>
        <div class="under hidden sm:block"></div>
      </div>
    </div>
    <div class="flex">
      <form class=" w-full sm:w-9/12 ml-0 sm:ml-10 ">
        <h2 class="title">收件人資訊</h2>
        <div class="aa px-3 sm:px-8 py-4 my-4 mr-0 sm:mr-8 border-2 rounded-md shadow-md">
          <div class="flex flex-col sm:mb-4 mb-5">
            <label for="name" class="text-gray-dark text-base mb-1 ml-1 mt-2">收件人姓名：</label>
            <input v-model="realName" type="text" id="name" placeholder="請填寫真實姓名" class="border-2 border-gray-default rounded-md w-6/6 p-1 pl-2  text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col sm:mb-4 mb-5">
            <label for="address" class="text-gray-dark text-base mb-1 ml-1">收件人地址：</label>
            <div class="flex">
              <input v-model="zipCode" type="text" id="address" placeholder="郵遞區號" class="border-2 border-gray-default w-2/6 sm:w-1/6 rounded-md p-1 pl-2  mr-4 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
              <input v-model="address" type="text" placeholder="回饋方案將寄至此地址" class="border-2 border-gray-default w-4/6 sm:w-5/6 rounded-md p-1 pl-2  text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
          </div>
          <div class="flex flex-col sm:mb-4 mb-5">
            <label for="phone" class="text-gray-dark text-base mb-1 ml-1">聯絡電話：</label>
            <input v-model="phone" type="text" id="phone" placeholder="請填寫常用手機號碼" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col sm:mb-4 mb-5">
            <label for="email" class="text-gray-dark text-base mb-1 ml-1">聯絡信箱：</label>
            <input v-model="email" type="email" id="email" placeholder="請填寫常用電子信箱" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col mb-4">
            <label for="note" class="text-gray-dark text-base mb-1 ml-1">備註：</label>
            <input v-model="note" type="text" id="note" placeholder="如有特殊需求請填寫在此" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
        </div>
        <h2 class="title mt-10">付款資訊</h2>
        <div class="px-3 sm:px-8 py-4 my-4 mr-0 sm:mr-8 border-2 rounded-md shadow-md">
          <div class="flex flex-col sm:mb-4 mb-5">
            <label class="text-gray-dark text-base mb-1 ml-1 mt-1">付款方式：</label>
            <div class="flex flex-col sm:flex-row cursor-default sm:mb-4 mb-5">
              <div class="flex flex-row justify-center sm:justify-around items-center bg-gray-light w-full sm:w-64 py-2 pl-5 pr-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.714" height="20" viewBox="0 0 25.714 20">
                  <path id="Icon_awesome-credit-card" data-name="Icon awesome-credit-card" d="M0,20.107A2.143,2.143,0,0,0,2.143,22.25H23.571a2.143,2.143,0,0,0,2.143-2.143V12.25H0Zm8.571-3.036a.537.537,0,0,1,.536-.536h6.071a.537.537,0,0,1,.536.536v1.786a.537.537,0,0,1-.536.536H9.107a.537.537,0,0,1-.536-.536Zm-5.714,0a.537.537,0,0,1,.536-.536H6.607a.537.537,0,0,1,.536.536v1.786a.537.537,0,0,1-.536.536H3.393a.537.537,0,0,1-.536-.536ZM25.714,4.393V6.536H0V4.393A2.143,2.143,0,0,1,2.143,2.25H23.571A2.143,2.143,0,0,1,25.714,4.393Z" transform="translate(0 -2.25)" fill="#fff"/>
                </svg>
                <span class="text-white text-lg text-center ml-[10px] sm:ml-[0]">信用卡（ 一次付清 ）</span>
              </div>
              <span class="text-gray-dark text-xs pt-2 sm:pt-8 pl-1 sm:pl-2">可用卡別：VISA / MASTERCARD / JCB / 銀聯卡，無手續費</span>
            </div>
            <div class="flex flex-col sm:mb-4 mb-5">
              <label for="cardName" class="text-gray-dark text-base mb-1 ml-1">持卡人姓名(英文)：</label>
              <input type="text" id="cardName" class="border-2 border-gray-default w-full sm:w-[255px] rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
            <div class="flex flex-col  sm:mb-4 mb-5">
              <label for="cardId" class="text-gray-dark text-base mb-1 ml-1">卡號：</label>
              <input type="text" id="cardId" class="border-2 border-gray-default w-full sm:w-[255px] rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
            <div class="flex flex-col sm:mb-4 mb-5">
              <label for="cardExp" class="text-gray-dark text-base mb-1 ml-1">到期日：</label>
              <input type="date" id="cardExp" class="border-2 border-gray-default w-full sm:w-[255px] rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
            <div class="flex flex-col mt-2 ml-1">
              <label for="cardCode" class="text-gray-dark text-base mb-1 ml-1">安全驗證碼：</label>
              <input type="text" id="cardCode" class="border-2 border-gray-default w-full sm:w-[255px] rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <label for="address" class="text-gray-dark text-base mb-1 ml-1">贊助總金額：</label>
            <div class="flex flex-col sm:flex-row items-start justify-between border-2 border-gray-default py-2 sm:py-6 px-4 sm:px-2 rounded-md">
              <div class="flex justify-between sm:space-x-7 items-center sm:items-end justify-center sm:justify-start sm:ml-4 w-full sm:w-5/6">
                <div class="flex flex-col">
                  <p class="text-gray-dark text-sm pl-3">贊助金額</p>
                  <span class="text-xl text-gray-dark font-bold">$ {{fundDatas.option_price}}</span>
                </div>
                <div class="flex flex-col mx-4">
                  <p class="invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">+</span>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-dark text-sm pl-3">運費</p>
                  <span class="text-xl text-gray-dark font-bold">$ 0</span>
                </div>
                <div class="flex flex-col mx-4 ">
                  <p class="invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">+</span>
                </div>
                <div class="flex flex-col ">
                  <p class="text-gray-dark text-sm pl-3">額外支持</p>
                  <span class="text-xl text-gray-dark font-bold">$<input v-model="extraFunds" type="text" placeholder="0" class="border-b-2 border-orange outline-none w-20 pl-1 text-xl text-orange font-bold"></span>
                </div>
              </div>
              <div class=" mr-0 sm:mr-4 flex self-start  mt-3 sm:mt-0">
                <div class="flex flex-col sm:mr-4 mr-2">
                  <p class="hidden sm:flex invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">=</span>
                </div>
                <div class="flex flex-row sm:flex-col sm:items-start justify-center items-center">
                  <p class="text-lg sm:text-sm text-gray-dark mr-2 sm:mr-0 sm:pl-3 pl-0">總金額</p>
                  <div class="flex">
                    <span class="text-xl text-gray-dark font-bold mr-1">$</span>
                    <input type="text" class="text-xl text-gray-dark font-bold w-[80px] outline-none self-end" v-model="totalPrice" readonly>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-10">
          <div class="noname flex  sm:items-center items-start sm:pl-4 pl-0">
            <input type="checkbox" name="agree" class="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] p-16 border-2 border-gray-light rounded-[30px] cursor-pointer">
            <div class=" flex flex-col sm:flex-row items-start sm:items-center sm:mt-0 mt-[-3px]">
              <label for="agree" class="ml-2 sm:ml-2 sm:text-lg text-gray-dark">匿名贊助</label>
              <span class="ml-2 sm:ml-4 text-xs sm:text-gray-dark text-gray-light">勾選後您的姓名將不會出現在支持者區塊及公開的會員資料中</span>
            </div>
          </div>
          <div class="flex justify-center sm:justify-end">
            <button @click="sendData" class="text-center text-base text-white bg-orange rounded-2xl w-full sm:w-64 h-[30px] mt-10 sm:mt-8 py-1 hover:bg-blue-light">前往付款</button>
          </div>
        </div>
      </form>
      <!-- 贊助方案放這裡 -->
      <div class="w-3/12 hidden sm:block">
        <h2 class="title mb-4">贊助方案</h2>
        <div>
          <img class=' rounded-2xl mb-4 w-full h-[200px] object-cover' :src="fundDatas.option_img">
          <p class="text-orange text-3xl font-medium tracking-[2px] pl-1">${{fundDatas.option_price}}</p>
          <p class="text-sm sm:text-base text-black-backdrop mt-1 pl-1">{{fundDatas.option_name}}</p>
          <div class="mt-3">
            <textarea class="w-full h-20 resize-none text-gray-dark sm:text-sm text-xs pl-1 reward" :value="fundDatas.option_reward" readonly></textarea>
          </div>
        </div>
        <div>
          <div class="border-gray-light border-t pt-5 mt-5 inline-block w-full text-gray-dark text-xs sm:text-sm">
            <div class="flex sm:flex-row flex-col-reverse sm:justify-between">
              <p class="pl-1">贊助人數 <span class="text-sm sm:text-base font-bold">{{donate_num}}</span>人</p>
              <p class="sm:pr-1 pl-1">限量 <span class="text-sm sm:text-base font-bold">{{fundDatas.num}}</span> 個</p>
            </div>
            <p class="pl-1">預計寄送 <span class="text-sm sm:text-base font-bold">2週內</span></p>
            <p class="pl-1">寄送地點 <span class="text-sm sm:text-base">只寄台灣本島</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // lastUrl: `/Funds/${this.fundDatas.donate}`,
      // lastUrl: this.fundDatas.donate,
      donate_num: 0,
      fundDatas: {},
      realName: '',
      zipCode: '',
      address: '',
      oneph: '',
      email: '',
      note: '',
      extraFunds: 0,
      suppor: 0
    }
  },
  computed: {
    totalPrice () {
      if (this.extraFunds === '') {
        return this.fundDatas.option_price
      } else {
        return parseInt(this.fundDatas.option_price) + parseInt(this.extraFunds)
      }
    },
    lastUrl () {
      return `/Funds/${this.fundDatas.donate}`
    }
  },
  methods: {
    sendData (e) {
      e.preventDefault()
      const form = new FormData()
      form.append('donate', this.fundDatas.donate)
      form.append('member', this.$store.getters.memberIdState)
      form.append('donate_option', this.$route.params.id)
      form.append('else_donate_price', this.extraFunds)
      form.append('total_price', this.totalPrice)
      form.append('real_name', this.realName)
      form.append('postalcode', this.zipCode)
      form.append('address', this.address)
      form.append('cellphone', this.phone)
      form.append('email', this.email)
      form.append('remark', this.note)
      fetch('./DropbeatBackend/funds_page_form_send.php', {
        method: 'POST',
        body: form
      })
      this.$router.replace('/')
      window.scrollTo(0, 0)
    }
  },
  async created () {
    const form = new FormData()
    form.append('donate_option_id', this.$route.params.id)
    const response = await fetch('./DropbeatBackend/funds_page_form_get.php', {
      method: 'POST',
      body: form
    })
    // 回傳
    const responseData = await response.json()
    this.fundDatas = responseData[0]
    console.log(this.fundDatas.donate)
    // 取贊助人數
    const forms = new FormData()
    forms.append('donate_id', this.fundDatas.donate)
    const responses = await fetch('./DropbeatBackend/funds_page_total_price_single.php', {
      method: 'POST',
      body: forms
    })
    // 回傳
    const responseDatas = await responses.json()
    if (responseDatas === 1) {
      console.log('cc')
      this.donate_num = 0
    } else {
      console.log('tt')
      this.donate_num = responseDatas[0].donate_num
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 0 40px;
  }
  .pre {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    width: 240px;
    height: 52px;
    margin: 0 0 20px 5px;
    cursor: pointer;
  }
  .preicon {
    width: 25px;
    height: 25px;
    background-image: url("../assets/icon/pre_7b.svg");
    background-repeat: no-repeat;
    margin: 0 10px 0 0;
  }
  .title00 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 32px;
    font-weight: 500;
    color: #383838;
  }
  .under{
    background-color: transparent;
    width: 130px;
    height: 1.5px;
  }
  .pre:hover .preicon {
    background-image: url("../assets/icon/pre_38.svg");
  }
  .pre:hover .under {
    background-color: #383838;
    width: 185px;
    height: 1.5px;
  }
  /*  */
  .title{
    font-size: 22px;
  }
  .title::before{
    content: ".";
    width: 20px;
    height: 20px;
    color: #B5B5B5;
    background-color: #B5B5B5;
    margin-right: 6px;
  }
  input::-webkit-input-placeholder{
    color: #b5b5b5;
  }

  .noname input:checked::before{
    content: "\2714";
    border-radius: 5px;
    color: #ffffff;
    background-color: #FF9D83;
    padding: 7px 9px;
    position: relative;
    top:3px;
    left: -1px;
  }
  .noname input:checked::before{
      content: "\2714";
      border-radius: 5px;
      color: #ffffff;
      background-color: #FF9D83;
      padding: 3px 5px;
      position: relative;
      top:-2px;
      left: -2px;
      cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    .range{
      padding: 60px 20px 0 20px;
    }
    .preicon {
      width: 20px;
      height: 20px;
      background-image: url("../assets/icon/pre_7b.svg");
      background-repeat: no-repeat;
      margin: 10px 10px 0 0;
    }
    .title::before{
      content: "";
    }
    .title{
      font-size: 24px;
    }
    .aa input::-webkit-input-placeholder{
      font-size: 14px;
    }
    .noname input:checked::before{
      content: "\2714";
      border-radius: 5px;
      color: #ffffff;
      background-color: #FF9D83;
      padding: 7px 9px;
      position: relative;
      top:3px;
      left: -1px;
    }
  }
  @media screen and (max-width: 400px) {
    .noname input{
      width: 25px;
      height: 25px;
    }
    .noname input:checked::before{
      content: "\2714";
      border-radius: 5px;
      color: #ffffff;
      background-color: #FF9D83;
      padding: 5px 6px;
      position: relative;
      top:1px;
      left: -1px;
    }
  }
</style>
