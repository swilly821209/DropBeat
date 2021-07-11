<template>
<div class="absolute right-10 top-5 space-x-5">
  <span class="text-gray-dark focus-within:text-orange relative">
    <input type="text" class="border-2 border-gray-dark focus:border-orange rounded-3xl search outline-none px-4 py-1 transition placeholder-gray-dark focus:placeholder-opacity-0" placeholder="找音樂?"/>
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-0" height="20px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  </span>
  <button class="border-2 border-gray-dark px-16 py-1 rounded-3xl  text-gray-dark hover:text-white hover:bg-orange hover:border-opacity-0  ">登入/註冊</button>
</div>
</template>

<style scoped>
  .search::placeholder{
    text-align: center;
  }
</style>
