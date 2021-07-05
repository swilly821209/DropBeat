<template>
  <the-header></the-header>
  <the-aside></the-aside>
  <div class="router">
    <router-view />
  </div>
</template>

<script>
import TheAside from './components/layout/TheAside.vue'
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheAside,
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
html, body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
ul {
  padding-left: 0;
}
h1 {
  margin-top: 0;
}
.router{
  margin-left: 250px;
}
</style>
