<template>
  <div class="w-[650px] h-60 flex justify-around flex-col">
    <div class="flex justify-between w-full">
      <h4 class="text-xl">分享</h4>
      <svg class="text-gray-light hover:text-orange cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    </div>
    <div class="rounded-xl bg-gradient-to-t to-gray-light from-black-backdrop h-28 flex items-center px-5 space-x-5 w-11/12 self-center">
      <img :src="imgsrc" class=" w-24 h-24 rounded-xl">
      <div class="text-white">
        <h4>{{ music }}</h4>
        <p>{{ singer }}</p>
      </div>
    </div>
    <div class="flex space-x-3 justify-end">
      <div class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#3b5998"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
      </div>
      <div class="flex border rounded-xl w-96 justify-end border-gray-light">
        <p class="w-80 text-center text-gray-light">Https://dropbeet/accusefive/3333</p>
        <button class='rounded-xl border px-2 border-orange text-orange hover:bg-orange hover:text-white'>複製</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   props: ['imgsrc', 'music', 'singer'],
  data () {
    return {
      music: '在這座城市遺失了你',
      singer: '告五人',
      imgsrc: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg'
    }
  }
}
</script>
