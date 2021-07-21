<template>
  <teleport to='body'>
    <div v-if="show" class="fixed top-0 left-0 h-screen w-full z-10 bg-black-backdrop bg-opacity-80 flex justify-center">
      <dialog open v-if="show" class="rounded-xl z-50 shadow-md bg-white min-w-[25%] max-w-[80%] fixed top-[20vh] px-8">
        <slot></slot>
      </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>
