<template>
  <div class="w-11/12 h-40 m-auto flex justify-between items-center cursor-pointer">
    <div class="flex items-center w-96 justify-evenly">
      <audio-icon v-if="playing"></audio-icon>
      <p v-else class="text-3xl text-gray-dark tracking-wider font-medium w-10">{{ num }}</p>
      <span :class="color">{{status}}</span>
      <div class=" relative group " @click="playing = !playing">
        <img :src="imgSrc" :alt="imgSrc" class="h-36 w-36 rounded-2xl" >
        <div class="absolute bg-black-backdrop bg-opacity-60 h-36 w-36 rounded-2xl top-0  group-hover:visible bg-50% bg-no-repeat bg-center"
             :class="{'invisible' : !playing}"
             :style="`background-image: url(${backdropImg})`"></div>
      </div>
      <div class=" space-y-2 text-black-backdrop w-44">
        <h4 class="text-lg transition-all hover:text-blue-light" :class="{'text-blue-light': playing}">{{ musicName }}</h4>
        <p class=" text-gray-dark">{{ singer }}</p>
      </div>
    </div>
    <div class="w-[380px] flex justify-between">
      <p class="text-gray-light">{{ time }}</p>
      <div class=" space-x-2 flex">
        <div class=" space-x-1 text-gray-light border border-gray-light px-3 rounded-2xl flex items-center">
          <img src="../assets/icon/play_total.svg" />
          <span>{{ playCounterString }}</span>
        </div>
        <div @click="toggleLike" :class="{'text-orange': like}" class="rounded-2xl border-gray-light border text-gray-light flex items-center justify-center px-3 hover:text-white hover:bg-gray-light space-x-1">
          <svg class="" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <span>{{ likeNum }}</span>
        </div>
        <span @click="shareSocial" class="border border-gray-light hover:border-gray-light rounded-3xl flex justify-center items-center text-gray-light hover:text-white hover:bg-gray-light w-6 h-6">
          <svg height='17px' width='17px'  fill="currentColor" xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="share" data-container-transform="translate(0 1)" viewBox="0 0 16 16" x="0px" y="0px"><path d="M11 0v3h-1c-8 0-10 4.1-10 10 1-4 4-5 8-5h3v3l5-5.313-5-5.688z" transform="translate(0 1)"></path></svg>
        </span>
        <span class="border border-gray-light w-6 h-6 flex justify-center items-center rounded-3xl text-gray-light hover:text-white hover:bg-gray-light">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
        </span>
      </div>
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
        return require('../assets/icon/pause.svg')
      } else {
        return require('../assets/icon/play.svg')
      }
    }
  },
  methods: {
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
  .gray{
    margin: 0 5px;
    color: #B5B5B5;
  }
  .blue{
    margin: 0 5px;
    color: #31BDC5;
  }
</style>
