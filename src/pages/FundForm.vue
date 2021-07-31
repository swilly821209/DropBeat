<template>
  <div class="range">
    <div class="pre">
      <div class="preicon"></div>
      <div class="title00">
        <h2><router-link to="/Funds/:id" class="text-[18px] sm:text-3xl">更改募資方案</router-link></h2>
        <div class="under hidden sm:block"></div>
      </div>
    </div>
    <div class="flex">
      <form class=" w-full sm:w-9/12 ml-0 sm:ml-10 ">
        <h2 class="title">收件人資訊</h2>
        <div class="px-2 sm:px-8 py-4 my-4 mr-0 sm:mr-8 border-2 rounded-md shadow-md">
          <div class="flex flex-col mb-4">
            <label for="name" class="text-gray-dark text-base mb-1 ml-1">收件人姓名：</label>
            <input type="text" id="name" placeholder="請填寫真實姓名" class="border-2 border-gray-default rounded-md w-6/6 p-1 pl-2  text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col mb-4">
            <label for="address" class="text-gray-dark text-base mb-1 ml-1">收件人地址：</label>
            <div class="flex">
              <input type="text" id="address" placeholder="郵遞區號" class="border-2 border-gray-default w-2/6 sm:w-1/6 rounded-md p-1 pl-2  mr-4 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
              <input type="text" placeholder="回饋方案將寄至此地址" class="border-2 border-gray-default w-4/6 sm:w-5/6 rounded-md p-1 pl-2  text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <label for="phone" class="text-gray-dark text-base mb-1 ml-1">聯絡電話：</label>
            <input type="text" id="phone" placeholder="請填寫常用手機號碼" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col mb-4">
            <label for="email" class="text-gray-dark text-base mb-1 ml-1">聯絡信箱：</label>
            <input type="email" id="email" placeholder="請填寫常用電子信箱" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
          <div class="flex flex-col mb-4">
            <label for="note" class="text-gray-dark text-base mb-1 ml-1">備註：</label>
            <input type="text" id="note" placeholder="如有特殊需求請填寫在此" class="border-2 border-gray-default w-6/6 rounded-md p-1 pl-2 text-base text-gray-dark focus:border-orange outline-none cursor-pointer">
          </div>
        </div>
        <h2 class="title mt-10">付款資訊</h2>
        <div class="px-2 sm:px-8 py-4 my-4 mr-0 sm:mr-8 border-2 rounded-md shadow-md">
          <div class="flex flex-col mb-4">
            <label class="text-gray-dark text-lg mb-1 ml-1">付款方式：</label>
            <div class="flex flex-col sm:flex-row cursor-default">
              <div class="flex flex-row justify-center sm:justify-around items-center bg-gray-light w-full sm:w-64 py-2 pl-5 pr-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.714" height="20" viewBox="0 0 25.714 20">
                  <path id="Icon_awesome-credit-card" data-name="Icon awesome-credit-card" d="M0,20.107A2.143,2.143,0,0,0,2.143,22.25H23.571a2.143,2.143,0,0,0,2.143-2.143V12.25H0Zm8.571-3.036a.537.537,0,0,1,.536-.536h6.071a.537.537,0,0,1,.536.536v1.786a.537.537,0,0,1-.536.536H9.107a.537.537,0,0,1-.536-.536Zm-5.714,0a.537.537,0,0,1,.536-.536H6.607a.537.537,0,0,1,.536.536v1.786a.537.537,0,0,1-.536.536H3.393a.537.537,0,0,1-.536-.536ZM25.714,4.393V6.536H0V4.393A2.143,2.143,0,0,1,2.143,2.25H23.571A2.143,2.143,0,0,1,25.714,4.393Z" transform="translate(0 -2.25)" fill="#fff"/>
                </svg>
                <span class="text-white text-lg text-center ml-[10px] sm:ml-[0]">信用卡（ 一次付清 ）</span>
              </div>
              <span class="text-gray-dark text-xs pt-2 sm:pt-8 pl-1 sm:pl-2">可用卡別：VISA / MASTERCARD / JCB / 銀聯卡，無手續費</span>
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <label for="address" class="text-gray-dark text-lg mb-1 ml-1">贊助總金額：</label>
            <div class="flex flex-col sm:flex-row items-center justify-between border-2 border-gray-default py-2 sm:py-6 px-0 sm:px-2 rounded-md">
              <div class="flex space-x-7 items-center sm:items-end justify-center sm:justify-start sm:ml-4 w-full sm:w-5/6">
                <div class="flex flex-col">
                  <p class="text-gray-dark text-sm">贊助金額</p>
                  <span class="text-xl text-gray-dark font-bold">$ 450</span>
                </div>
                <div class="flex flex-col mx-4">
                  <p class="invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">+</span>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-dark text-sm">運費</p>
                  <span class="text-xl text-gray-dark font-bold">$ 0</span>
                </div>
                <div class="flex flex-col mx-4 ">
                  <p class="invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">+</span>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-dark text-sm pl-3">額外支持</p>
                  <span class="text-xl text-gray-dark font-bold">$<input v-model="money" type="text" class="border-b-2 border-orange outline-none w-16 pl-1 text-xl text-gray-dark font-bold"></span>
                </div>
              </div>
              <div class=" mr-4 flex self-end">
                <div class="flex flex-col mr-4">
                  <p class="invisible">.</p>
                  <span class="text-xl text-gray-dark font-bold">=</span>
                </div>
                <div class="flex flex-row sm:flex-col items-end">
                  <p class="text-lg text-gray-dark">總金額</p>
                  <span class="text-xl text-gray-dark font-bold">$ 450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mr-10 mt-10">
          <div class="flex items-center pl-4">
            <input type="checkbox" name="agree" class="w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] p-16 border-2 border-gray-light rounded-md ">
            <div class="flex flex-col sm:flex-row items-start sm:items-center">
              <label for="agree" class="ml-2 sm:ml-2 sm:text-lg text-gray-dark">匿名贊助</label>
              <span span class="ml-2 sm:ml-4 text-xs text-gray-dark">勾選後您的姓名將不會出現在支持者區塊及公開的會員資料中</span>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="text-center text-base text-white bg-orange rounded-2xl w-64 h-[30px] mt-8 py-1 hover:bg-blue-light">前往付款</button>
          </div>
        </div>
      </form>
      <!-- 贊助方案放這裡 -->
      <div class="w-3/12 hidden sm:block">
        <h2 class="title mb-4">贊助方案</h2>
        <fund-detail-item
          :money="fundDatas.money"
          :fundDesc="fundDatas.fundDesc"
          :people="fundDatas.people"
          :gifts="fundDatas.gifts"
          :productNum="fundDatas.productNum"
          :time="fundDatas.time">
        </fund-detail-item>
      </div>
    </div>
  </div>
</template>

<script>
import FundDetailItem from '../components/FundDetailItem.vue'
export default {
  components: {
    FundDetailItem
  },
  data () {
    return {
      fundDatas: {
        money: 100,
        fundDesc: '為愛贊助, 不需回饋',
        gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡'],
        people: 25,
        productNum: 800,
        time: '2021/11'
      },
      money: 0
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
  @media screen and (max-width: 640px) {
    .range{
      padding: 60px 15px 0 10px;
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
  }
</style>
