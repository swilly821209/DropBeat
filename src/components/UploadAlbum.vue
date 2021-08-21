<template>
  <div class="sm:flex sm:w-[800px] sm:min-w-[800px] sm:justify-between">
    <div>
    <p class="text-xs text-orange sm:mb-5">侵犯他人版權或隱私權，管理員有權利下架或刪除。</p>
    <div class="text-xs space-x-2">
      <button @click="release(1)" class="px-2 py-[2px] rounded-2xl bg-orange text-white hover:bg-blue-light">發佈</button>
      <button @click="release(0)" class="px-2 py-[2px] border-current text-gray-light hover:text-orange border rounded-2xl">暫存草稿</button>
      <button @click="close" class="px-2 py-[2px] border-current text-gray-light hover:text-orange border rounded-2xl">離開</button>
    </div>
    <div class="text-black-backdrop flex-col flex h-52 justify-evenly sm:h-64">
      <div>
        <label for="album-title">專輯標題: </label>
        <input v-model="albumName" type="text" id="album-title" class="border-b border-current focus:outline-none w-72">
      </div>
      <div>
        <label for="album-time">發行時間: </label>
        <input v-model="albumDate" type="date" id="album-time" class="border-b border-current focus:outline-none w-72">
      </div>
      <label for="file" class="block">
          <div class="text-gray-light flex" >
            <input type="file" id="file" class="hidden" @change="getFile">
            <p class="text-black-backdrop mr-1">專輯照片:</p>
            <div :style="`background-image: url(${albumImg})`" class="bg-center bg-no-repeat bg-cover w-20 h-20 sm:w-36 sm:h-36  bg-gray-light flex flex-col justify-center items-center">
              <div class="border-white border-[4px] rounded-full w-8 h-8 flex items-center justify-center">
                <svg class=" w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="20.003" height="20" viewBox="0 0 20.003 20"><path id="Icon_awesome-upload" data-name="Icon awesome-upload" d="M11.564,15H8.439a.935.935,0,0,1-.938-.938V7.5H4.075a.78.78,0,0,1-.551-1.332L9.466.225a.757.757,0,0,1,1.067,0l5.946,5.946A.78.78,0,0,1,15.928,7.5H12.5v6.563A.935.935,0,0,1,11.564,15ZM20,14.692v4.376a.935.935,0,0,1-.938.938H.938A.935.935,0,0,1,0,19.068V14.692a.935.935,0,0,1,.938-.938H6.251v.313a2.189,2.189,0,0,0,2.188,2.188h3.125a2.189,2.189,0,0,0,2.188-2.188v-.313h5.313A.935.935,0,0,1,20,14.692ZM15.158,18.13a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.158,18.13Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.659,18.13Z" transform="translate(0 -0.005)" fill="#FFF"/></svg>
              </div>
              <p class="text-white">選取檔案</p>
            </div>
          </div>
      </label>
    </div>
    </div>
    <div>
      <h3 class="mb-5">音樂清單: </h3>
      <swiper :slidesPerView="5" :direction="'vertical'" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="h-[340px] sm:w-96">
        <div class="right-0 absolute z-50 top-36 space-y-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" fill="currentColor"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" transform="translate(20 17) rotate(180)" fill="currentColor"/></svg>
        </div>
        <swiper-slide v-for="item in musicsData" :key="item" class=" w-[325px] flex items-center justify-between">
          <div class="flex items-center w-56 justify-between">
            <p class="text-xl">01</p>
            <img class=" w-14 h-14" :src="item.musicImg">
            <h4 class=" w-28">{{ item.musicName}}</h4>
          </div>
          <div>
            <svg @click="toggle(item.musicId)" :class="{'text-orange': chouse.includes(item.musicId)}" class="w-5 h-5 fill-current text-gray-light" id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs></defs><title>addmusic_d83</title><path id="Icon_awesome-plus" data-name="Icon awesome-plus" class="cls-1" d="M18.57,7.86H12.14V1.43A1.43,1.43,0,0,0,10.71,0H9.29A1.43,1.43,0,0,0,7.86,1.43h0V7.86H1.43A1.43,1.43,0,0,0,0,9.29v1.43a1.43,1.43,0,0,0,1.43,1.42H7.86v6.43A1.43,1.43,0,0,0,9.29,20h1.43a1.43,1.43,0,0,0,1.42-1.43h0V12.14h6.43A1.43,1.43,0,0,0,20,10.71V9.29a1.43,1.43,0,0,0-1.43-1.43Z"/></svg>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
