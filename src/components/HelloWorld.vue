<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <div class="logo">
          <img src="../assets/logo-icon.png" />
        </div>
        <div class="call-me">
          <img src="../assets/home.gif" />
          <img src="../assets/email.gif" />
        </div>
      </div>
      <div class="content-title">
        请选择对应项目？
      </div>
      <div @click="onCardClick($event)" class="content-card">
        <div class="card">
          <img data-url="http://www.baidu.com" src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img data-url="data-url-yy" src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img data-url="data-url-yy" src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img src="../assets/logo-icon.png">
        </div>
        <div class="card">
          <img src="../assets/logo-icon.png">
        </div>
      </div>
      <div class="footer">
        <div class="text fts20">第一行中文第一行中文第一行中文第一行中文第一行中文第一行中文</div>
        <div class="text fts15">second row text second row text second row text second row text </div>
        <div class="text mgt fts20">第三行中文第三行中文第三行中文第三行中文第三行中文</div>
        <div class="text fts15">fourth row text fourth row text fourth row text</div>
        <div class="text mgt fts20">备案号备案号备案号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onCardClick: function (e) {
      const {
        toElement: {
          dataset: {
            url
          }
        }
      } = e;
      window.location.href = url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mgt {
    margin-top: 8px;
  }
  .fts20 {
    font-size: 16px;
  }
  .fts15 {
    font-size: 10px;
  }
  .container {
    background-color: #101010;
    display: flex;
    justify-content: center;
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
  }
  .content {
    width: 766px;
    height: 100%;
    background-image: url('../assets/content-bg.jpg');
  }
  .header {
    width: 100%;
    height: 111px;
    /* background-color: aliceblue; */
    display: flex;
    justify-content: space-between;
  }
  .content-title {
    width: 100%;
    height: 70px;
    /* background-color: antiquewhite; */
    font-size: 25px;
    color: #ffffff;
    text-align: left;
    line-height: 70px;
  }
  .content-card {
    width: 100%;
    height: 265px;
    /* background-color: cornflowerblue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  .content-card .card {
    width: 185px;
    height: 128px;
    background-color: red;
  }
  .content-card .card img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .footer {
    width: 100%;
    height: 171px;
    /* background-color: fuchsia; */
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .footer .text {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bolder;
    color: #e0dede;
  }
  .call-me {
    display: flex;
    width: 60px;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
  }
  .logo {
    width: 184px;
  }
  .logo img {
    /* width: 200px; */
    width: 100%;
    display: block;
  }
  .call-me img {
    display: block;
    /* width: 200px; */
    width: 15px;
    height: 15px;
  }
</style>
