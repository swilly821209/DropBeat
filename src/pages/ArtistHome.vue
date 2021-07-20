<template>
    <div class="range">
        <h1>This is ArtistHome Pagge!</h1>
        <div class="flex justify-center">
          <router-link to="/Find"><span class="span_nav">←發現</span></router-link>
          <router-link to="ArtistHome">主頁</router-link>
          <router-link to="ArtistMusic">音樂</router-link>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 150px 40px;
  }
  div{
      background: skyblue;
  }
  a{
      background: whitesmoke;
      color: balck;
      margin: 30px;
  }
</style>
