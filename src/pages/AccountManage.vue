
<template>
  <div class="flex items-center justify-center">
    <div class="container">
      <p class="title">帳號管理</p>
        <div class="camera_container">
          <div class="picture"><img src="https://akstatic.streetvoice.com/playlist_images/sv/mu/svmusic/EMGVjwN9cWkwgEFFKawTrh.jpeg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg"></div>
          <div class="camera_icon"><img src="https://raw.githubusercontent.com/swilly821209/DropBeat/howhow/src/assets/icon/camera_icon.png"></div>
        </div>
        <form action="">
           <p>帳號：</p>
           <input type="text" placeholder="username">
           <p>信箱：</p>
           <input type="email" placeholder="e-mail">
           <p>音樂人名稱：</p>
           <input type="text" placeholder="五月天">
           <p>生日</p>
           <div class="birthday">
             <input type="text" class="birthday_input_first">
             <input type="text" class="birthday_input">
             <input type="text" class="birthday_input">
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
export default {
  data () {
    return {
      years: 101,
      months: 12,
      days: 31
    }
  }
}
</script>

<style scoped>
.container{
    height: 1000px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #707070;
    flex-wrap: wrap;
    width: 300px;
}
p.title{
    font-size: 24px;
    margin-bottom: 20px;
    width: 300px;
    text-align: center;
}
.camera_container{
   width: 300px;
}
.picture{
   width: 300px;
   height: 150px;
   text-align: center;
}
.picture img{
   border-radius: 100px;
   width: 150px;
   height: 150px;
   cursor: pointer;
}
.camera_icon{
   width: 300px;
   text-align: center;
}
.camera_icon img{
   width: 40px;
   /* height: 50px; */
   opacity: .5;
   position: relative;
   top: -95px;
   cursor: pointer;
}
form{
   width: 250px;
}
input{
  border-radius: 5px;
  margin: 7px auto;
  padding: 8px;
  outline: none;
  border: 1px solid #b5b5b5;
  width: 250px;
}
input:focus {
  border: 1px solid #ff9d83;
  border-radius: 5px;
}
.birthday{
   display: flex;
   justify-content: space-between;
}
.birthday_input_first{
   width: 90px;
   margin: 10px 0 10px 0;
}
.birthday_input{
   width: 70px;
   margin: 10px 0 10px 0;
}
.changepassword {
  color: white;
  background-color: #ff9d83;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0 7px 0;
  width: 250px;
  text-align: center;
  cursor: pointer;
}
</style>
