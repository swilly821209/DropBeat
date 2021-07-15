<template>
  <the-header></the-header>
  <the-aside></the-aside>
  <div class="router">
    <router-view />
      <singleMusic></singleMusic>
  </div>

</template>

<script>
import TheAside from './components/layout/TheAside.vue'
import TheHeader from './components/layout/TheHeader.vue'
import singleMusic from './components/singleMusic'

export default {
  components: {
    TheAside,
    TheHeader,
    singleMusic
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Roboto", 'Noto Sans TC';
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
</style>
