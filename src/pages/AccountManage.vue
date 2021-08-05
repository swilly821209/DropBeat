<template>
   <div class="flex items-center justify-center">
      <div class="container">
         <p class="title">帳號管理</p>
         <div class="camera_container relative">
            <div class="picture"><img src="https://akstatic.streetvoice.com/playlist_images/sv/mu/svmusic/EMGVjwN9cWkwgEFFKawTrh.jpeg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg"></div>
            <!-- <div class="camera_icon"><img src="https://raw.githubusercontent.com/swilly821209/DropBeat/howhow/src/assets/icon/camera_icon.png"></div> -->
            <select-img class="selectImg"
               :radius="'rounded-3xl'"
               :camera="true"
               :text="'選取圖片'"
               :inputImg="'border-2 border-white bg-white incircle'"
            ></select-img>
         </div>
         <form >
            <p>帳號：</p>
            <input type="text" v-model="account" disabled>
            <p>信箱：</p>
            <input type="email" v-model="mail" disabled>
            <p>音樂人名稱：</p>
            <input type="text" v-model="artistName" >
            <p>生日：</p>
            <div class="birthday">
               <input type="text" v-model="birthdayYear" disabled class="birthday_input_first" >
               <input type="text" v-model="birthdayMonth" disabled class="birthday_input">
               <input type="text" v-model="birthdayDay" disabled class="birthday_input">
            </div>
            <p>更改密碼：</p>
            <input type="password" placeholder="請輸入舊密碼">
            <input type="password" placeholder="請輸入新密碼">
            <input type="password" placeholder="確認新密碼">
         </form>
         <span class="changepassword">更改密碼</span>
      </div>
   </div>
</template>

<script>
import SelectImg from '../components/SelectImg.vue'
export default {
  components: {
    SelectImg
  },
//   async create () {
//      const response = await fetch()
//   },
  data () {
    return {
      account: 'accusefive',
      artistName: 'accusefive',
      mail: 'accusefive555@gmail.com',
      birthdayYear: '2017 年',
      birthdayMonth: '04 月',
      birthdayDay: '01 日',
      years: 101,
      months: 12,
      days: 31
    }
  }
}
</script>

<style scoped>
.container{
   /* border:1px solid red; */
    /* height: 1000px; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   width: 300px;
   margin: 90px 0 0 0;
}
p.title{
   font-size: 32px;
   font-weight: 500;
   color: #383838;
   margin-bottom: 20px;
   /* width: 300px; */
   /* text-align: center; */
}
.camera_container{
   /* border:1px solid red; */
   width: 150px;
   height: 150px;
   /* width: 300px; */
   margin: 5px 0 20px 0;
}
.picture img{
   position: absolute;
   width: 150px;
   height: 150px;
   border-radius: 50%;
   cursor: pointer;
}
.selectImg{
   position: absolute;
   width: 150px;
   height: 150px;
   border-radius: 50%;
}
:deep .outer{
   /* border:1px solid red; */
   background-color: transparent;
}
:deep .outer:hover{
   /* border:1px solid red; */
   background-color: #383838;
   opacity: 0.85;
}
:deep .circle{
   /* border:1px solid red; */
   width: 40px;
   height: 40px;
   opacity: 0.75;
}
:deep .outer:hover .circle{
   /* border:1px solid blue; */
   width: 80px;
   height: 80px;
   background-color: #ffffff;
}
:deep .cameraIcom{
   width: 20px;
   height: 20px;
}
:deep .outer:hover .cameraIcom{
   width: 40px;
   height: 40px;
   background-image: url("../assets/icon/camera_7b.svg");
   opacity: 1;
}
:deep .cameraText{
   display: none;
}
:deep .outer:hover .cameraText{
   display: block;
   color: #ffffff;
   font-size: 14px;
   margin-top: -10px;
}
/* .camera_icon{
   width: 300px;
   text-align: center;
}
.camera_icon img{
   width: 40px;
   opacity: .5;
   position: relative;
   top: -95px;
   cursor: pointer;
} */
form{
   display: flex;
   flex-direction: column;
}
input{
   border: 2px solid #ededed;
   border-radius: 5px;
   width: 260px;
   outline: none;
   font-size: 16px;
   color:#7b7b7b;
   padding: 8px;
   margin: 0 0 15px 0;
}
input:focus {
   border: 2px solid #ff9d83;
}
input::-webkit-input-placeholder {
   color: #b5b5b5;
}
p{
   font-weight: 500;
   color: #7b7b7b;
   font-size: 16px;
   margin: 0 0 0 3px;
   align-items: flex-start;
}
.birthday{
   width: 260px;
   display: flex;
   justify-content: space-between;
}
.birthday_input_first{
   width: 95px;
}
.birthday_input{
   width: 75px;
}
.changepassword {
   color: white;
   background-color: #ff9d83;
   border-radius: 5px;
   padding: 10px;
   margin: 30px 0 5px 0;
   width: 260px;
   text-align: center;
   cursor: pointer;
}
.changepassword:hover{
   background-color: #31bdc5;
}
</style>
