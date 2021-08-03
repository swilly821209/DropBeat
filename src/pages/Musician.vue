<template>
  <base-dialog>
    <delete-music></delete-music>
  </base-dialog>
  <base-dialog :show="uploadMusicDialog">
    <upload-music></upload-music>
  </base-dialog>
  <base-dialog :show="true">
    <div>
      <p>刪除此音樂後不可復原，您確定刪除？</p>
      <p>若您有問題請聯繫管理員</p>
    </div>
  </base-dialog>
  <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <!-- <div class="flex justify-center items-center bg-gray-300 rounded-full w-10 h-10 cursor-pointer"> -->
    <div>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="27.217" height="24.495" viewBox="0 0 27.217 24.495">
        <path id="Path_22" data-name="Path 22" d="M21.91,17.555A4.355,4.355,0,1,1,17.555,13.2,4.355,4.355,0,0,1,21.91,17.555Z" transform="translate(-3.946 -3.946)" fill="#7b7b7b"/>
        <path id="Path_23" data-name="Path 23" d="M12.526,3l-2.49,2.722H5.722A2.73,2.73,0,0,0,3,8.443v16.33A2.73,2.73,0,0,0,5.722,27.5H27.5a2.73,2.73,0,0,0,2.722-2.722V8.443A2.73,2.73,0,0,0,27.5,5.722H23.182L20.691,3Zm4.083,20.413a6.8,6.8,0,1,1,6.8-6.8A6.807,6.807,0,0,1,16.609,23.413Z" transform="translate(-3 -3)" fill="#7b7b7b"/>
      </svg> -->
      <span class="chooseBg"></span>
    </div>
    <div class="artistContent flex space-x-10 items-center h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4">
        <img class="artistPhoto rounded-full w-80 h-80 min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div class="approve">
          <div class="approveIcon"></div>
          <p>已認證藝人</p>
        </div>
      </div>
      <div class="h-1/2">
        <div class="flex items-end">
          <h1 class="text-5xl text-white font-medium min-w-[400px] mb-12">告五人 Accusefive</h1>
          <span class="editIcon01"></span>
        </div>
        <div>
          <div class="count_contact flex items-start w-full justify-between">
            <div class="flex w-80 justify-between">
              <div>
                <p class="text-base text-black-backdrop">音樂</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">16</div>
              </div>
              <div>
                <p class="text-bas text-black-backdrop">粉絲</p>
                <div class="countNum text-black-backdrop font-bold tracking-wider">
                  68,250
                  <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 20 12.5">
                    <path id="_" data-name="%" d="M8.438,1.952a2,2,0,0,1,3.123,0l5.839,7.3A2,2,0,0,1,15.839,12.5H4.161A2,2,0,0,1,2.6,9.251Z" fill="#fe9f8a"/>
                  </svg>
                  <span class="text-base text-orange">3%</span>
                </div>
              </div>
            </div>
            <div>
              <button class="btn text-sm">聯絡管理員</button>
            </div>
          </div>
          <p class="detail text-sm text-gray-dark">
            告五人成立於2011年，2017年重新成團，2018年以首張EP《迷霧之子》獲得金音獎最佳新人。目前為主唱潘雲安、犬青及鼓手哲謙的三人編制， 男女雙主唱的迷人交錯聲線，帶給聽眾強烈的吸引力。
            <span class="editIcon02"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="range">
    <div class="flex justify-between mt-5">
      <h4>我的專輯</h4>
      <div class="arrow cursor-pointer" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="albumL"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="albumR"/>
        </svg>
      </div>
    </div>
    <div class="aa flex justify-start items-start mb-32">
      <div class="flex flex-col justify-center items-center relative">
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
          class="addFile01 "
          :album="true"
          :text="'建立專輯'"
          :inputImg="'bg-ligth'"
        ></select-img>
        <!-- <p class="absolute text-white bottom-10">建立專輯</p> -->
      </div>
      <album-item class="singleAlbum"
        :edit="true"
        :editAlbum="true"
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
    <h4>專輯草稿</h4>
    <div class="flex justify-start items-start mb-32">
      <album-item class="singleAlbum"
        :editDraft="true"
        :editAlbum="true"
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
      <h4 class="t3">我的音樂</h4>
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
          @click="uploadMusic"
          class=" addFile02"
          :file="true"
          :text="'選取檔案'"
          :inputImg="'bg-ligth'"
        ></select-img>
        <!-- <p class="absolute text-white bottom-10">選取檔案</p> -->
      </div>
      <album-item class="singleAlbum"
        :edit="true"
        :editMusic="true"
        v-for="item in myMusic"
        :key="item"
        :img="item.img"
        :albumName="item.albumName"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime"
      ></album-item>
    </div>
    <!--  -->
      <h4>音樂草稿</h4>
    <div class="flex justify-start items-start mb-32">
      <album-item class="singleAlbum"
        :editDraft="true"
        :editMusic="true"
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
import UploadMusic from '../components/UploadMusic.vue'
export default {
  components: {
    // DeleteMusic
    AlbumItem,
    SelectImg,
    UploadMusic
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
        { img: 'https://picsum.photos/500', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/600', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/700', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' }
      ],
      draftMusic: [
        { img: 'https://picsum.photos/800', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: require('../assets/bg-gray.svg'), albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/900', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' }
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
    },
    uploadMusicDialog () {
      return this.$store.getters.uploadMusicDialogState
    }
  },
  methods: {
    uploadMusic () {
      this.$store.dispatch('uploadMusicDialog', true)
    }
  }
}
</script>

<style scoped>
.chooseBg{
  width: 35px;
  height: 35px;
  background-image: url("../assets/icon/camera_50.svg");
  position: absolute;
  cursor: pointer;
  transition: all 0.3s;
}
.chooseBg:hover{
  transform: scale(1.4);
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
.editIcon01{
    width: 20px;
    height: 20px;
    background-image: url("../assets/icon/edit_fff.svg");
    margin: 0 0 55px 5px;
    cursor: pointer;
    transition: all 0.3s;
}
.editIcon01:hover{
  transform: scale(1.2);
}
.count_contact{
  margin: 0px 0 10px 0;
  padding: 0 0 0 2px;
}
.countNum{
  font-size: 40px;
  margin: -5px 0 0 0;
}
.btn{
    border: 2px solid #FE9F8A;
    color: #FE9F8A;
    border-radius: 20px;
    padding: 2px 20px;
}
  .btn:hover{
    color: white;
    background-color: #FE9F8A;
  }
  .detail{
    padding: 0 0 0 2px;
  }
.editIcon02{
  position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../assets/icon/edit_b5.svg");
    margin: 2px 0 0 5px;
    cursor: pointer;
    transition: all 0.3s;
}
.editIcon02:hover{
  transform: scale(1.2);
}
h4{
  font-size: 32px;
  font-weight: 500;
  color:#383838;
  cursor:default;
  margin: 0 0 20px 0;
}
.t3{
    margin: 30px 0 20px 0;
}
.addFile01{
    width: 260px;
    height: 260px;
    margin: 0 30px 0 0;
}
.addFile02{
    width: 260px;
    height: 260px;
    margin: 0 -15px 0 0;
}
@media screen and (max-width: 1300px) {
  .addFile01{
      width: 220px;
      height: 220px;
      margin: 0 30px 0 0;
  }
  .addFile02{
      width: 220px;
      height: 220px;
      margin: 0 -15px 0 0;
  }
}
</style>
