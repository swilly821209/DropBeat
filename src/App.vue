<template>
  <the-header ></the-header>
  <the-aside></the-aside>
  <music-player></music-player>
  <rwd-musicitem></rwd-musicitem>
  <div class="router">
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheAside from './components/layout/TheAside.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import RwdMusicitem from './components/RWDMusicItem.vue'

export default {
  components: {
    TheAside,
    TheHeader,
    TheFooter,
    MusicPlayer,
    RwdMusicitem
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", 'Noto Sans TC';
  scroll-behavior: smooth;
}
html, body {
  margin: 0;
}
ul {
  padding-left: 0;
}
h1 {
  margin-top: 0;
}
.router{
  margin-left: 230px;
  width: calc(100%-230px);
}
.range{
  /* padding: 60px 40px 150px 40px; */
  padding: 60px 40px 10px 40px;
}
@media screen and (max-width: 640px) {
  .router{
    padding-top: 20px;
    margin-left: 0;
    width: 100%;
  }
  .header{
    display: none;
  }
  .range{
    padding: 60px 15px 10px 15px
  }
}

</style>
