<template>
  <div class="singleItem">
    <div>
      <img class=' rounded-2xl mb-4' src="https://akstatic.streetvoice.com/song_covers/mx/xd/mxxdlife/4PGUJdqCHD7dSZ4nVkuC7B.jpg?x-oss-process=image/resize,m_fill,h_300,w_300,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
      <p class="text-orange text-3xl font-medium tracking-[2px] pl-1">${{ money }}</p>
      <p class="text-sm sm:text-base text-black-backdrop mt-1 pl-1">{{ fundDesc }}</p>
      <ul v-if="gifts" class="mt-3">
        <li v-for="item in gifts" :key="item" class="text-gray-dark sm:text-sm text-xs pl-1">- {{ item }}</li>
      </ul>
    </div>
    <div>
      <div class="border-gray-light border-t pt-5 mt-5 inline-block w-full text-gray-dark text-xs sm:text-sm">
        <div class="flex sm:flex-row flex-col-reverse sm:justify-between">
          <p class="pl-1">贊助人數 <span class="text-sm sm:text-base font-bold">{{ people }}</span>人</p>
          <p v-if="productNum" class="sm:pr-1 pl-1">限量 <span class="text-sm sm:text-base font-bold">{{productNum}}</span> 個</p>
        </div>
        <p class="pl-1">預計寄送 <span class="text-sm sm:text-base font-bold">{{ time}}</span></p>
        <p class="pl-1">寄送地點 <span class="text-sm sm:text-base">只寄台灣本島</span></p>
      </div>
      <router-link to="/Funds/:id/Form">
        <button class="  border-current border-2 rounded-2xl w-full h-[28px] text-orange text-base hover:bg-orange hover:border-orange hover:text-white mt-5 ">贊助此回饋方案</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['money', 'fundDesc', 'people', 'time', 'productNum', 'gifts']
}
</script>
<style scoped>
  .singleItem{
    /* border:1px solid red; */
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 1300px){
    .singleItem{
          height: 550px;
    }
  }
  @media screen and (max-width: 500px){
    .singleItem{
          height: 540px;
    }
  }
  @media screen and (max-width: 420px){
    .singleItem{
          height: 500px;
    }
  }
  @media screen and (max-width: 400px){
    .singleItem{
          height: 480px;
    }
  }
</style>
