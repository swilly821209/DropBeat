<template>
  <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div>
      <!-- <router-link to="/Find">pre-arrow</router-link> -->
      <router-link to="/Find" class="preArrow"></router-link>
    </div>
    <div class="artistContent flex space-x-10 items-center h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4">
        <img class="artistPhoto rounded-full w-80 h-80 min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div class="approve">
          <div class="approveIcon"></div>
          <p>已認證藝人</p>
        </div>
      </div>
      <div class=" h-1/2">
        <h1 class="text-5xl text-white font-medium min-w-[400px]">告五人 Accusefive</h1>
        <div>
          <div class="count_share_follow flex items-start w-full justify-between">
            <div class="flex w-80 justify-between">
              <div>
                <p class="text-base text-black-backdrop">音樂</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">16</div>
              </div>
              <div>
                <p class="text-base text-black-backdrop">粉絲</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">68,250</div>
              </div>
            </div>
            <div class="share_follow">
            <div class="share"></div>
            <button
              class="follow"
              :class="{ clickfollow: follow }"
              @click="follow = !follow"
            >{{follow ? '正在關注' : '關注'}}</button>
            </div>
          </div>
          <p class="detail text-sm text-gray-dark ">告五人成立於2011年，2017年重新成團，2018年以首張EP《迷霧之子》獲得金音獎最佳新人。目前為主唱潘雲安、犬青及鼓手哲謙的三人編制， 男女雙主唱的迷人交錯聲線，帶給聽眾強烈的吸引力。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="px-10 flex items-center">
    <span class="border-t border-gray-light w-20 text-xs"></span>
    <div class="min-w-[198px] px-5 flex justify-evenly">
      <router-link to="/Artist/:id/ArtistHome" :class="{active: page === '主頁'}"  @click="active" class="bookmark rounded-2xl border-2 border-gray-default text-gray-dark hover:border-orange hover:text-orange">主頁</router-link>
      <router-link to="/Artist/:id/ArtistMusic" :class="{active: page === '音樂'}"  @click="active" class="bookmark rounded-2xl border-2 border-gray-default text-gray-dark hover:border-orange hover:text-orange">音樂</router-link>
    </div>
    <span class="border-t border-gray-light w-full"></span>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      page: '主頁',
      follow: false
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
.preArrow{
  width: 25px;
  height: 25px;
  background-image: url("../assets/icon/pre_arrow.svg");
  position: absolute;
}
.artistContent{
  /* border:1px solid red; */
  margin: 30px 0 0 0;
}
.artistPhoto{
  box-shadow:  0px 4px 5px rgba(0, 0, 0, 0.25);
}
.approve{
    display: flex;
    align-items: center;
}
.approveIcon{
      width: 25px;
      height: 25px;
      background-image: url("../assets/icon/approve.svg");
      margin: 0 5px 2px 0;
}
.approve > p{
  color: #383838;
}
.count_share_follow{
  margin: 42px 0 10px 0;
  padding: 0 0 0 2px;
}
.countNum{
  font-size: 40px;
  margin: -5px 0 0 0;
}
.share_follow{
  display: flex;
}
.share{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-image: url("../assets/icon/share_b5.svg");
    background-repeat: no-repeat;
    cursor: pointer;
}
.share:hover{
  border: 2px solid #b5b5b5;
  background-color: #b5b5b5;
  background-image: url("../assets/icon/share_fff.svg");
}
.follow{
  background-color: #ff9d83;
  border-radius: 20px;
  width: 50px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
}
.follow:hover{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
}
.clickfollow{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
  width: 80px;
}
.clickfollow:hover{
  background-color: #ff9d83;
  color:#ffffff;
}
.detail{
    padding: 0 0 0 2px;
}
.bookmark{
  padding: 2px 10px 0 10px;
  font-size: 16px;
}
.active{
  @apply bg-orange border-orange text-white hover:text-white
}
</style>
