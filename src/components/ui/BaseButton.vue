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
