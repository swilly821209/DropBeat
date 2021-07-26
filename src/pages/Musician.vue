<template>
  <!-- <base-dialog :show="deleteMusicDialog">
    <delete-music></delete-music>
  </base-dialog> -->
  <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div class="flex justify-center items-center bg-gray-300 rounded-full w-10 h-10 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="27.217" height="24.495" viewBox="0 0 27.217 24.495">
        <path id="Path_22" data-name="Path 22" d="M21.91,17.555A4.355,4.355,0,1,1,17.555,13.2,4.355,4.355,0,0,1,21.91,17.555Z" transform="translate(-3.946 -3.946)" fill="#7b7b7b"/>
        <path id="Path_23" data-name="Path 23" d="M12.526,3l-2.49,2.722H5.722A2.73,2.73,0,0,0,3,8.443v16.33A2.73,2.73,0,0,0,5.722,27.5H27.5a2.73,2.73,0,0,0,2.722-2.722V8.443A2.73,2.73,0,0,0,27.5,5.722H23.182L20.691,3Zm4.083,20.413a6.8,6.8,0,1,1,6.8-6.8A6.807,6.807,0,0,1,16.609,23.413Z" transform="translate(-3 -3)" fill="#7b7b7b"/>
      </svg>
    </div>
    <div class="flex space-x-10 items-center h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4">
        <img class="rounded-full w-80 h-80 min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div class="flex items-center">
          <svg class="mr-3" id="top" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.999" height="30" viewBox="0 0 29.999 30">
            <defs>
              <linearGradient id="linear-gradient" x1="-0.269" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#5683e6"/>
                <stop offset="1" stop-color="#7dffb4"/>
              </linearGradient>
            </defs>
            <path id="top-2" data-name="top" d="M-2132-2915a14.906,14.906,0,0,1-5.839-1.179,14.946,14.946,0,0,1-4.768-3.215,14.948,14.948,0,0,1-3.215-4.768A14.91,14.91,0,0,1-2147-2930a14.912,14.912,0,0,1,1.178-5.839,14.948,14.948,0,0,1,3.215-4.768,14.95,14.95,0,0,1,4.768-3.214A14.9,14.9,0,0,1-2132-2945a14.98,14.98,0,0,1,11.453,5.314,1.233,1.233,0,0,0-.284.212l-11.51,11.51-5.374-5.374a1.219,1.219,0,0,0-.868-.359,1.22,1.22,0,0,0-.868.359l-1.736,1.736a1.229,1.229,0,0,0,0,1.736l7.977,7.977a1.222,1.222,0,0,0,.868.36,1.222,1.222,0,0,0,.868-.36l13.482-13.482A14.934,14.934,0,0,1-2117-2930a14.908,14.908,0,0,1-1.178,5.839,14.96,14.96,0,0,1-3.215,4.768,14.946,14.946,0,0,1-4.768,3.215A14.908,14.908,0,0,1-2132-2915Z" transform="translate(2147 2945)" fill="#7dffb4"/>
          </svg>
          <p>已認證藝人</p>
        </div>
      </div>
      <div class="h-1/2">
        <div class="flex items-end">
          <h1 class="text-5xl text-white font-medium min-w-[400px] mb-12">告五人 Accusefive</h1>
          <svg class="mb-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
            <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#ededed"/>
          </svg>
        </div>
        <div class=" space-y-5">
          <div class="flex items-center w-full justify-between">
            <div class="flex w-80 justify-between">
              <div>
                <p class="text-xl text-black-backdrop">音樂</p>
                <div class="text-5xl font-bold tracking-wider">16</div>
              </div>
              <div>
                <p class="text-xl text-black-backdrop">粉絲</p>
                <div class="text-5xl font-bold tracking-wider">
                  68,250
                  <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 20 12.5">
                    <path id="_" data-name="%" d="M8.438,1.952a2,2,0,0,1,3.123,0l5.839,7.3A2,2,0,0,1,15.839,12.5H4.161A2,2,0,0,1,2.6,9.251Z" fill="#fe9f8a"/>
                  </svg>
                  <span class="text-lg text-orange">3%</span>
                </div>
              </div>
            </div>
            <div>
              <button class="btn">聯絡管理員</button>
            </div>
          </div>
          <p class=" text-sm text-gray-light">
            告五人成立於2011年，2017年重新成團，2018年以首張EP《迷霧之子》獲得金音獎最佳新人。目前為主唱潘雲安、犬青及鼓手哲謙的三人編制， 男女雙主唱的迷人交錯聲線，帶給聽眾強烈的吸引力。
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
              <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#b5b5b5"/>
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="range">
    <div class="flex justify-between mt-5">
      <base-title title="我的專輯" class="text-gray-light mb-5"></base-title>
      <div class="arrow cursor-pointer" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="albumL"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="albumR"/>
        </svg>
      </div>
    </div>
    <div class="flex justify-start items-start mb-32">
      <div class="flex flex-col justify-center items-center relative mr-12">
        <!-- <div class="flex justify-center items-center bg-gray-light size">
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105">
            <g id="play" fill="none" stroke="#fff" stroke-width="3">
              <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
              <circle cx="52.5" cy="52.5" r="51" fill="none"/>
            </g>
            <path id="Path_24" data-name="Path 24" d="M18,7.5V44.015" transform="translate(34 26.742)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
            <path id="Path_25" data-name="Path 25" d="M7.5,18H44.015" transform="translate(26.242 34.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
          </svg>
        </div> -->
        <select-img
          class="flex justify-center items-center bg-gray-light size"
          :album="true"
          :text="'建立專輯'"
          :inputImg="'bg-ligth'"
        ></select-img>
        <!-- <p class="absolute text-white bottom-10">建立專輯</p> -->
      </div>
      <album-item
        :edit="true"
        class="mr-12"
        v-for="item in myAlbum"
        :key="item"
        :img="item.img"
        :albumName="item.albumName"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime"
      ></album-item>
    </div>
    <!--  -->
    <base-title title="專輯草稿" class="text-gray-light mb-5"></base-title>
    <div class="flex justify-start items-start mb-32">
      <album-item
        :editDraft="true"
        class="mr-12"
        v-for="item in draftAblum"
        :size="'width:250px; height:250px'"
        :key="item"
        :img="item.img"
        :albumName="item.albumName"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime"
      ></album-item>
    </div>
    <!--  -->
    <div class="flex justify-between mt-5">
      <base-title title="我的音樂" class="text-gray-light mb-5"></base-title>
      <div class="arrow cursor-pointer" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="musicL"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="musicR"/>
        </svg>
      </div>
    </div>
    <div class="flex justify-start items-start mb-32">
      <div class="flex flex-col justify-center items-center relative mr-12">
        <!-- <div class="flex justify-center items-center bg-gray-light relative size">
          <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105">
            <g id="play" fill="none" stroke="#fff" stroke-width="3">
              <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
              <circle cx="52.5" cy="52.5" r="51" fill="none"/>
            </g>
            <path id="Icon_awesome-upload" data-name="Icon awesome-upload" d="M25.833,33.512H18.851a2.09,2.09,0,0,1-2.095-2.095V16.756H9.1a1.742,1.742,0,0,1-1.231-2.976L21.147.5a1.691,1.691,0,0,1,2.383,0L36.813,13.779a1.742,1.742,0,0,1-1.231,2.976H27.928V31.418A2.09,2.09,0,0,1,25.833,33.512Zm18.851-.7v9.775a2.09,2.09,0,0,1-2.095,2.095H2.095A2.09,2.09,0,0,1,0,42.589V32.814A2.09,2.09,0,0,1,2.095,30.72H13.964v.7a4.891,4.891,0,0,0,4.887,4.887h6.982a4.891,4.891,0,0,0,4.887-4.887v-.7H42.59A2.09,2.09,0,0,1,44.685,32.814Zm-10.822,7.68a1.745,1.745,0,1,0-1.745,1.745A1.751,1.751,0,0,0,33.863,40.494Zm5.586,0A1.745,1.745,0,1,0,37.7,42.24,1.751,1.751,0,0,0,39.448,40.494Z" transform="translate(29.658 29.655)" fill="#fff"/>
          </svg>
        </div> -->
        <select-img
          class="flex justify-center items-center bg-gray-light relative size"
          :file="true"
          :text="'選取檔案'"
          :inputImg="'bg-ligth'"
        ></select-img>
        <!-- <p class="absolute text-white bottom-10">選取檔案</p> -->
      </div>
      <album-item
        :edit="true"
        class="mr-12"
        v-for="item in myMusic"
        :size="'width:250px; height:250px'"
        :key="item"
        :img="item.img"
        :albumName="item.albumName"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime"
      ></album-item>
    </div>
    <!--  -->
    <base-title title="音樂草稿" class="text-gray-light mb-5"></base-title>
    <div class="flex justify-start items-start mb-32">
      <album-item
        :editDraft="true"
        class="mr-12"
        v-for="item in draftMusic"
        :size="'width:250px; height:250px'"
        :key="item"
        :img="item.img"
        :albumName="item.albumName"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime"
      ></album-item>
    </div>
  </div>
