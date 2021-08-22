<template>
  <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div>
      <!-- <router-link to="/Find">pre-arrow</router-link> -->
      <router-link to="/Find" class="preArrow"></router-link>
    </div>
    <div class="artistContent flex flex-col w-full sm:flex-row space-x-0 sm:space-x-10 items-center h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-16 sm:space-y-4 ">
        <img class="artistPhoto rounded-full w-80 h-80 min-w-[320px]" :src="musicianImg">
        <div class="approve">
          <div class="approveIcon"></div>
          <p>已認證藝人</p>
        </div>
      </div>
      <div class=" h-1/2 mt-[-80px] sm:mt-0">
        <h1 class="text-[32px] sm:text-5xl text-black-backdrop sm:text-white font-medium w-full sm:min-w-[400px] flex justify-center sm:justify-start">{{ musicianName }}</h1>
        <div class="w-full py-4">
          <div class=" count_share_follow flex items-center sm:items-start w-full justify-between">
            <div class="flex w-[200px] sm:w-80 justify-between">
              <div>
                <p class="text-sm sm:text-base text-black-backdrop">音樂</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">{{ musicNum }}</div>
              </div>
              <div>
                <p class="text-sm sm:text-base text-black-backdrop">粉絲</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">{{ likeNum }}</div>
              </div>
            </div>
            <div class="share_follow absolute right-10">
              <div class="share"></div>
              <button
                class="follow"
                :class="{ clickfollow: follow }"
                @click="followMusician"
              >{{follow ? '正在關注' : '關注'}}
              </button>
            </div>
          </div>
        </div>
        <p class="detail text-sm text-gray-dark ">{{ musicianInfo }}</p>
      </div>
    </div>
  </div>
  <div class="px-5 sm:px-10 flex items-center mt-[220px] sm:mt-0">
    <span class="border-t border-gray-light w-3/6 sm:w-20 text-xs"></span>
    <div class="min-w-[198px] px-5 flex justify-evenly">
      <router-link :to="home" :class="{active: page === '主頁'}"  @click="active" class="bookmark rounded-2xl border-2 border-gray-default text-gray-dark hover:border-orange hover:text-orange">主頁</router-link>
      <router-link :to="music" :class="{active: page === '音樂'}"  @click="active" class="bookmark rounded-2xl border-2 border-gray-default text-gray-dark hover:border-orange hover:text-orange">音樂</router-link>
    </div>
    <span class="border-t border-gray-light w-3/6 sm:w-full"></span>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  async created () {
    this.getMusician()
  },
  computed: {
    home () {
      return `/Artist/${this.$route.params.id}/ArtistHome`
    },
    music () {
      return `/Artist/${this.$route.params.id}/ArtistMusic`
    }
  },
  data () {
    return {
      musicianInfo: '',
      musicianImg: '',
      musicNum: '',
      likeNum: 0,
      page: '主頁',
      follow: false
    }
  },
  methods: {
    async getMusician () {
      const form = new FormData()
      form.append('id', this.$route.params.id)
      const musician = await fetch('./DropbeatBackend/getMusician.php', {
        method: 'POST',
        body: form
      })
      const musicianData = await musician.json()
      console.log(musicianData)
      this.musicianImg = musicianData.musicial_photo
      this.musicNum = musicianData.num
      this.musicianInfo = musicianData.info
      this.musicianName = musicianData.musician_name
      this.likeNum = musicianData.followNum
    },
    async followMusician () {
      this.follow = !this.follow
      const form = new FormData()
      form.append('memberId', this.$store.getters.memberIdState)
      form.append('musicianId', this.$route.params.id)
      form.append('isFollow', this.follow)
      await fetch('./DropbeatBackend/followMusician.php', {
        method: 'POST',
        body: form
      })
      await this.getMusician()
    },
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
  /* border:1px solid red; */
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
@media screen and (max-width: 640px){
  .preArrow{
    left:25px
  }
  .countNum{
    font-size: 34px;
    margin: -5px 0 0 0;
  }
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
