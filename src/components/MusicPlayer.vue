<template>
  <audio ref="audio" :src="musicFile" @timeupdate="musicProgress"></audio>
  <div class="fixed bottom-[0vh] w-full z-[100]">
    <div class="playingline cursor-pointer" @click="changeTime">
      <div class="playingNow pointer-events-none" :style="`width: ${progress}`"></div>
    </div>
    <div class="flex justify-between items-center bg-black-backdrop h-[70px]">
      <div class="img_title_author flex items-center flex-shrink-0 ml-4 sm:ml-11 ">
        <div><img :src="playImg" class="w-[50px] h-[50px]"></div>
        <div class="title_author ml-3">
          <h4 class="text-sm text-white hover:text-green-light w-[130px] mb-[2px] truncate cursor-pointer ">{{title}}</h4>
          <h5 class="text-xs text-gray-light hover:underline w-[130px] truncate cursor-pointer">{{author}}</h5>
        </div>
      </div>
      <div class=" time_play_volume flex items-center">
        <div class="time flex text-sm text-gray-light tracking-[1px]">
          <p>{{playtime}}</p>
          <span>&nbsp; - &nbsp;</span>
          <p>{{totaltime}}</p>
        </div>
        <div class="pre_play_next flex items-center ">
          <button class="pre"></button>
          <button
            class="play"
            :class="{ clickplay: playing }"
            @click="musicControl"
          ></button>
          <button class="next"></button>
        </div>
        <div class="volumeAll flex items-center">
          <div class="volumeIcon"></div>
          <div class="volumeline cursor-pointer">
            <div class="volumeNow" :style="`width: ${volumeUpDown}`"></div>
          </div>
        </div>
      </div>
      <div class="like_add flex mr-4 sm:mr-11">
        <button
          class="like"
          :class="{ clicklike: like }"
          @click="like = !like"
        ></button>
        <span class="add hidden sm:block"></span>
        <div class="block cursor-pointer sm:hidden" @click="rwdMusicitem">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-light" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progress: '70%',
      playImg: require('../assets/images/singlemusic/s_002.jpg'),
      title: '在這座城市遺失了你',
      author: '告五人',
      playSecond: '207',
      totalSecond: '357',
      playing: false,
      volumeUpDown: '60%',
      like: false
    }
  },
  watch: {
    musicFile () {
      this.$refs.audio.addEventListener('canplay', () => {
        this.musicControl()
      })
    }
  },
  computed: {
    musicFile () {
      const music = this.$store.getters.getNowMusic
      return music
    },
    playtime () {
      const minute = parseInt(this.playSecond / 60).toString().padStart(2, '0')
      const seconds = parseInt(this.playSecond % 60).toString().padStart(2, '0')
      return `${minute} : ${seconds}`
    },
    totaltime () {
      const minute = parseInt(this.totalSecond / 60).toString().padStart(2, '0')
      const seconds = parseInt(this.totalSecond % 60).toString().padStart(2, '0')
      return `${minute} : ${seconds}`
    }
  },
  methods: {
    changeTime (e) {
      console.dir(e.target)
    },
    musicProgress () {
      const totalSecond = this.$refs.audio.duration
      this.playSecond = this.$refs.audio.currentTime
      const progress = (this.playSecond / totalSecond) * 100
      this.progress = `${progress.toFixed(2)}%`
      console.log(this.progress)
    },
    rwdMusicitem () {
      this.$store.dispatch('rwdMusicitem', true)
    },
    musicControl () {
      this.playing = !this.playing
      console.dir(this.$refs.audio)
      this.totalSecond = this.$refs.audio.duration
      if (this.playing) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
</script>

<style scoped>
  .playingline{
    height: 5px;
    background-color: #ededed;
    border-radius: 5px;
  }
  .playingNow{
    height: 5px;
    background-image: linear-gradient(to right, #31BDC5 30%, #A6ff00);
    border-radius: 5px;
  }
  .play{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/mainPlay.svg");
    background-repeat: no-repeat;
    margin: 0 40px;
    transition: all 0.3s;
  }
  .play:hover{
    transform: scale(1.2);
  }
  .clickplay{
    background-image: url("../assets/icon/mainPause.svg");
  }
  .pre{
    width: 30px;
    height: 30px;
    background-image: url("../assets/icon/preMusic_b5.svg");
    background-repeat: no-repeat;
    margin-left: 80px;
  }
  .pre:hover{
    background-image: url("../assets/icon/preMusic_fff.svg");
  }
  .next{
    width: 30px;
    height: 30px;
    background-image: url("../assets/icon/nextMusic_b5.svg");
    background-repeat: no-repeat;
    margin-right: 80px;
  }
  .next:hover{
    background-image: url("../assets/icon/nextMusic_fff.svg");
  }
  .volumeIcon{
    width: 20px;
    height: 20px;
    background-image: url("../assets/icon/volume_b5.svg");
    background-repeat: no-repeat;
    margin-right: 8px;
  }
  .volumeline{
    height: 4px;
    width: 100px;
    background-color: #b5b5b5;
    border-radius: 5px;
  }
  .volumeNow{
    height: 4px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .volumeAll:hover .volumeNow{
    background-image: linear-gradient(to right, #31BDC5 30%, #A6ff00);
  }
  .like{
    width: 25px;
    height: 25px;
    background-image: url("../assets/icon/like_b5.svg");
    background-repeat: no-repeat;
    margin-right: 30px;
  }
  .like:hover{
    background-image: url("../assets/icon/like_fff.svg");
  }
  .clicklike, .clicklike:hover{
    background-image: url("../assets/icon/like_d83.svg");
  }
  .add{
    width: 25px;
    height: 25px;
    background-image: url("../assets/icon/addPlaylist_b5.svg");
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .add:hover{
    background-image: url("../assets/icon/addPlaylist_fff.svg");
  }
  @media screen and (max-width: 992px){
    .play{
          margin: 0 30px;
    }
    .pre{
      margin-left: 50px;
    }
    .next{
      margin-right: 50px;
    }
  }
  @media screen and (max-width: 899px){
    .time{
      display: none;
    }
    .pre{
      margin-left: 0;
    }
  }
  @media screen and (max-width: 767px){
    .volumeAll{
      display: none;
    }
    .next{
      margin-right: 0;
    }
  }
  @media screen and (max-width: 639px){
    .like{
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 499px){
    .pre{
      display: none;
    }
    .next{
      display: none;
    }
  }
  @media screen and (max-width: 420px){
    .play{
      width: 30px;
      height: 30px;
      background-image: url("../assets/icon/mainPlay_rwd.svg");
      margin: 0 0 0 20px;
    }
    .clickplay{
      background-image: url("../assets/icon/mainPause_rwd.svg");
    }
  }
</style>
