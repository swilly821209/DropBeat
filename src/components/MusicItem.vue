<template>
  <!-- <div class=" h-40 m-auto flex justify-between items-center cursor-pointer"> -->
  <div class="music_item group">
    <div class="flex items-center justify-evenly">
      <div class="audio_N_num">
    <!-- <div class="music_N_name"> -->
      <div class="w-7 h-9">
        <audio-icon v-if="playing " class="relative left-[-4px] sm:left-0"></audio-icon>
      <!-- <p v-else class="text-3xl text-gray-dark tracking-wider font-medium w-10">{{ num }}</p> -->
        <p v-else class="music_num">{{ num }}</p>
      </div>
       <span :class="color" class="up_down">{{status}}</span>
      </div>
      <!-- <div class="musicImage relative  " @click="playing = !playing">
        <img :src="imgSrc" :alt="imgSrc" class=" rounded-2xl" >
        <div class="absolute bg-black-backdrop bg-opacity-60 h-36 w-36 rounded-2xl top-0  group-hover:visible bg-50% bg-no-repeat bg-center"
            :class="{'invisible' : !playing}"
            :style="`background-image: url(${backdropImg})`"></div>
      </div> -->
      <div class="musicImage relative " @click="playing = !playing" v-if="imgSrc">
        <img :src="imgSrc" :alt="imgSrc"  class=" rounded-2xl w-full h-full" >
        <div v-if="playing" class="playPauseIcon01 absolute bg-black-backdrop bg-opacity-60 rounded-2xl top-0  group-hover:visible bg-no-repeat bg-center z-10"
            :style="`background-image: url(${backdropImg})`"></div>
        <div v-if="!playing" class="playPauseIcon02 absolute  rounded-2xl top-0 bg-50% bg-no-repeat bg-center z-10"
            :style="`background-image: url(${backdropImg})`"></div>
        <div class="hover_bg absolute bg-black-backdrop bg-opacity-60 rounded-2xl top-0" ></div>
      </div>
      <div class="music_text text-black-backdrop">
        <h4 class="text-base transition-all cursor-pointer hover:text-blue-light " :class="{'text-blue-light': playing}">{{ musicName }}</h4>
        <p class=" text-sm text-gray-dark cursor-pointer hover:underline">{{ singer }}</p>
      <!-- <div class=" space-y-2 text-black-backdrop w-44">
        <h4 class="text-lg transition-all hover:text-blue-light" :class="{'text-blue-light': playing}">{{ musicName }}</h4>
        <p class=" text-gray-dark">{{ singer }}</p>
      </div> -->
      </div>
    </div>
    <div class="time_btns w-[380px] sm:flex hidden justify-between">
      <p class="text-sm text-gray-light">{{ time }}</p>
      <div class="playnum_likenum_share_add">
        <div class=" playBtn border-2 rounded-2xl border-gray-default text-gray-light flex items-center justify-center  space-x-1">
          <img src="../assets/icon/play_total.svg" />
          <span>{{ playCounterString }}</span>
        </div>
        <div @click="toggleLike" :class="{'text-orange': like}" class="likeBtn border-2 rounded-2xl border-gray-default text-gray-light flex items-center justify-center hover:text-white hover:bg-gray-light hover:border-gray-light  space-x-1">
          <svg class="" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor "><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <span>{{ likeNum }}</span>
        </div>
        <!-- <span class="border-2 border-gray-default hover:border-gray-light rounded-3xl flex justify-center items-center text-gray-light hover:text-white hover:bg-gray-light w-6 h-6">
        <span @click="shareSocial" class="border border-gray-light hover:border-gray-light rounded-3xl flex justify-center items-center text-gray-light hover:text-white hover:bg-gray-light w-6 h-6">
          <svg height='17px' width='17px'  fill="currentColor" xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="share" data-container-transform="translate(0 1)" viewBox="0 0 16 16" x="0px" y="0px"><path d="M11 0v3h-1c-8 0-10 4.1-10 10 1-4 4-5 8-5h3v3l5-5.313-5-5.688z" transform="translate(0 1)"></path></svg>
        </span> -->
        <!-- <span class="border border-gray-light w-6 h-6 flex justify-center items-center rounded-3xl text-gray-light hover:text-white hover:bg-gray-light">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
        </span> -->
        <span class="share" @click="shareSocial"></span>
        <span class="add"></span>
      </div>
    </div>
    <div class="sm:hidden block cursor-pointer" @click="rwdMusicitem">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-light" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    </div>
  </div>
