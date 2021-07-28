<template>
  <div class="fundBlock">
    <div v-if="edit" class="flex mb-2 ml-1">
      <div class="h5_icon flex flex-col items-center mr-3">
          <span class="editIcon"></span>
          <h5>編輯</h5>
      </div>
      <div class="h5_icon flex flex-col items-center">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
      </div>
    </div>
    <router-link to="/Funds/:id">
      <img :src="img">
    </router-link>
    <div class="content">
      <h4 class=" text-base text-black">{{ title }}</h4>
      <p class="text-sm text-gray-dark">{{singer}}</p>
      <div class="donateline">
        <div class="donateNow" :style="`width: ${progress}`"></div>
      </div>
      <div class="donate_content">
        <p>$ {{ money }} | {{ progress }}</p>
        <p>還剩 {{ date }} 天</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    img: {
      type: String,
      required: false,
      default: ''
    },
    singer: {
      type: String,
      required: false,
      default: ''
    },
    progress: {
      type: String,
      required: false,
      default: ''
    },
    money: {
      type: String,
      required: false,
      default: ''
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    edit: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
  .fundBlock{
    margin: 35px 35px 0 0;
    cursor: pointer;
  }
  .fundBlock:last-child{
    margin: 35px 0 0 0;
  }
  img{
    border-radius: 15px;
    /* box-shadow:  0px 4px 5px rgba(0, 0, 0, 0.25); */
  }
  h4{
    margin: 15px 5px 0 5px;
  }
  .content > p{
    margin: 0 5px 0 5px;
  }
  .donateline{
    height: 5px;
    background-color: #d6d6d6;
    border-radius: 5px;
    margin: 15px 5px 5px 5px;
  }
  .donateNow{
    height: 5px;
    background-color: #FF9D83 ;
    border-radius: 5px;
  }
  .donate_content{
    display: flex;
    justify-content: space-between;
    margin: 6px 5px 0 5px;
    font-size: 16px;
    color:#383838;
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
h5{
  color:#7b7b7b;
  font-size: 14px;
}
.h5_icon:hover h5{
  color:#FF9D83 ;
}

</style>
