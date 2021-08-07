<template>
  <footer >
    <p >本網站為緯育TibaMe前端設計工程師班第67期第一組學員專題成果作品，本平台僅供學習、展示之用</p>
    <p >參考資源 : Freepik | StreetVoice | flyingV | Spotify | LINE MUSIC</p>
    <p >若有侵權疑慮，您可以私訊<a href="https://www.facebook.com/webindex/">TibaMe-前端設計工程師養成班</a>，後續會由專人協助處理</p>
  </footer>
</template>

<style scoped>
  footer{
    /* border:1px solid red; */
    font-size: 12px;
    color: #7B7B7B;
    margin: 100px 40px 100px 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 40px;
    border-top: 1px solid #B5B5B5;
  }
  a{
    text-decoration: underline;
  }
  @media screen and (max-width: 830px) {
    footer{
      padding: 40px 20px;
    }
  }
  @media screen and (max-width: 640px) {
    footer{
      margin: 100px 20px 100px 20px;
      padding: 30px 0px;
      font-size: 10px;
    }
  }
</style>
