<template>
  <button  :class="[mode, active]" >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    active: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="postcss" scoped>
  .outline{
    @apply border-gray-default text-gray-dark border-2 py-1 px-3 rounded-2xl hover:border-blue-light
  }
  .outline.active{
    @apply bg-blue-light text-white border-0
  }
  .under-line{
    @apply bg-origin-border bg-border-bottom-5px bg-no-repeat bg-bottom py-1 px-2 border-b-4 border-gray-default hover:text-blue-light
  }
  .under-line.active{
    @apply bg-gradient-to-r from-blue-light to-green-light border-transparent
  }
</style>