SwiperCore.use([Navigation])
export default {
  props: ['edit'],
  emits: ['reset-album'],
  components: {
    Swiper,
    SwiperSlide
  },
  async created () {
    const memberId = this.$store.getters.memberIdState
    const form = new FormData()
    form.append('memberId', memberId)
    form.append('albumId', this.edit)
    if (this.edit) {
      const editAlbum = await fetch('http://localhost/DropbeatBackend/editAlbum.php', {
        method: 'POST',
        body: form
      })
      const responseEdit = await editAlbum.json()
      responseEdit.forEach(music => {
        this.allMusicId.push(music.music_id)
        if (music.album === music.album_id) {
          this.chouse.push(music.music_id)
        }
        this.musicsData.push(
          {
            musicId: music.music_id,
            musicImg: music.music_photo,
            musicName: music.music_name
          }
        )
      })
      this.albumName = responseEdit[0].album_name
      this.albumDate = responseEdit[0].setup_date
      this.albumImg = responseEdit[0].album_photo
      this.albumPhoto = responseEdit[0].album_photo
    } else {
      const musics = await fetch('http://localhost/DropbeatBackend/MemberMusic.php', {
        method: 'POST',
        body: form
      })
      const musicData = await musics.json()
      musicData.forEach(music => {
        this.allMusicId.push(music.musci_id)
        this.musicsData.push(
          {
            musicId: music.music_id,
            musicImg: music.music_photo,
            musicName: music.music_name
          }
        )
      })
    }
  },
  data () {
    return {
      allMusicId: [],
      chouse: [],
      musicsData: [],
      albumName: '',
      albumDate: '',
      albumPhoto: null,
      albumImg: ''
    }
  },
  methods: {
    getFile (e) {
      this.albumPhoto = e.target.files[0]
      const preview = URL.createObjectURL(this.albumPhoto)
      this.albumImg = preview
    },
    async  release (publish) {
      const form = new FormData()
      form.append('albumId', this.edit)
      form.append('allMusicId', this.allMusicId)
      form.append('musicain', this.$store.getters.memberIdState)
      form.append('publish', publish)
      form.append('musicId', this.chouse)
      form.append('albumName', this.albumName)
      form.append('albumDate', this.albumDate)
      form.append('albumImg', this.albumPhoto)
      if (this.edit) {
        await fetch('http://localhost/DropbeatBackend/SetEditAlbum.php', {
          method: 'POST',
          body: form
        })
        if (typeof this.albumPhoto !== 'string') {
          await fetch('http://localhost/DropbeatBackend/changeAlbumImg.php', {
            method: 'POST',
            body: form
          })
        }
      } else {
        await fetch('http://localhost/DropbeatBackend/SetAlbum.php', {
          method: 'POST',
          body: form
        })
      }
      await this.close()
    },
    close () {
      this.$store.dispatch('uploadAlbumDialog', false)
      this.$emit('reset-album')
    },
    toggle (item) {
      if (this.chouse.includes(item)) {
        this.chouse.splice(this.chouse.indexOf(item), 1)
      } else {
        this.chouse.push(item)
      }
      console.log(this.chouse)
    }
  }
}
</script>

<style scoped>
.swiper-button-disabled {
    @apply text-gray-default
  }
</style>
