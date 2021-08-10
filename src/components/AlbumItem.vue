<template>
  <div>
    <div class="relative">
      <div v-if="edit" class=" flex mt-4 absolute sm:-top-16 -top-14 sm:left-0 right-0">
        <div class="h5_icon flex flex-col items-center sm:mr-3 ml-0 cursor-pointer">
          <span class="editIcon"></span>
          <h5>編輯</h5>
        </div>
        <div class="h5_icon flex flex-col items-center sm:mr-3 ml-0 cursor-pointer">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
        </div>
        <!-- <div class="h5_icon flex flex-col items-center cursor-pointer">
          <span class="openIcon"></span>
          <h5>公開</h5>
        </div> -->
      </div>
      <img class="singleAlbum" :src="img">
      <div class="mt-2 text-gray-dark">
      <h3 class="sm:text-base text-sm text-black-backdrop">{{ albumName }}</h3>
      <p v-if="editAlbum" class="text-xs sm:text-sm text-gray-dark">{{ year }}・{{ num }}首歌・{{ totalTime }}</p>
      <p v-if="editMusic" class="text-xs sm:text-sm text-gray-dark">{{ year }}・{{ totalTime }}</p>
      </div>
      <!-- <div v-if="editDraft" class=" flex mt-4 absolute sm:top-[-60px] top-[-58px] right-0 sm:hidden"> -->
      <!-- <div v-if="editDraft" class=" flex mt-4 absolute top-[-60px] left-0 sm:hidden"> -->
        <!-- <div class="h5_icon flex flex-col items-center mr-3 cursor-pointer">
          <span class="editIcon"></span>
          <h5>編輯</h5>
        </div>
        <div class="h5_icon flex flex-col items-center cursor-pointer">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
        </div>
      </div> -->
      <!-- <div v-if="editDraft" class=" hidden mt-4 absolute bottom-0 right-0 sm:flex">
        <div class="h5_icon flex flex-col items-center mr-3 cursor-pointer">
      </div> -->
      <div v-if="editDraft" class="flex mt-4 absolute sm:top-[-60px] top-[-58px] bottom-0 right-0">
        <div @click="editDraftAlbum"  class="h5_icon flex flex-col items-center mr-3 cursor-pointer">
          <span class="editIcon"></span>
          <h5>編輯</h5>
        </div>
        <div class="h5_icon flex flex-col items-center cursor-pointer">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['img', 'albumName', 'year', 'num', 'totalTime', 'edit', 'editDraft', 'editAlbum', 'editMusic'],
  emits: ['edit-draft'],
  methods: {
    editDraftAlbum () {
      console.log('HO')
      this.$emit('edit-draft')
    }
  }
}
</script>
<style scoped>
.singleAlbum{
  /* border:1px solid red; */
  width: 256px;
  height: 256px;
  margin: 0 30px 0 0;
  /* display: flex; */
  flex-shrink: 0;
}
.singleAlbum:last-child{
  margin: 0 0 0 0;
}
.editIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/edit_b5.svg");
    cursor: pointer;
}
.h5_icon:hover .editIcon{
    background-image: url("../assets/icon/edit_d83.svg");
}
.deleteIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/delete_b5.svg");
    cursor: pointer;
}
.h5_icon:hover .deleteIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/delete_d83.svg");
    cursor: pointer;
}
.openIcon{
    width: 22px;
    height: 18px;
    background-image: url("../assets/icon/open_b5.svg");
    cursor: pointer;
}
.h5_icon:hover .openIcon{
    width: 22px;
    height: 18px;
    background-image: url("../assets/icon/open_d83.svg");
    cursor: pointer;
}
h5{
  color:#7b7b7b;
  font-size: 14px;
}
.h5_icon:hover h5{
  color:#FF9D83 ;
}

@media screen and (max-width: 1300px) {
  .singleAlbum{
    width: 220px;
    height: 220px;
  }
}
@media screen and (max-width: 640px) {
  .editIcon, .deleteIcon{
    margin: 0 0 2px 0;
  }
  h5{
    font-size: 12px;
  }
}

</style>
