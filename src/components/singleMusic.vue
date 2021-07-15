<template>
  <div>
    <div class="block">
      <img src="../assets/images/singlemusic/s_001.jpg" />
      <h4>在這座城市遺失了你</h4>
      <div class="total">
        <div class="playtotal">
          <img src="../assets/icon/play_total.svg" />
          <p>{{playaccount}}</p>
        </div>
        <div
          class="liketotal"
          :class="{ clicklike: active }"
          @click="active = !active"
          :aria-pressed="active ? 'true' : 'false'"
        >
          <span class="likeicon"></span>
          <p>{{ account }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      account: 789,
      playaccount: 9101987
    }
  }
}
</script>

<style scoped>
.block {
  /* border:1px solid red; */
  border-radius: 20px;
  width: 200px;
  height: 200px;
  margin: 20px;
}
.block > img {
  border-radius: 20px;
}
h4 {
  color: #383838;
  padding: 6px 0 5px 5px;
  font-size: 16px;
}
.total {
  /* border:1px solid red; */
  height: 25px;
  display: flex;
}
.playtotal,
.liketotal {
  border: 2px solid #ededed;
  border-radius: 20px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
}
.playtotal {
  margin-right: 8px;
}
.playtotal > img {
  height: 15px;
  margin-right: 5px;
}
.likeicon {
  background-image: url("../assets/icon/like.svg");
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
p {
  color: #b5b5b5;
  font-size: 14px;
}
.liketotal:hover {
  border: 2px solid #b5b5b5;
  background-color: #b5b5b5;
  cursor: pointer;
}
.liketotal:hover p {
  color: #ffffff;
}
.liketotal:hover .likeicon {
  background-image: url("../assets/icon/like_white.svg");
}
.clicklike {
  border: 2px solid #ff9d83;
}
.clicklike > p {
  color: #ff9d83;
}
.clicklike .likeicon {
  background-image: url("../assets/icon/like_red.svg");
}
</style>
