<template>
  <nav>
    <div>
      <router-link to="/"><img class="img_logo" src="../../assets/logo-08.svg"></router-link>
    </div>
    <div class="div_container">
      <ul>
        <li class="li_area_one">
          <img class="img_icon" src="../../assets/icon/nav/find.svg">
          <router-link to="/Find">發現</router-link>
        </li>
        <li class="li_area_one">
          <img class="img_icon" src="../../assets/icon/nav/charts.svg">
          <router-link to="/Charts">排行榜</router-link>
        </li>
        <li class="li_area_one">
          <img class="img_icon" src="../../assets/icon/nav/active.svg">
          <router-link to="/Active">演出活動</router-link>
        </li>
        <li class="li_area_one">
          <img class="img_icon" src="../../assets/icon/nav/funds.svg">
          <router-link to="/Funds">募資計畫</router-link>
        </li>
      </ul>
      <span class="span_underline"></span>
      <ul>
        <li class="li_area_two">
          <img class="img_icon" src="../../assets/icon/nav/checks.svg">
          <router-link to="/Member" class="r_list">會員專區</router-link>
          <span class="triangleOn" @click="mCollapseFun"></span>
          <ul class="ul_control" v-if="mCollapse">
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 喜歡歌曲</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 播放清單</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 最近播放</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 正在關注</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 想參加活動</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 已參加活動</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 已資助計劃</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="ul_musician">
        <li class="li_area_two">
          <img class="img_icon" src="../../assets/icon/nav/checks.svg">
          <router-link to="/Musician" class="r_list">音樂人工作室</router-link>
          <span class="triangleOn" @click="cCollapseFun"></span>
          <ul class="ul_control" v-if="cCollapse">
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 音樂管理</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 活動管理</router-link>
            </li>
            <li class="li_inside_title">
              <router-link to="/Member" class="r_li">- 募資管理</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      mCollapse: true,
      cCollapse: true
    }
  },
  methods: {
    mCollapseFun (e) {
      if (this.mCollapse === true) {
        e.target.setAttribute('class', 'triangleOff')
      } else {
        e.target.setAttribute('class', 'triangleOn')
      }
      this.mCollapse = !this.mCollapse
    },
    cCollapseFun (e) {
      if (this.cCollapse === true) {
        e.target.setAttribute('class', 'triangleOff')
      } else {
        e.target.setAttribute('class', 'triangleOn')
      }
      this.cCollapse = !this.cCollapse
    }
  }
}
</script>
<style scoped>
  nav{
    background-color: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding-top: 20px;
    width: 250px;
    left: 0;
  }
  /* logo */
  .img_logo{
    width: 130px;
  }
  .div_container{
    display: flex;
    flex-direction: column;
  }
  .img_icon{
    width: 20px;
    background-color: #ffffff;
  }
  /* li_area_one & li_area_two 分隔線 */
  .span_underline{
    border-bottom: 1px solid #ffffff;
  }
  /* ul, li a 調整區 */
  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .ul_control{
    margin-top: 5px;
  }
  .ul_musician{
    margin-top: 0;
  }
  li{
    margin: 5px;
  }
  .li_area_two{
    width: 100%;
    text-align: start;
  }
  .li_inside_title{
    margin-left: 30px;
  }
  a{
    margin-left: 5px;
    color: white;
  }
  /* 控制三角形點擊收合 */
  .triangleOn{
    margin-left: 5px;
    display: inline-block;
    border-left:7px solid transparent;
    border-right:7px solid transparent;
    border-top:0px solid #999999;
    border-bottom:7px solid #999999;
    vertical-align: middle;
    cursor: pointer;
  }
  .triangleOff{
    margin-left: 5px;
    display: inline-block;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #999999;
    border-bottom: 0px solid #999999;
    vertical-align: middle;
    cursor: pointer;
  }
  /* nav顏色調控 */
  .li_area_one:hover .img_icon{
    background-color: #31BDC5;
  }
  .li_area_one:hover a{
    color: #31BDC5;
  }
  .li_area_two:hover .img_icon{
    background-color: #31BDC5;
  }
  .li_area_two:hover .r_list{
    color: #31BDC5;
  }
  .li_inside_title:hover .r_li{
    color: #31BDC5;
  }
  /* 避免user反選 */
  ::selection {
    background: transparent;
  }
</style>
