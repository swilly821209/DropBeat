<template>
  <teleport to='body'>
    <div v-if="show" class=" fixed top-0 left-0 h-screen w-full z-[100] bg-[#292929] bg-opacity-100 flex justify-center sm:items-start items-center">
      <dialog open v-if="show" class="rounded-xl z-50 shadow-md bg-white min-w-[25%] sm:max-w-[80%] max-w-[90%]  fixed sm:top-[20vh] top-auto sm:px-8 px-1">
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
      required: true,
      default: false
    }
  }
}
</script>
