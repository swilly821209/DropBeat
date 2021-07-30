<template>
  <div class="outer bg-gray-light hover:bg-gray-default hover:shadow-md flex justify-center items-center relative transition-all" :class="radius">
    <div class="flex flex-col items-center">
      <div class="circle flex justify-center items-center mb-3  rounded-full transition-all" :class="inputImg">
        <!-- <svg v-if="camera" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 63.551 57.196">
          <g id="Group_1" data-name="Group 1" transform="translate(-418 -225.804)">
            <path class="transition pathWhite" id="Path_22" data-name="Path 22" d="M33.536,23.368A10.168,10.168,0,1,1,23.368,13.2,10.168,10.168,0,0,1,33.536,23.368Z" transform="translate(426.407 234.211)" fill="#7b7b7b"/>
            <path class="transition pathWhite" id="Path_23" data-name="Path 23" d="M25.243,3,19.428,9.355H9.355A6.374,6.374,0,0,0,3,15.71V53.841A6.374,6.374,0,0,0,9.355,60.2H60.2a6.374,6.374,0,0,0,6.355-6.355V15.71A6.374,6.374,0,0,0,60.2,9.355H50.123L44.308,3Zm9.533,47.664A15.888,15.888,0,1,1,50.664,34.776,15.894,15.894,0,0,1,34.776,50.664Z" transform="translate(415 222.804)" fill="#7b7b7b"/>
          </g>
        </svg> -->
        <div v-if="camera" class="cameraIcom"></div>
        <svg v-else-if="album" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105">
          <g id="play" fill="none" stroke="#fff" stroke-width="3">
            <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
            <circle cx="52.5" cy="52.5" r="51" fill="none"/>
          </g>
          <path id="Path_24" class="pathGray" data-name="Path 24" d="M18,7.5V44.015" transform="translate(34 26.742)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
          <path id="Path_25" class="pathGray" data-name="Path 25" d="M7.5,18H44.015" transform="translate(26.242 34.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/>
        </svg>
        <svg v-else-if="file" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105">
            <g id="play" fill="none" stroke="#fff" stroke-width="3">
              <circle cx="52.5" cy="52.5" r="52.5" stroke="none"/>
              <circle cx="52.5" cy="52.5" r="51" fill="none"/>
            </g>
            <path id="Icon_awesome-upload" class="pathGray" data-name="Icon awesome-upload" d="M25.833,33.512H18.851a2.09,2.09,0,0,1-2.095-2.095V16.756H9.1a1.742,1.742,0,0,1-1.231-2.976L21.147.5a1.691,1.691,0,0,1,2.383,0L36.813,13.779a1.742,1.742,0,0,1-1.231,2.976H27.928V31.418A2.09,2.09,0,0,1,25.833,33.512Zm18.851-.7v9.775a2.09,2.09,0,0,1-2.095,2.095H2.095A2.09,2.09,0,0,1,0,42.589V32.814A2.09,2.09,0,0,1,2.095,30.72H13.964v.7a4.891,4.891,0,0,0,4.887,4.887h6.982a4.891,4.891,0,0,0,4.887-4.887v-.7H42.59A2.09,2.09,0,0,1,44.685,32.814Zm-10.822,7.68a1.745,1.745,0,1,0-1.745,1.745A1.751,1.751,0,0,0,33.863,40.494Zm5.586,0A1.745,1.745,0,1,0,37.7,42.24,1.751,1.751,0,0,0,39.448,40.494Z" transform="translate(29.658 29.655)" fill="#fff"/>
          </svg>
      </div>
      <p class="text-base text-white transition-all">{{text}}</p>
    </div>
    <input type="file" class="w-full h-full absolute rounded-3xl opacity-0 cursor-pointer">
  </div>
</template>

<script>
export default {
  props: ['radius', 'camera', 'file', 'album', 'text', 'inputImg'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .outer:hover p{
    color: #7b7b7b;
  }
  /* image */
  .outer:hover .incircle{
    background-color: #707070;
    border: 2px solid gray;
  }
  .outer:hover .pathWhite {
    fill: white;
  }
  /* album, file */
  .outer:hover .pathGray {
    fill: #B5B5B5;
    stroke: #B5B5B5;
  }
  .outer:hover g {
    stroke: #B5B5B5;
  }
  .circle{
    /* border:1px solid red; */
    width: 105px;
    height: 105px;
  }
  .cameraIcom{
    width: 50px;
    height: 50px;
    background-image: url("../assets/icon/camera_7b.svg");
  }
  .outer:hover .cameraIcom{
    background-image: url("../assets/icon/camera_fff.svg");
  }

</style>