</template>

<script>
// import DeleteMusic from '../components/DeleteMusic.vue'
import AlbumItem from '../components/AlbumItem.vue'
import SelectImg from '../components/SelectImg.vue'
export default {
  components: {
    // DeleteMusic
    AlbumItem,
    SelectImg
  },
  data () {
    return {
      myAlbum: [
        { img: 'https://picsum.photos/100', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/200', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/300', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' }
      ],
      draftAblum: [
        { img: 'https://picsum.photos/400', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: require('../assets/bg-gray.svg'), albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' }
      ],
      myMusic: [
        { img: 'https://picsum.photos/500', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/600', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/700', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' }
      ],
      draftMusic: [
        { img: 'https://picsum.photos/800', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: require('../assets/bg-gray.svg'), albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/900', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' }
      ],
      albumL: '#ededed',
      albumR: '#b5b5b5',
      musicL: '#ededed',
      musicR: '#b5b5b5'
    }
  },
  computed: {
    deleteMusicDialog () {
      return this.$store.getters.deleteMusicState
    }
  }
}
</script>

<style scoped>
  .size{
    width: 250px;
    height: 250px;
  }
  .btn{
    border: 2px solid #FE9F8A;
    color: #FE9F8A;
    border-radius: 20px;
    margin-left: 20px;
    padding: 2px 20px;
    align-self: center;
    justify-self: center;
  }
  .btn:hover{
    color: white;
    background-color: #FE9F8A;
  }
</style>
