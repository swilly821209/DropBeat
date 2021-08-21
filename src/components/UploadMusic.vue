<template>
  <div class="flex flex-col  justify-start  sm:flex-row sm:justify-between py-4 sm:py-0 px-0 mx-6 sm:m-5">
    <div class=" flex flex-col">
      <p class="mb-4 sm:mb-0 sm:mt-4 text-xs text-orange order-2 sm:order-4">侵犯他人版權或隱私權，管理員有權利下架或刪除。</p>
      <div class="mt-0 order-3 space-x-2 sm:order-1">
        <button @click="submit(1)" class=" h-[25px] w-[50px] text-white bg-orange border-2 border-orange rounded-2xl text-sm hover:bg-blue-light hover:border-blue-light">發佈</button>
        <button @click="submit(0)" class=" h-[25px] w-[80px] text-gray-dark border-2 border-gray-default rounded-2xl text-sm hover:text-orange hover:border-orange">暫存草稿</button>
        <button @click="close" class=" h-[25px] w-[50px] text-gray-dark border-2 border-gray-default rounded-2xl text-sm hover:text-orange hover:border-orange">離開</button>
      </div>
      <div class="space-y-2 order-4 sm:order-2 sm:space-y-4">
        <div class="text-base text-gray-dark mt-6">
          <label for="title" class="text-black-backdrop">音樂標題： </label>
          <input type="text" v-model="title" id="title" class="w-48 sm:w-52 text-base focus:outline-none border-b border-gray-light focus:border-orange focus:border-b-2">
        </div>
        <div class="text-base text-gray-dark">
          <label for="time" class=" text-black-backdrop">發行時間： </label>
          <input type="date" v-model="time" id="time" class=" w-48 sm:w-52 text-base focus:outline-none border-b border-gray-light focus:border-orange focus:border-b-2 cursor-pointer">
        </div>
        <div class="text-base text-gray-dark flex items-center">
          <label for="type"  class="mr-1 text-black-backdrop">音樂類型：</label>
          <div class="relative">
              <select name="type" v-model="type" id="type" class="w-48 sm:w-52 text-gray-dark appearance-none focus:outline-none border-b border-gray-light focus:border-orange focus:border-b-2 cursor-pointer">
                  <option selected="selected" disabled="disabled"  style='display: none' value=''></option>
                  <option v-for="item in musicType" :key="item" :value="item">{{ item }}</option>
              </select>
              <svg class="absolute top-[6px] right-[5px] pointer-events-none " xmlns="http://www.w3.org/2000/svg" width="15.294" height="10" viewBox="0 0 15.294 10"><g id="next" transform="translate(15.294 10) rotate(180)" fill="currentColor"><path d="M 13.27052879333496 9.499998092651367 L 2.023588418960571 9.499998092651367 C 1.829078435897827 9.499998092651367 1.661498427391052 9.395888328552246 1.575328469276428 9.221508026123047 C 1.489158511161804 9.047127723693848 1.508248448371887 8.850777626037598 1.626408457756042 8.696277618408203 L 7.249878406524658 1.34250807762146 C 7.345268249511719 1.21776807308197 7.490028381347656 1.146228075027466 7.647058486938477 1.146228075027466 C 7.804088592529297 1.146228075027466 7.948848724365234 1.21776807308197 8.044238090515137 1.34250807762146 L 13.66770839691162 8.696277618408203 C 13.78586864471436 8.850777626037598 13.80495834350586 9.047127723693848 13.71878814697266 9.221508026123047 C 13.63261890411377 9.395888328552246 13.46503829956055 9.499998092651367 13.27052879333496 9.499998092651367 Z" stroke="none"/><path d="M 7.647058486938477 1.646227836608887 L 2.023587226867676 8.99998664855957 C 2.023588180541992 8.999990463256836 2.023590087890625 8.999994277954102 2.023588180541992 8.999998092651367 L 13.2705249786377 8.999998092651367 C 13.2705249786377 8.999997138977051 13.27052593231201 8.999996185302734 13.27052879333496 8.999998092651367 L 7.649168491363525 1.646437644958496 C 7.648958683013916 1.646378517150879 7.648168563842773 1.646227836608887 7.647058486938477 1.646227836608887 M 7.647058486938477 0.6462278366088867 C 7.944176197052002 0.6462278366088867 8.241292953491211 0.7770776748657227 8.441418647766113 1.038778305053711 L 14.06488800048828 8.392547607421875 C 14.56807804107666 9.050558090209961 14.0988883972168 9.999998092651367 13.27052879333496 9.999998092651367 L 2.023588180541992 9.999998092651367 C 1.195228576660156 9.999998092651367 0.726038932800293 9.050558090209961 1.229228019714355 8.392547607421875 L 6.85269832611084 1.038778305053711 C 7.052823066711426 0.7770776748657227 7.349940776824951 0.6462278366088867 7.647058486938477 0.6462278366088867 Z" stroke="none" fill="#b5b5b5"/></g></svg>
          </div>
        </div>
        <label for="file" class="block">
          <div class=" text-gray-light flex" >
            <input type="file" id="file" @change="fileData" class="hidden">
            <p class="text-base text-black-backdrop mr-1">音樂照片：</p>
            <div :style="`background-image: url(${albumImg})`" class="bg-center bg-no-repeat bg-cover w-20 h-20 sm:w-36 sm:h-36 bg-gray-light flex flex-col justify-center items-center cursor-pointer mt-[5px]">
              <div class="border-white border-[3px] rounded-full w-10 h-10 flex items-center justify-center">
                <svg class=" w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="20.003" height="20" viewBox="0 0 20.003 20"><path id="Icon_awesome-upload" data-name="Icon awesome-upload" d="M11.564,15H8.439a.935.935,0,0,1-.938-.938V7.5H4.075a.78.78,0,0,1-.551-1.332L9.466.225a.757.757,0,0,1,1.067,0l5.946,5.946A.78.78,0,0,1,15.928,7.5H12.5v6.563A.935.935,0,0,1,11.564,15ZM20,14.692v4.376a.935.935,0,0,1-.938.938H.938A.935.935,0,0,1,0,19.068V14.692a.935.935,0,0,1,.938-.938H6.251v.313a2.189,2.189,0,0,0,2.188,2.188h3.125a2.189,2.189,0,0,0,2.188-2.188v-.313h5.313A.935.935,0,0,1,20,14.692ZM15.158,18.13a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.158,18.13Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.659,18.13Z" transform="translate(0 -0.005)" fill="#FFF"/></svg>
              </div>
              <p class="text-xs sm:text-sm text-white mt-[2px]">選取檔案</p>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="mt-5 sm:mt-0">
      <label for="lyric" class="align-top text-base text-black-backdrop">歌詞： </label>
      <textarea id="lyric" v-model="lyrics" class="border-2 border-gray-light rounded-lg text-gray-dark w-full sm:w-80 h-36 sm:h-80 p-2 focus:border-orange"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ['musicFile', 'duration', 'edit'],
  emits: ['edit-name'],
  async created () {
    const response = await fetch('http://localhost/DropbeatBackend/MusicType.php')
    const responseData = await response.json()
    responseData.forEach((e) => {
      this.musicType.push(e.type_name)
    })
    if (this.edit) {
      const form = new FormData()
      form.append('name', this.edit)
      const responseEdit = await fetch('http://localhost/DropbeatBackend/UploadMusicEdit.php', {
        method: 'POST',
        body: form
      })
      const responseEditData = await responseEdit.json()
      this.title = responseEditData.music_name
      this.type = responseData[responseEditData.music_type - 1].type_name
      this.time = responseEditData.setup_date
      this.lyrics = responseEditData.lyrics
      this.albumImg = responseEditData.music_photo
      this.file = responseEditData.music_photo
      this.musicId = responseEditData.music_id
    }
  },
  data () {
    return {
      musicId: 0,
      albumImg: '',
      title: '',
      type: '',
      time: '',
      lyrics: '',
      file: '',
      musicType: []
    }
  },
  methods: {
    close () {
      this.$store.dispatch('uploadMusicDialog', false)
      this.$emit('edit-name')
    },
    async submit (publish) {
      const memberId = this.$store.getters.memberIdState
      const form = new FormData()
      form.append('title', this.title)
      form.append('member', memberId)
      form.append('type', this.type)
      form.append('albumPhoto', this.file)
      form.append('musicFile', this.musicFile)
      form.append('duration', this.duration)
      form.append('publish', publish)
      form.append('setTime', this.time)
      form.append('lyrics', this.lyrics)
      form.append('musicId', this.musicId)
      if (this.edit) {
        await fetch('http://localhost/DropbeatBackend/EditUploadMusic.php', {
          method: 'POST',
          body: form
        })
        if (typeof this.file !== 'string') {
          await fetch('http://localhost/DropbeatBackend/EditChangeMusicImg.php', {
            method: 'POST',
            body: form
          })
        }
      } else {
        await fetch('http://localhost/DropbeatBackend/UploadMusic.php', {
          method: 'POST',
          body: form
        })
      }
      await this.close()
    },
    fileData (e) {
      this.file = e.target.files[0]
      const objdectUrl = URL.createObjectURL(this.file)
      this.albumImg = objdectUrl
    }
  }
}
</script>
