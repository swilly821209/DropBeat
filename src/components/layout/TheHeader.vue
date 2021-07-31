<template>
<div class="absolute right-10 top-5 sm:flex justify-center items-center space-x-5 hidden">
  <span class=" text-gray-dark focus-within:text-orange relative flex justify-center items-center">
    <input type="text" class=" w-44 h-10 px-2  border-2 border-gray-medium focus:border-orange rounded-3xl search outline-none  transition placeholder-gray-dark focus:placeholder-opacity-0" placeholder="找音樂?"/>
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3" height="20px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  </span>
  <router-link to="/LoginIn" v-if="!isLogin">
    <button class="border-2 bg-white border-gray-medium w-44 h-10 rounded-3xl  text-gray-dark hover:text-white hover:bg-orange hover:border-opacity-0  ">登入 / 註冊</button>
  </router-link>
  <div v-else class="w-44 flex justify-between items-center border-2 border-gray-medium rounded-3xl inline-block">
    <img class="w-9 h-9 rounded-full" src="https://akstatic.streetvoice.com/playlist_images/sv/mu/svmusic/EMGVjwN9cWkwgEFFKawTrh.jpeg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
    <p>assusefive</p>
    <router-link to="/AccountManage">
      <div class="mr-3 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12.5" viewBox="0 0 20 12.5"><path id="next" d="M8.438,1.952a2,2,0,0,1,3.123,0l5.839,7.3A2,2,0,0,1,15.839,12.5H4.161A2,2,0,0,1,2.6,9.251Z" transform="translate(20 12.5) rotate(180)" fill="#b5b5b5"/></svg>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isLogin () {
      console.log(this.$store.getters.loginState)
      return this.$store.getters.loginState
    }
  }
}
</script>

<style scoped>
  .search::placeholder{
    text-align: center;
  }
</style>
