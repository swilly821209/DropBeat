<template>
  <div class=" sm:w-[650px] h-60 px-4 sm:px-0 pb-1 sm:pb-0 flex justify-around flex-col">
    <div class="flex justify-between w-full mb-3 sm:mb-0">
      <h4 class="text-[28px] text-black-backdrop">分享</h4>
      <svg @click="closeDialog" class="text-gray-light hover:text-orange cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    </div>
    <div class="rounded-xl bg-gradient-to-t to-gray-light from-black-backdrop h-32 w-full flex items-center px-4 sm:px-8 space-x-5 self-center">
      <img :src="imgSrc" class=" w-20 sm:w-24 h-20 sm:h-24 rounded-2xl">
      <div class="text-white">
        <h4 class="text-base">{{ music }}</h4>
        <p class="text-sm">{{ singer }}</p>
      </div>
    </div>
    <div class="flex space-x-3 justify-end items-center sm:mt-3 mt-6">
      <div class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" width="30px" viewBox="0 0 24 24" fill="#3b5998"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>
      </div>
      <div class="flex border rounded-xl w-8/12 sm:w-7/12 justify-end items-center border-gray-light">
        <p class="text-sm  w-10/12 text-center px-3 text-gray-light truncate">https://dropbeet/accusefive/3333</p>
        <button class='flex-shrink-0 rounded-lg border-2 px-2 text-white border-orange bg-orange hover:border-blue-light hover:bg-blue-light hover:text-white'>複製</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgSrc', 'music', 'singer'],
  emits: ['close-social'],
  methods: {
    closeDialog () {
      this.$emit('close-social')
    }
  }
}
</script>
