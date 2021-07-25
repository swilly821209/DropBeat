<template>
  <div class="fundBlock">
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
    <div v-if="edit" class="flex mt-4">
      <div class="flex flex-col items-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
          <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#b5b5b5"/>
        </svg>
        <span class="text-gray-dark">編輯</span>
      </div>
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="15.556" height="20" viewBox="0 0 15.556 20">
          <path id="Icon_material-delete" data-name="Icon material-delete" d="M8.611,22.278A2.229,2.229,0,0,0,10.833,24.5h8.889a2.229,2.229,0,0,0,2.222-2.222V8.944H8.611ZM23.056,5.611H19.167L18.056,4.5H12.5L11.389,5.611H7.5V7.833H23.056Z" transform="translate(-7.5 -4.5)" fill="#b5b5b5"/>
        </svg>
        <span class="text-gray-dark">刪除</span>
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
</style>
