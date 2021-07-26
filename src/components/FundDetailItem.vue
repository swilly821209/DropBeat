<template>
  <div class="w-64">
    <img class='w-64 h-64 rounded-2xl mb-4' src="https://akstatic.streetvoice.com/song_covers/mx/xd/mxxdlife/4PGUJdqCHD7dSZ4nVkuC7B.jpg?x-oss-process=image/resize,m_fill,h_300,w_300,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
    <p class="text-orange text-3xl">${{ money }}</p>
    <p class="text-black-backdrop mt-5">{{ fundDesc }}</p>
    <ul v-if="gifts" class="mt-5">
      <li v-for="item in gifts" :key="item" class="text-gray-dark text-sm">- {{ item }}</li>
    </ul>
    <div class="border-gray-dark border-t pt-5 mt-5 inline-block w-full text-gray-dark">
      <div class="flex justify-between">
         <p>贊助人數 <span class="text-xl font-bold">{{ people }}</span>人</p>
         <p v-if="productNum">限量 <span class="text-xl font-bold">{{productNum}}</span>個</p>
      </div>
      <p>預計寄送 <span class="text-xl font-bold">{{ time}}</span></p>
      <p>寄送地點 <span class="text-xl">只寄台灣本島</span></p>
    </div>
    <button class=" mt-5 border-current border rounded-2xl w-full  text-orange hover:bg-orange hover:text-white">贊助此回饋方案</button>
  </div>
</template>

<script>
export default {
  props: ['money', 'fundDesc', 'people', 'time', 'productNum', 'gifts']
}
</script>
