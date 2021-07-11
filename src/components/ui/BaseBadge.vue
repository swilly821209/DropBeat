<template>
    <div class="border-white border-2 px-2 inline-block rounded-full">
      <img :src="image" class="rounded-full  border-gray-dark w-5 h-5">
    </div>
</template>

<script>
export default {
//   props: ['image'],
  data () {
    return {
      image: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg'
    }
  }
}
</script>
