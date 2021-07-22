<template>
  <base-dialog :show="deleteMusicDialog">
    <delete-music></delete-music>
  </base-dialog>
  <div class="range">
    <h1>Musician</h1>
    <div>This is a Musician page...</div>
  </div>
</template>

<script>
import DeleteMusic from '../components/DeleteMusic.vue'
export default {
  components: {
    DeleteMusic
  },
  computed: {
    deleteMusicDialog () {
      return this.$store.getters.deleteMusicState
    }
  }
}
</script>