</template>

<script>
import AudioIcon from './AudioIcon.vue'
export default {
  emits: ['share-social'],
  props: ['num', 'imgSrc', 'musicName', 'singer', 'totalSecond', 'playCounter', 'likeCounter', 'status', 'color'],
  components: {
    AudioIcon
  },
  data () {
    return {
      playing: false,
      like: false,
      likeNum: this.likeCounter
    }
  },
  computed: {
    time () {
      const minute = parseInt(this.totalSecond / 60)
      const seconds = this.totalSecond % 60
      return `${minute} : ${seconds}`
    },
    playCounterString () {
      return this.playCounter.toLocaleString()
    },
    backdropImg () {
      if (this.playing) {
        return require('../assets/icon/pause_fff.svg')
      } else {
        return require('../assets/icon/play_fff.svg')
      }
    }
  },
  methods: {
    rwdMusicitem () {
      this.$store.dispatch('rwdMusicitem', true)
    },
    toggleLike () {
      if (this.like === false) {
        this.likeNum++
      } else {
        this.likeNum--
      }
      this.like = !this.like
    },
    shareSocial () {
      this.$emit('share-social')
    }
  }
}
</script>
<style scoped>
.music_item{
  /* border:1px solid red; */
  display:flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 20px 0;
  border-bottom: 1px solid #EDEDED;
  cursor: default;
}
.music_item:last-child{
    border-bottom: none;
}
.audio_N_num{
    /* border:1px solid red; */
  width: 60px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.music_num{
    font-size: 24px;
    font-weight: 500;
    color: #7b7b7b;
}
.musicImage{
  /* border:1px solid red; */
  width: 100px;
  height: 100px;
  margin: 0 15px 0 10px;
  cursor: pointer;
}
.playPauseIcon01{
  width: 100px;
  height: 100px;
  background-size: 60%;
}
.playPauseIcon02{
  transform: scale(0);
  opacity: 0;
  transition: all .3s;
  width: 100px;
  height: 100px;
}
.music_item:hover .playPauseIcon02{
  transform: scale(1.2);
  opacity: 1;
}
.hover_bg{
  opacity: 0;
  transition: all .3s;
  width: 100px;
  height: 100px;
}
.music_item:hover .hover_bg{
  opacity: 1;
}
/* .music_item:hover h4{
  color:#31BDC5;
} */
.playnum_likenum_share_add{
  /* border:1px solid red; */
  display: flex;
}
.likeBtn, .playBtn{
  height: 25px;
  font-size: 14px;
  margin-left: 8px;
  padding: 0 8px;
}
.playBtn{
  padding: 0 10px 0 12px;
}
.likeBtn{
  cursor: pointer;
}
.likeBtn > svg{
    padding: 1px 0 0 0 ;
}
  .share, .add{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-left: 8px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .share{
    background-image: url("../assets/icon/share_b5.svg");
  }
  .add{
    background-image: url("../assets/icon/add_b5.svg");
  }
  .share:hover{
    border: 2px solid #b5b5b5;
    background-color: #b5b5b5;
    background-image: url("../assets/icon/share_fff.svg");
  }
  .add:hover{
    border: 2px solid #b5b5b5;
    background-color: #b5b5b5;
    background-image: url("../assets/icon/add_fff.svg");
  }
  /* 上升下降 */
  .up_down{
    /* border:1px solid red; */
    height: 18px;
  }
  .gray{
    margin: 0 5px;
    color: #B5B5B5;
  }
  .blue{
    margin: 0 5px;
    color: #31BDC5;
  }
  @media (max-width: 640px) {
  .musicImage{
    /* border:1px solid red; */
    width:70px;
    height:70px;
    flex-shrink: 0;
  }
  .playPauseIcon01{
    width:70px;
    height:70px;
  }
  .playPauseIcon02{
    width: 70px;
    height: 70px;
  }
  .hover_bg{
    width: 70px;
    height: 70px;
  }
  .music_item {
    padding: 15px 0;
    margin: 0;
  }
  .audio_N_num{
    /* border:1px solid red; */
    width:36px;
    flex-direction: column;
    justify-content: space-evenly
  }
}
</style>
