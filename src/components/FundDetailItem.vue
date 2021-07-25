<template>
  <div>
    <img class='w-64 h-64 rounded-2xl mb-4' src="https://akstatic.streetvoice.com/song_covers/mx/xd/mxxdlife/4PGUJdqCHD7dSZ4nVkuC7B.jpg?x-oss-process=image/resize,m_fill,h_300,w_300,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
    <p>{{ money }}</p>
    <p>{{ fundDesc }}</p>
    <slot></slot>
    <div>
      <div>
         <p>贊助人數<span>{{ people }}</span>人</p>
         <p v-if="productNum">限量{{productNum}}</p>
      </div>
      <p>預計寄送<span>{{ time}}</span></p>
      <p>寄送地點<span>只寄台灣本島</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['money', 'fundDesc', 'people', 'time', 'productNum']
}
</script>
