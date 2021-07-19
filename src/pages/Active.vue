<template>
<div v-for="item in activeDatas"
    :key="item"
    class="flex items-center justify-evenly px-[40px]">
  <base-date :time="item.time" week="true"></base-date>
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
  <div class="flex space-x-2 self-end mb-6">
    <span class="border border-gray-light hover:border-gray-light rounded-3xl flex justify-center items-center text-gray-light hover:text-white hover:bg-gray-light w-6 h-6">
      <svg height='17px' width='17px'  fill="currentColor" xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="share" data-container-transform="translate(0 1)" viewBox="0 0 16 16" x="0px" y="0px"><path d="M11 0v3h-1c-8 0-10 4.1-10 10 1-4 4-5 8-5h3v3l5-5.313-5-5.688z" transform="translate(0 1)"></path></svg>
    </span>
    <button class="border hover:border-orange text-sm text-white rounded-2xl px-2 bg-orange hover:bg-white hover:text-orange">
      想參加
    </button>
  </div>
</div>
</template>

<script>
import ActivityItem from '../components/ActivityItem.vue'
export default {
  components: {
    ActivityItem
  },
  data () {
    return {
      activeDatas: [
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '《 穿過夜晚 Go Through the Night 》2021 新歌巡迴',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '《 穿過夜晚 Go Through the Night 》2021 新歌巡迴',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '《 穿過夜晚 Go Through the Night 》2021 新歌巡迴',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        }
      ]
    }
  }
}
</script>
