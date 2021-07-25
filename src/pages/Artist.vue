<template>
  <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div>
      <router-link to="/Find">pre-arrow</router-link>
    </div>
    <div class="flex space-x-10 items-center h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4">
        <img class="rounded-full w-80 h-80 min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div>
          <p>已認證藝人</p>
        </div>
      </div>
      <div class=" h-1/2">
        <h1 class="text-5xl text-white font-medium min-w-[400px] mb-12">告五人 Accusefive</h1>
        <div class=" space-y-5">
          <div class="flex items-center w-full justify-between">
            <div class="flex w-80 justify-between">
              <div>
                <p class="text-xl text-black-backdrop">音樂</p>
                <div class="text-5xl font-bold tracking-wider">16</div>
              </div>
              <div>
                <p class="text-xl text-black-backdrop">粉絲</p>
                <div class="text-5xl font-bold tracking-wider">68,250</div>
              </div>
            </div>
            <div>
              <button class="w-16 h-9 rounded-2xl bg-orange text-white">關注</button>
              <span class="share"></span>
            </div>
          </div>
          <p class=" text-sm text-gray-light">告五人成立於2011年，2017年重新成團，2018年以首張EP《迷霧之子》獲得金音獎最佳新人。目前為主唱潘雲安、犬青及鼓手哲謙的三人編制， 男女雙主唱的迷人交錯聲線，帶給聽眾強烈的吸引力。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="px-10 flex items-center">
    <span class="border-t border-gray-light w-20 text-xs"></span>
    <div class="min-w-[198px] px-5 flex justify-evenly">
      <router-link to="/Artist/:id/ArtistHome" :class="{active: page === '主頁'}"  @click="active" class=" rounded-2xl border border-current text-gray-light px-2 hover:text-orange">主頁</router-link>
      <router-link to="/Artist/:id/ArtistMusic" :class="{active: page === '音樂'}"  @click="active" class="rounded-2xl border border-current text-gray-light px-2  hover:text-orange">音樂</router-link>
    </div>
    <span class="border-t border-gray-light w-full"></span>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      page: '主頁'
    }
  },
  methods: {
    active (e) {
      this.page = e.target.text
    }
  }
}
</script>

<style scoped>
  .active{
    @apply bg-orange text-white hover:text-white
  }
</style>
