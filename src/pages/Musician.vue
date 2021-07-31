<template>
  <div class="h-[400px] sm:h-[500px] mb-[100px] sm:mb-[0] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div>
      <span class="chooseBg"></span>
    </div>
    <div class="artistContent flex flex-col sm:flex-row space-x-10 items-center h-[180px] sm:h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4 mt-[40px] sm:mt-[0]">
        <img class="artistPhoto mb-[35px] sm:mb-[0px] rounded-full w-[120px] h-[120px] sm:w-80 sm:h-80 sm:min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div class="approve">
          <div class="approveIcon"></div>
          <p>已認證藝人</p>
        </div>
      </div>
      <!-- 640以上 -->
      <div class="h-1/2 hidden sm:block">
        <div class="flex items-end">
          <h1 class="text-[32px] sm:text-5xl text-gray-700 sm:text-white font-medium min-w-[400px] mb-12">告五人 Accusefive</h1>
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
    <!-- 640以下 -->
    <div class="block sm:hidden">
      <div class="flex items-center mt-[-15px] mb-[30px]">
        <h1 class="text-center text-[28px] sm:text-5xl text-gray-700 sm:text-white font-medium w-full">告五人 Accusefive</h1>
        <span class="editIcon01"></span>
      </div>
      <div>
        <div class="count_contact flex items-start w-full justify-between">
          <div class="flex w-80 justify-between items-start mt-[20px]">
            <div>
              <p class="text-[20px] text-black-backdrop">音樂</p>
              <div class="countNum text-black-backdrop font-bold tracking-wider">16</div>
            </div>
            <div>
              <p class="text-[18px] text-black-backdrop">粉絲</p>
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
  <div class="range">
    <div class="flex justify-between mt-5">
      <h4 class="t3">我的音樂</h4>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start mb-32">
      <div class="flex flex-col justify-center items-center relative mr-4 sm:mr-12 fullWidth h-[100px] sm:h-full">
        <select-img
          class="addFile02"
          :file="true"
          :text="'選取檔案'"
          :inputImg="'bg-ligth'"
        ></select-img>
      </div>
      <!-- 640以上 -->
      <swiper :slidesPerView="3" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[370px] mt-[-48px] hidden sm:flex">
        <swiper-slide v-for="item in myAlbum" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :edit="true"
            :editAlbum="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
      <!-- 640以下 -->
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[250px] mt-[35px] w-full sm:hidden">
        <swiper-slide v-for="item in myAlbum" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :edit="true"
            :editAlbum="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 專輯草稿 -->
    <base-title title="專輯草稿"></base-title>
    <div class="justify-start items-start mb-32 hidden sm:flex">
      <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[370px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftAblum" :key="item" class="singleAlbum top-12">
          <album-item class="singleAlbum"
            :editDraft="true"
            :editAlbum="true"
            :size="'width:250px; height:250px'"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
    <!-- RWD  -->
    <div class="justify-start items-start mb-32 flex sm:hidden mt-[50px]">
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[250px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftAblum" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :editDraft="true"
            :editAlbum="true"
            :size="'width:250px; height:250px'"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
    <div class="flex justify-between mt-5">
      <h4 class="t3">我的音樂</h4>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start mb-32">
      <div class="flex flex-col justify-center items-center relative mr-4 sm:mr-12 fullWidth h-[100px] sm:h-full">
        <select-img
          class="addFile02"
          :file="true"
          :text="'選取檔案'"
          :inputImg="'bg-ligth'"
        ></select-img>
      </div>
      <!-- 640以上 -->
      <swiper :slidesPerView="3" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[370px] mt-[-48px] hidden sm:flex">
        <swiper-slide v-for="item in myMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :edit="true"
            :editAlbum="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
      <!-- 640以下 -->
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[250px] mt-[35px] w-full sm:hidden">
        <swiper-slide v-for="item in myMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :edit="true"
            :editAlbum="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 音樂草稿  -->
    <base-title title="音樂草稿"></base-title>
    <div class="justify-start items-start mb-32 hidden sm:flex">
      <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[370px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :editDraft="true"
            :editMusic="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
    <!-- RWD  -->
    <div class="justify-start items-start mb-0 flex sm:hidden mt-[50px]">
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[250px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            :editDraft="true"
            :editMusic="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
// import DeleteMusic from '../components/DeleteMusic.vue'
import AlbumItem from '../components/AlbumItem.vue'
import SelectImg from '../components/SelectImg.vue'
SwiperCore.use([Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
    // DeleteMusic
    AlbumItem,
    SelectImg
  },
  data () {
    return {
      myAlbum: [
        { img: 'https://picsum.photos/100', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/200', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
        { img: 'https://picsum.photos/300', albumName: '運氣來的若有似無', year: '2020', num: '12', totalTime: '00:51:03' },
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
        { img: 'https://picsum.photos/700', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/500', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/600', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/700', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' }
      ],
      draftMusic: [
        { img: 'https://picsum.photos/800', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: require('../assets/bg-gray.svg'), albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        { img: 'https://picsum.photos/900', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
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
.allFund{
  /* border:1px solid red; */
  transform: scale(1.02);
}
.singleFund{
  padding: 0 12px 0 12px;
}
.singleFund:nth-child(4){
  display: none
}
.swiper-button-disabled {
  @apply text-gray-default;
}
.draftMusic:nth-child(3){
  border-radius: 50px;
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
@media  screen and (max-width: 640px) {
  ::v-deep .singleAlbum{
    width: 150px;
    height: 150px;
  }
  .singleFund{
    padding: 0 12px 0 12px;
    width: 150px;
  }
  ::v-deep .editDraft{
    top: 0;
    left: 0;
  }
  .fullWidth{
    width: 100%;
  }
  .addFile02{
    width: 100%;
  }
  .editIcon01{
      background-image: url("../assets/icon/edit_d83.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      margin: 0px 0px 0px 0px;
  }
  .countNum{
    font-size: 22px;
    margin: -5px 0 0 0;
  }
  .btn{
      width: 80px;
      font-size: 12px;
      padding: 2px 5px;
      margin-top: 35px;
      margin-left: 10px;
  }
  ::v-deep .circle{
    /* border:1px solid red; */
    width: 50px;
    height: 50px;
  }
  ::v-deep .iconDerection{
    flex-direction: row;
  }
  ::v-deep .cameraText{
    margin-left: 10px;
  }
}
</style>
