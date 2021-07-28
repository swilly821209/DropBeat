<template>
  <div class="range">
    <base-title title="演出活動"></base-title>
    <the-carousel class="carousel sm:block hidden"></the-carousel>
    <div class="sm:space-x-3 space-x-1 ">
      <base-button
        class="my-8 selectBtn"
        v-for="item in musicRange"
        :key="item"
        :active="{active: selectMusicRange === item}"
        @click="selectMusicRange = item"
        mode="under-line">
        {{ item }}
      </base-button>
    </div>
    <div class="sm:space-x-3 space-x-1 ">
      <base-button
        class=" sm:last:inline-block last:hidden"
        v-for="item in musicType"
        :key="item"
        :active="{active: selectMusicType === item}"
        @click="selectMusicType = item"
        mode="outline">
        {{ item }}
      </base-button>
    </div>
    <div class="activeAll">
      <div v-for="item in activeDatas"
        :key="item"
        class="singleActive">
        <div class="date_N_info">
          <base-date :time="item.time" week="true" class="date sm:block hidden"></base-date>
          <activity-item
            :img="item.imgSrc"
            :title="item.title"
            :time="item.time"
            :city="item.city"
            :location="item.location"
            :singerImg="item.singerImg"
            :singer="item.singer"
            >
          </activity-item>
        </div>
        <!-- <div class="flex space-x-2 self-end ">
          <span class="border border-gray-light hover:border-gray-light rounded-3xl flex justify-center items-center text-gray-light hover:text-white hover:bg-gray-light w-6 h-6">
            <svg height='17px' width='17px'  fill="currentColor" xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="share" data-container-transform="translate(0 1)" viewBox="0 0 16 16" x="0px" y="0px"><path d="M11 0v3h-1c-8 0-10 4.1-10 10 1-4 4-5 8-5h3v3l5-5.313-5-5.688z" transform="translate(0 1)"></path></svg>
          </span>
          <button class="border hover:border-orange text-sm text-white rounded-2xl px-2 bg-orange hover:bg-white hover:text-orange">
            想參加
          </button>
        </div> -->
        <div class="sm:flex  self-end  hidden">
          <div class="share "></div>
          <button
            class="join"
            :class="{ clickjoin: active }"
            @click="active = !active"
            >{{active ? '參加' : '想參加'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityItem from '../components/ActivityItem.vue'
import TheCarousel from '../components/TheCarousel.vue'
import BaseButton from '../components/ui/BaseButton.vue'
export default {
  components: {
    ActivityItem,
    TheCarousel,
    BaseButton
  },
  data () {
    return {
      activeDatas: [
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        }
      ],
      musicRange: ['全部地區', '北部', '中部', '南部', '東部', '離島'],
      selectMusicRange: '全部地區',
      musicType: ['不限時間', '本週', '下週', '這個月', '下個月', '選擇日期'],
      selectMusicType: '不限時間',
      active: false
    }
  }
}
</script>

<style scoped>
.range{
  padding: 60px 40px 0 40px;
}
.carousel{
  margin: 25px 0 40px 0;
}
.selectBtn{
    margin: 20px 0 12px 0;
}
.activeAll{
    margin: 10px 0 0 0;
}
.singleActive{
    /* border:1px solid red; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid #EDEDED;
}
.singleActive:last-child{
    border-bottom: none;
}
.date_N_info{
  display:flex;
  align-items: center;
}
.date{
  margin: 0 20px 0 0;
}
.share{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-image: url("../assets/icon/share_b5.svg");
    background-repeat: no-repeat;
    cursor: pointer;
}
.share:hover{
  border: 2px solid #b5b5b5;
  background-color: #b5b5b5;
  background-image: url("../assets/icon/share_fff.svg");
}
.join{
  border: 2px solid #FF9D83;
  background-color: #FF9D83 ;
  border-radius: 20px;
  width: 65px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
  padding: 1px 0 0 0;
}
.join:hover{
  border:2px solid #FF9D83;
  background-color: transparent;
  color:#FF9D83;
}
.clickjoin{
  border:2px solid #FF9D83;
  background-color: transparent;
  color:#FF9D83;
  width: 50px;
}
.clickjoin:hover{
  border:2px solid #FF9D83;
  background-color: #FF9D83;
  color:#ffffff;
}
@media (max-width: 640px) {
  .range{
    padding: 60px 15px 0 15px;
  }
}
</style>
