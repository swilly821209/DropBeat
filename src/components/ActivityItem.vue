<template>
  <div class="item flex space-x-5" :col="col">
    <div v-if="edit" class="flex justify-end mt-4 ml-6 pr-8 w-[350px] h-[200] cursor-pointer" :style="imgWidth">
      <div class="h5_icon flex flex-col items-center mr-3 pb-2">
          <span class="editIcon"></span>
          <h5>編輯</h5>
      </div>
      <div class="h5_icon flex flex-col items-center">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
      </div>
    </div>
    <router-link to="/Active/:id">
      <img :src="img" class="w-[350px] h-[200] rounded-3xl cursor-pointer" :style="imgWidth">
    </router-link>
    <div class="activeContent flex flex-col justify-center">
      <h3 class=" text-lg text-black-backdrop hover:underline cursor-pointer">{{ title }}</h3>
      <div class="time_location text-sm text-gray-dark">{{ inputTime }}・{{ city }}・{{ location }}</div>
      <base-badge v-if="singer" class=" mt-2" :image="singerImg" :singer="singer"></base-badge>
      <div >
        <button v-if="check" class="checkBtn rounded-xl text-sm border-blue-light bg-blue-light text-white">審核ing...</button>
      </div>
    </div>
    <!-- <div class="flex mt-1 ml-6 pr-3 w-[350px] h-[200]" v-if="check">
      <button  class="self-start rounded-xl border-2 border-blue-light bg-blue-light text-white px-3">審核ing...</button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'time', 'city', 'location', 'singerImg', 'singer', 'col', 'edit', 'check', 'imgWidth'],
  data () {
    return {
      activityTime: new Date(this.time)
    }
  },
  computed: {
    inputTime () {
      const hour = this.activityTime.getHours().toString().padStart(2, '0')
      const minutes = this.activityTime.getMinutes().toString().padStart(2, '0')
      return hour + ':' + minutes
    }
  }
}
</script>
<style scoped>
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
h5{
  color:#7b7b7b;
  font-size: 14px;
}
.h5_icon:hover h5{
  color:#FF9D83 ;
}

  .time_location{
    margin: 0 0 3px 0;
  }
  .activeContent{
        /* border:1px solid red; */
        padding: 10px 0;
  }
  .checkBtn{
    height: 25px;
    padding: 1px 12px 0 12px;
    margin: 3px 0 0 0;
  }
</style>
