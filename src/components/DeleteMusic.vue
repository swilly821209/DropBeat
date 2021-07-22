<template>
  <div class="mx-40 my-16">
    <div class="text-center space-y-3">
      <h3 class="text-black-backdrop text-2xl">刪除此音樂後不可復原，您確定刪除？</h3>
      <p class="text-sm text-black-backdrop">若您有問題請聯繫管理員</p>
    </div>
    <div class="mt-8 flex justify-center space-x-3">
      <button @click="cancelDelete" class="w-16 h-9 rounded-2xl bg-orange text-white hover:bg-blue-light">取消</button>
      <button class=" w-16 h-9 rounded-2xl border border-gray-light text-gray-dark hover:border-orange hover:text-orange">刪除</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancelDelete () {
      this.$store.dispatch('deleteMusicDialog', false)
    }
  }
}
</script>
