<template>
  <activity-item
    v-for="item in activeDatas"
    :key="item"
    :img="item.imgSrc"
    :title="item.title"
    :time="item.time"
    :city="item.city"
    :location="item.location"
    :singerImg="item.singerImg"
    :singer="item.singer"
    >
  </activity-item>
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
          time: '20:20',
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
