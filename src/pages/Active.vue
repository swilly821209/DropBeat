<template>
  <div class="range">
    <div class="pre">
      <div class="preicon"></div>
      <div class="title00">
        <p>演出活動</p>
        <div class="under"></div>
      </div>
    </div>
    <div class="block01">
      <div class="banner"></div>
      <div class="title01">
        <h2>2021 新歌巡迴《 穿過夜晚 Go Through the Night 》</h2>
        <button>想參加</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.range {
  border: 1px solid red;
  padding: 75px 40px 150px 40px;
}
.pre {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 170px;
  height: 52px;
  margin: 0 0 20px 5px;
  cursor: pointer;
}
.preicon {
  width: 25px;
  height: 25px;
  background-image: url("../assets/icon/pre_7b7b7b.svg");
  background-repeat: no-repeat;
  margin: 0 10px 0 0;
}
.title00 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title00 > p {
  font-size: 32px;
  font-weight: 500;
  color: #383838;
}
.pre:hover .preicon {
  background-image: url("../assets/icon/pre_383838.svg");
}
.pre:hover .under {
  background-color: #383838;
  width: 130px;
  height: 1.5px;
}
/*-------------------------------------------*/
.block01{
  display: flex;
  flex-shrink: 0;
}
.banner {
  width: 600px;
  height: 315px;
  border-radius: 20px;
  background-image: url("../assets/images/active/ac001.jpg");
  margin: 0 20px 0 0;
}
.title01{
  border: 1px solid red;
  width: calc(100% - 600px - 20px);
}
h2{
  font-size: 22px;
}
</style>
