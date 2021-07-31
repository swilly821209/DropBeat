<template>
  <base-card v-if="mode === 'newsong'">
    <div class="bg_padding flex flex-col justify-center">
      <div class="flex items-center w-44 justify-between mb-5">
        <img  class=" w-12 h-12 rounded-full" src="https://akstatic.streetvoice.com/song_covers/sh/u0/shu05229970/DrhqfgHAtMEazGmBVFLydC.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div>
          <p class="text-base text-black-backdrop">發布了一首作品</p>
          <p class="text-sm text-gray-dark">3小時前</p>
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
    <div class="bg_padding">
      <div class="flex items-center  justify-between mb-5">
        <div class="flex items-center w-44 justify-between">
          <img  class=" w-12 h-12 rounded-full" src="https://akstatic.streetvoice.com/song_covers/sh/u0/shu05229970/DrhqfgHAtMEazGmBVFLydC.jpg?x-oss-process=image/resize,m_fill,h_380,w_380,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
          <div>
            <p class="text-base">將演出一場活動</p>
            <p class="text-sm text-gray-dark">3小時前</p>
          </div>
        </div>
        <div>
          <button class="px-2 bg-orange border border-orange text-white rounded-xl hover:bg-white hover:text-orange ">想參加</button>
        </div>
      </div>
      <div class="sm:flex sm:items-center ml-9 sm:ml-14 sm:space-x-5 py-0 sm:py-5">
        <base-date :time="date" week="true" class="hidden sm:block"></base-date>
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
<style scoped>
.bg_padding{
  padding: 15px 20px 5px 20px;
}
@media screen and (max-width: 640px){
  .bg_padding{
    padding: 10px 8px 5px 8px;
  }
}
  @media (max-width: 640px) {
    :deep .music_item{
      /* border:1px solid red; */
      align-items: flex-end;
      padding: 0 0 10px 0;
    }
    :deep .activeImg{
      width:255px;
    }
    :deep .activeJoin{
      display: none;
    }
    :deep .activeContent{
      width:255px;
    }
  }

</style>
