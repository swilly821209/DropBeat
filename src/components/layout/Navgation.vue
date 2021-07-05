<template>
  <nav>
    <div>
      <a href="#"><img class="img_logo" :src="logo"></a>
    </div>
    <div class="div_container">
      <ul>
        <li class="li_area_one" v-for="(item, index) in navList" :key="index" >
          <img class="img_icon" :src="item.icon">
          <a :href="item.link">{{item.name}}</a>
        </li>
      </ul>
      <span class="span_underline"></span>
      <ul>
        <li class="li_area_two">
          <img class="img_icon" :src="navMember.icon">
          <a class="a_list" :href="navMember.link">{{navMember.name}}</a>
          <span class="triangleOn" @click="mCollapseFun"></span>
          <ul class="ul_control" v-if="mCollapse" >
            <li class="li_inside_title" v-for="(item, index) in navMemberList" :key="index">
              <a :href="item.link">{{item.name}}</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="ul_musician">
        <li class="li_area_two">
          <img class="img_icon" :src="navMusician.icon">
          <a class="a_list" :href="navMusician.link">{{navMusician.name}}</a>
          <span class="triangleOn" @click="cCollapseFun" ></span>
          <ul class="ul_control" v-if="cCollapse" >
            <li class="li_inside_title" v-for="(item, index) in navMusicianList" :key="index">
              <a :href="item.link">{{item.name}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      logo: require('../assets/logo-08.svg'),
      navList:[
        {name:'發現',icon:require('../assets/icon/nav/loupe.svg'),link:'https://tw.yahoo.com/'},
        {name:'排行榜',icon:require('../assets/icon/nav/level.svg'),link:'https://tw.yahoo.com/'},
        {name:'演出活動',icon:require('../assets/icon/nav/music.svg'),link:'https://tw.yahoo.com/'},
        {name:'募資計畫',icon:require('../assets/icon/nav/funds.svg'),link:'https://tw.yahoo.com/'},
      ],
      navMember:{name:'會員專區',icon:require('../assets/icon/nav/check.svg'),link:'https://tw.yahoo.com/'},
      navMemberList:[
        {name:'- 喜歡歌曲',link:'https://tw.yahoo.com/'},
        {name:'- 播放清單',link:'https://tw.yahoo.com/'},
        {name:'- 最近播放',link:'https://tw.yahoo.com/'},
        {name:'- 正在關注',link:'https://tw.yahoo.com/'},
        {name:'- 想參加活動',link:'https://tw.yahoo.com/'},
        {name:'- 已參加活動',link:'https://tw.yahoo.com/'},
        {name:'- 已資助計劃',link:'https://tw.yahoo.com/'},
      ],
      navMusician:{name:'音樂人工作室',icon:require('../assets/icon/nav/check.svg'),link:'https://tw.yahoo.com/'},
      navMusicianList:[
        {name:'- 音樂管理',link:'https://tw.yahoo.com/'},
        {name:'- 活動管理',link:'https://tw.yahoo.com/'},
        {name:'- 募資管理',link:'https://tw.yahoo.com/'},
      ],
      /* 控制三角形點擊收合 */
      mCollapse:true,
      cCollapse:true,
    }
  },
  methods: {
    mCollapseFun(e){
      if(this.mCollapse === true){
        e.target.setAttribute('class','triangleOff')
      } else{
        e.target.setAttribute('class','triangleOn')
      }
      this.mCollapse = !this.mCollapse
      
    },
    cCollapseFun(e){
      if(this.cCollapse === true){
        e.target.setAttribute('class','triangleOff')
      } else{
        e.target.setAttribute('class','triangleOn')
      }
      this.cCollapse = !this.cCollapse;
    }
  },
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
    padding-bottom: 100px;
    width: 250px;
    left: 0;
  }
  /* logo */
  .img_logo{
    width: 120px;
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
    border-left:7px solid transparent;
    border-right:7px solid transparent;
    border-top:7px solid #999999;
    border-bottom:0px solid #999999; 
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
  .li_area_two:hover .a_list{
    color: #31BDC5;
  }
  .li_inside_title:hover a{
    color: #31BDC5;
  }
  /* 避免user反選 */
  ::selection {
    background: transparent;
  }
</style>

