<template>
  <base-dialog>
    <delete-music></delete-music>
  </base-dialog>
  <base-dialog :show="uploadMusicDialog">
    <upload-music @edit-name="editName = false" :musicFile="musicFile" :duration="duration" :edit="editName"></upload-music>
  </base-dialog>
  <base-dialog :show="false">
    <div>
      <p>刪除此音樂後不可復原，您確定刪除？</p>
      <p>若您有問題請聯繫管理員</p>
    </div>
  </base-dialog>
  <base-dialog :show="uploadAlbumDialog">
    <upload-album></upload-album>
  </base-dialog>
  <!-- <div class="h-[500px] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div class="flex justify-center items-center bg-gray-300 rounded-full w-10 h-10 cursor-pointer"> -->
  <div class="rangeTop h-[400px] sm:h-[500px] mb-[100px] sm:mb-[0] bg-50% bg-top bg-gradient-to-t to-gray-light from-black-backdrop bg-no-repeat px-10 pt-[60px]">
    <div>
      <span class="chooseBg"></span>
    </div>
    <div class="artistContent flex flex-col sm:flex-row space-x-10 items-center h-[180px] sm:h-[360px]">
      <div class="flex flex-col justify-center items-center space-y-4 mt-[40px] sm:mt-[0]">
        <div class="artistSelectImg relative">
        <img class="artistPhoto mb-[35px] sm:mb-[0px] rounded-full w-[120px] h-[120px] sm:w-80 sm:h-80 sm:min-w-[320px]" src="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <select-img class="selectImg"
            :radius="'rounded-3xl'"
            :camera="true"
            :text="'選取圖片'"
          :inputImg="'border-2 border-white bg-white incircle'"
        ></select-img>
        </div>
        <div class="approve">
          <div class="approveIcon"></div>
          <p class="text-sm sm:text-base">已認證藝人</p>
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
    <div class=" block sm:hidden">
      <div class="flex items-center justify-center mt-[-15px] mb-[30px]">
        <h1 class="text-center text-[28px] mr-2 sm:text-5xl text-gray-700 sm:text-white font-medium ">告五人 Accusefive</h1>
        <span class="editIcon01"></span>
      </div>
      <div>
        <div class="count_contact flex items-start w-full justify-between">
          <div class="flex w-full justify-between items-center mt-[20px]">
            <div>
              <p class="text-[14px] text-black-backdrop">音樂</p>
              <div class="countNum text-black-backdrop font-bold tracking-wider">16</div>
            </div>
            <div>
              <p class="text-[14px] text-black-backdrop">粉絲</p>
              <div class="countNum text-black-backdrop font-bold tracking-wider">
                68,250
                <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 20 12.5">
                  <path id="_" data-name="%" d="M8.438,1.952a2,2,0,0,1,3.123,0l5.839,7.3A2,2,0,0,1,15.839,12.5H4.161A2,2,0,0,1,2.6,9.251Z" fill="#fe9f8a"/>
                </svg>
                <span class="text-base text-orange">3%</span>
              </div>
            </div>
            <div>
              <button class="btn text-sm">聯絡管理員</button>
            </div>
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
      <h4 class="t3">我的專輯</h4>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full sm:items-start mb-20">
      <div class=" flex flex-col justify-center items-center relative mr-0 sm:mr-6 sm:w-[260px] w-full sm:h-[260px] h-[100px] bg-[#B5B5B5]">
        <div @click="uploadAlbum" class="group hover:bg-gray-default cursor-pointer sm:w-[260px] w-full sm:h-[260px] h-[100px] flex sm:flex-col justify-center items-center">
          <div class="border-white rounded-full border-4 inline-block group-hover:border-gray-light">
            <svg class="group-hover:text-gray-light fill-current text-white sm:w-[105px] sm:h-[105px] w-10 h-10 sm:p-5 p-2" id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs></defs><title>addmusic_d83</title><path id="Icon_awesome-plus" data-name="Icon awesome-plus" class="cls-1" d="M18.57,7.86H12.14V1.43A1.43,1.43,0,0,0,10.71,0H9.29A1.43,1.43,0,0,0,7.86,1.43h0V7.86H1.43A1.43,1.43,0,0,0,0,9.29v1.43a1.43,1.43,0,0,0,1.43,1.42H7.86v6.43A1.43,1.43,0,0,0,9.29,20h1.43a1.43,1.43,0,0,0,1.42-1.43h0V12.14h6.43A1.43,1.43,0,0,0,20,10.71V9.29a1.43,1.43,0,0,0-1.43-1.43Z"/></svg>
          </div>
          <p class="text-white sm:mt-5 ml-2 group-hover:text-gray-light">建立專輯</p>
        </div>
      </div>
      <!-- 640以上 -->
      <swiper :slidesPerView="3" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="aa allFund h-[370px] mt-[-48px] hidden sm:flex">
        <swiper-slide v-for="item in myAlbum" :key="item" class=" singleFund top-12">
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
      <div class="relative flex sm:hidden items-center top-[10px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <!-- 專輯草稿 -->
    <div class="flex justify-between mt-5">
      <base-title title="專輯草稿"></base-title>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrowA block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrowA block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="justify-start items-start mt-5 mb-20 ml-3 hidden sm:flex">
      <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrowA', prevEl: '.preArrowA'}" class="allFund h-[370px] mt-[-48px] w-full">
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
    <div class="justify-start flex-col items-center mb-16 flex sm:hidden mt-[50px]">
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrowA', prevEl: '.preArrowA'}" class="allFund h-[250px] mt-[-48px] w-full">
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
      <div class="relative flex sm:hidden items-center top-[10px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrowA block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrowA block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="flex justify-between sm:mt-5 mt-2">
      <h4 class="t3">我的音樂</h4>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrowB block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrowB block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start w-full mb-20">
      <div class="flex flex-col justify-center items-center relative sm:mr-7  sm:w-[260px] w-full sm:h-[260px] h-[100px] pr-2 sm:pr-0 bg-[#B5B5B5]">
        <select-img
          @change="uploadMusic"
          class=" addFile02"
          :file="true"
          :text="'選取檔案'"
          :inputImg="'bg-ligth'"
        ></select-img>
      </div>
      <!-- 640以上 -->
      <swiper :slidesPerView="3" :navigation="{nextEl: '.nextArrowB', prevEl: '.preArrowB'}" class="allFund h-[370px] mt-[-48px] hidden sm:flex">
        <swiper-slide v-for="item in myMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            @edit-draft="editDraft(item.albumName)"
            :edit="true"
            :editMusic="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
      <!-- 640以下 -->
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrowsB', prevEl: '.preArrowsB'}" class="allFund h-[250px] mt-[35px] w-full sm:hidden">
        <swiper-slide v-for="item in myMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            @edit-draft="editDraft(item.albumName)"
            :edit="true"
            :editMusic="true"
            :img="item.img"
            :albumName="item.albumName"
            :year="item.year"
            :num="item.num"
            :totalTime="item.totalTime"
          ></album-item>
        </swiper-slide>
      </swiper>
      <div class="relative flex sm:hidden items-center top-[10px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrows block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrows block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <!-- 音樂草稿  -->
    <div class="flex justify-between sm:mt-5 mt-2">
      <base-title title="音樂草稿"></base-title>
      <div class="relative hidden sm:flex items-center top-[-8px] z-10 justify-between w-16" >
          <svg xmlns="http://www.w3.org/2000/svg" class="preArrowM block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="nextArrowM block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="justify-start items-start mt-5 mb-32 hidden sm:flex">
      <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrowM', prevEl: '.preArrowM'}" class="allFund h-[370px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            @edit-draft="editDraft(item.albumName)"
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
    <div class="justify-start flex-col items-center mb-0 flex sm:hidden mt-[50px]">
      <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrowM', prevEl: '.preArrowM'}" class="allFund h-[250px] mt-[-48px] w-full">
        <swiper-slide v-for="item in draftMusic" :key="item" class="singleFund top-12">
          <album-item class="singleAlbum"
            @edit-draft="editDraft(item.albumName)"
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
      <div class="relative flex sm:hidden items-center top-[10px] z-10 justify-between w-16" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrowM block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrowM block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
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
import UploadMusic from '../components/UploadMusic.vue'
import UploadAlbum from '../components/UploadAlbum.vue'
SwiperCore.use([Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
    // DeleteMusic
    AlbumItem,
    SelectImg,
    UploadMusic,
    UploadAlbum
  },
  async created () {
    const music = await fetch('http://localhost/DropBeatBackend/Musician.php')
    const musicResponse = await music.json()
    musicResponse.forEach((e) => {
      console.log(e.publish)
      if (e.publish === '1') {
        const time = this.transformSecond(e.music_long)
        this.myMusic.push({
          img: e.music_photo,
          albumName: e.music_name,
          year: new Date(e.setup_date).getFullYear(),
          totalTime: time
        })
      } else {
        const time = this.transformSecond(e.music_long)
        this.draftMusic.push({
          img: e.music_photo,
          albumName: e.music_name,
          year: new Date(e.setup_date).getFullYear(),
          totalTime: time
        })
      }
    })
  },
  data () {
    return {
      editName: false,
      musicFile: '',
      duration: 0,
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
        // { img: 'https://picsum.photos/500', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/600', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/700', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/500', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/600', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/700', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' }
      ],
      draftMusic: [
        // { img: 'https://picsum.photos/800', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: require('../assets/bg-gray.svg'), albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/900', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' },
        // { img: 'https://picsum.photos/900', albumName: '在這座城市遺失了你', year: '2020', num: '12', totalTime: '00:05:57' }
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
    },
    uploadAlbumDialog () {
      return this.$store.getters.uploadAlbumState
    }
  },
  methods: {
    editDraft (editName) {
      console.log(editName)
      console.log('hi')
      this.editName = editName
      this.$store.dispatch('uploadMusicDialog', true)
    },
    transformSecond (second) {
      const minute = Math.floor(second / 60).toString().padStart(2, '0')
      const sec = Math.floor(second % 60).toString().padStart(2, '0')
      return minute + ':' + sec
    },
    uploadMusic (e) {
      this.musicFile = e.target.files[0]
      const objdectUrl = URL.createObjectURL(this.musicFile)
      const audio = new Audio(objdectUrl)
      audio.addEventListener('canplaythrough', () => {
        console.log(audio.duration)
        this.duration = Math.floor(audio.duration)
      })
      this.$store.dispatch('uploadMusicDialog', true)
    },
    uploadAlbum () {
      this.$store.dispatch('uploadAlbumDialog', true)
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
.selectImg{
    /* border:1px solid red; */
    position: absolute;
    top:0;
    width: 320px;
    height: 320px;
    border-radius: 50%;
}
.artistPhoto{
  /* border:1px solid red; */
  box-shadow:  0px 4px 5px rgba(0, 0, 0, 0.25);
}
.artistSelectImg :deep .outer{
  /* border:1px solid red; */
  background-color: transparent;
}
.artistSelectImg :deep .outer:hover{
  /* border:1px solid red; */
  background-color: #383838;
  opacity: 0.85;
}
.artistSelectImg :deep .circle{
  /* border:1px solid red; */
  width: 50px;
  height: 50px;
  opacity: 0.75;
}
.artistSelectImg :deep .outer:hover .circle{
   /* border:1px solid blue; */
  width: 105px;
  height: 105px;
  background-color: #ffffff;
}
.artistSelectImg :deep .cameraIcom{
  width: 30px;
  height: 30px;
}
.artistSelectImg :deep .outer:hover .cameraIcom{
  width: 50px;
  height: 50px;
  background-image: url("../assets/icon/camera_7b.svg");
  opacity: 1;
}
.artistSelectImg :deep .cameraText{
  display: none;
}
.artistSelectImg :deep .outer:hover .cameraText{
  display: block;
  color: #ffffff;
}
@media screen and (max-width: 640px){
  .artistSelectImg :deep .outer{
    width: 120px;
    height: 120px;
  }
  .artistSelectImg :deep .outer:hover{
    width: 120px;
    height: 120px;
  }
  .artistSelectImg :deep .circle{
    width: 40px;
    height: 40px;
    margin: 0;
  }
  .artistSelectImg :deep .cameraIcom{
    width: 20px;
    height: 20px;
  }
  .artistSelectImg :deep .outer:hover .cameraText{
    display: none;
  }
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
    /* margin: 0 -15px 0 0; */
}
.allFund{
  /* border:1px solid blue; */
  transform: scale(1.02);
  /* width:300px; */
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
  .rangeTop{
    /* border:1px solid red; */
    width: 100%;
    padding:60px 20px 0 20px;
  }
  .range{
    padding:10px 20px 0 20px;
  }
  .editIcon01{
    width: 16px;
    height: 16px;
    margin: 0 0 50px 0;
  }
  .editIcon02{
      width: 16px;
      height: 16px;
  }
  .approveIcon{
      width: 18px;
      height: 18px;
      background-image: url("../assets/icon/approve.svg");
      margin: 0 5px 2px 0;
  }
  h4{
    font-size: 28px;
  }
  .t3{
      margin: 30px 0 10px 0;
  }
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
    font-size: 26px;
    margin: -5px 0 0 0;
  }
  .btn{
      width: 80px;
      font-size: 12px;
      padding: 2px 5px;
      /* margin-top: 35px; */
      /* margin-left: 10px; */
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
