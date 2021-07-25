<template>
  <div>
    <div class="relative">
      <div v-if="edit" class="flex mt-4 absolute -top-16 left-0 cursor-pointer">
        <div class="flex flex-col items-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20.001 20">
            <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#b5b5b5"/>
          </svg>
          <span class="text-gray-dark text-sm">編輯</span>
        </div>
        <div class="flex flex-col items-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 15.556 20">
            <path id="Icon_material-delete" data-name="Icon material-delete" d="M8.611,22.278A2.229,2.229,0,0,0,10.833,24.5h8.889a2.229,2.229,0,0,0,2.222-2.222V8.944H8.611ZM23.056,5.611H19.167L18.056,4.5H12.5L11.389,5.611H7.5V7.833H23.056Z" transform="translate(-7.5 -4.5)" fill="#b5b5b5"/>
          </svg>
          <span class="text-gray-dark text-sm">刪除</span>
        </div>
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 29.445 19.63">
            <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M29.267,13.569A16.4,16.4,0,0,0,14.723,4.5,16.4,16.4,0,0,0,.178,13.569a1.654,1.654,0,0,0,0,1.492A16.4,16.4,0,0,0,14.723,24.13a16.4,16.4,0,0,0,14.545-9.069A1.654,1.654,0,0,0,29.267,13.569ZM14.723,21.676a7.361,7.361,0,1,1,7.361-7.361A7.361,7.361,0,0,1,14.723,21.676Zm0-12.269a4.872,4.872,0,0,0-1.294.194,2.446,2.446,0,0,1-3.42,3.42,4.9,4.9,0,1,0,4.714-3.614Z" transform="translate(0 -4.5)" fill="#b5b5b5"/>
          </svg>
          <span class="text-gray-dark text-sm">公開</span>
        </div>
      </div>
      <img :style="size" :src="img">
      <div class="mt-3 text-gray-dark">
        <h3 class="text-xl">{{ albumName }}</h3>
        <p>{{ year }}.{{ num }}首歌.{{ totalTime }}</p>
      </div>
      <div v-if="editDraft" class="flex mt-4 absolute bottom-0 right-0 cursor-pointer">
        <div class="flex flex-col items-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20.001 20">
            <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#b5b5b5"/>
          </svg>
          <span class="text-gray-dark text-sm">編輯</span>
        </div>
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 15.556 20">
            <path id="Icon_material-delete" data-name="Icon material-delete" d="M8.611,22.278A2.229,2.229,0,0,0,10.833,24.5h8.889a2.229,2.229,0,0,0,2.222-2.222V8.944H8.611ZM23.056,5.611H19.167L18.056,4.5H12.5L11.389,5.611H7.5V7.833H23.056Z" transform="translate(-7.5 -4.5)" fill="#b5b5b5"/>
          </svg>
          <span class="text-gray-dark text-sm">刪除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'albumName', 'year', 'num', 'totalTime', 'size', 'edit', 'editDraft']
}
</script>
