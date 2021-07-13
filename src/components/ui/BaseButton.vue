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
      type: String,
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
    @apply border-b-4 border-gray-default py-1 px-2 transition-all
  }
</style>
