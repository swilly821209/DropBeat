<template>
  <base-card v-if="mode === 'newsong'">
    <div class="px-5 py-5">
      <div class="flex items-center w-44 justify-between mb-5">
        <img  class=" w-12 h-12 rounded-full" src="https://akstatic.streetvoice.com/song_covers/sh/u0/shu05229970/DrhqfgHAtMEazGmBVFLydC.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div>
          <p>發布了一首作品</p>
          <p>3小時前</p>
        </div>
      </div>
      <music-item
        :imgSrc="img"
        :musicName="name"
        :singer="singer"
        :totalSecond="musicTime"
        :playCounter="playCounter"
        :likeCounter="likeCounter">
      </music-item>
    </div>
  </base-card>
  <base-card v-else>
    <div class="px-5 py-5">
      <div class="flex items-center  justify-between mb-5">
        <div class="flex items-center w-44 justify-between">
          <img  class=" w-12 h-12 rounded-full" src="https://akstatic.streetvoice.com/song_covers/sh/u0/shu05229970/DrhqfgHAtMEazGmBVFLydC.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
          <div>
            <p>發布了一首作品</p>
            <p>3小時前</p>
          </div>
        </div>
        <div>
          <button class="px-2 bg-orange border border-orange text-white rounded-xl hover:bg-white hover:text-orange ">想參加</button>
        </div>
      </div>
      <div  class="flex items-center ml-14 space-x-5 py-5">
        <base-date :time="date" week="true"></base-date>
        <activity-item
          :img="img"
          :title="title"
          :time="date"
          :city="city"
          :location="location"
          >
        </activity-item>
      </div>
    </div>
  </base-card>
</template>

<script>
import MusicItem from './MusicItem.vue'
import ActivityItem from './ActivityItem.vue'
export default {
  props: ['mode', 'img', 'name', 'singer', 'musicTime', 'playCounter', 'likeCounter', 'date', 'title', 'city', 'location'],
  components: {
    MusicItem,
    ActivityItem
  },
  data () {
    return {
    }
  }
}
</script>
