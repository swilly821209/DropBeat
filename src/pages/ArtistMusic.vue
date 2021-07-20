<template>
    <div class="flex flex-col items-center w-full">
        <div class="py-24">
          <div>
            <h1>This is ArtistMusic Pagge </h1>
          </div>
          <div class="flex justify-center">
            <router-link to="ArtistHome">主頁</router-link>
            <router-link to="ArtistMusic">音樂</router-link>
          </div>
        </div>
        <div class="margin">
          <song-info class="info"></song-info>
          <song-lyrics class="lyrics"></song-lyrics>
        </div>
    </div>
     <message-board></message-board>
</template>

<script>
import SongInfo from '../components/SongInfo.vue'
import SongLyrics from '../components/SongLyrics.vue'
import MessageBoard from '../components/MessageBoard.vue'
export default {
  components: {
    SongInfo,
    SongLyrics,
    MessageBoard
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
    a{
      background: black;
      color: white;
      margin: 30px;
    }
    .margin{
      display: flex;
      justify-content: center;
      align-items: center ;
      padding: 10px;
      margin: 20px 0;
    }
    .info{
      width: 55%;
      border-right: 1px solid #B5B5B5;
      margin-right: 10px;
    }
    .lyrics{
      width: 45%;
    }
</style>
