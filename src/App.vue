<template>
  <navgation/>
  <the-aside></the-aside>
  <div class="router">
    <router-view />
  </div>
</template>

<script>
import TheAside from './components/layout/TheAside.vue'
import Navgation from './components/layout/Navgation.vue'
export default {
  components: {
    TheAside,
    Navgation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
.router{
  margin-left: 300px;
}
</style>
