<template>
    <base-dialog :show="toggleDialog">
      <report-message></report-message>
    </base-dialog> -->
  <div class="range">
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
  </div>
</template>

<script>
import SongInfo from '../components/SongInfo.vue'
import SongLyrics from '../components/SongLyrics.vue'
import MessageBoard from '../components/MessageBoard.vue'
// import ReportMessage from '../components/ReportMessage.vue'
export default {
  components: {
    SongInfo,
    SongLyrics,
    MessageBoard
    // ReportMessage
  },
  data () {
    return {
    }
  },
  computed: {
    toggleDialog () {
      return this.$store.getters.reportDialogState
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 150px 40px;
  }
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
