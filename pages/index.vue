<template>
  <section class="container">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title">
            <h6 class="f-line">一体化自动物流</h6>
            <h6 class="s-line">解决方案提供商</h6>
            <p>
              <span>自动化物流 设计 规划 施工 验收 服务及咨询</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="c-c">
        <p>提供从仓库物流规划设计开始，到项目实施和验收工作的全方位解决方案。公司希望成为不同行业的自动化物流解决方案的拓疆者。
          <br/>深度理解不同行业的客户需求，提供更好的解决方案，研究和实施自动化物流解决方案。
        </p>
        <nuxt-link to="/contact">联系我们</nuxt-link>
      </div>
    </div>
    <div class="main-job">
      <div class="job-item"></div>
      <div class="job-item"></div>
      <div class="job-item"></div>
      <div class="job-item"></div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
}
.video-container{
  width: 100%;
  height: 100vh;
  background: url('~/assets/index.jpg') center;
  background-size: cover;
}
.overlay{
  content: "";
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .6;
  z-index: 1;
  background: -webkit-linear-gradient(218deg,#000,#c7c7c7,#000);
  background: -o-linear-gradient(218deg,#000,#c7c7c7,#000);
  background: linear-gradient(232deg,#000,#c7c7c7,#000);
  background-size: 600% 600%;
  -webkit-animation: wipe 15s ease infinite;
  -o-animation: wipe 15s ease infinite;
  animation: wipe 15s ease infinite;
}
.home-banner{
  width: 100%;
}
@-o-keyframes wipe{
  0%{
    background-position:0 97%
  }
  50%{
    background-position:100% 4%
  }100%{
    background-position:0 97%
  }
}
@keyframes wipe{
  0%{
    background-position:0 97%
  }
  50%{
    background-position:100% 4%
  }
  100%{
    background-position:0 97%
  }
}
.title{
  margin-top: 240px;
  color: white;
}
.title p {
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  margin-top: 10px;
}
h6{
  font-size: 72px;
  font-family: kings-caslon-display,Garamond,"Times New Roman",serif;
}
h6.f-line{
}
h6.s-line{
  text-align: right;
}
.block{
  padding: 60px 0;
  font-size: 14px;
  line-height: 2em;
  text-align: center;
}
.block a{
  display: block;
  color: #000;
  font-size: 14px;
  line-height: 36px;
  width: 200px;
  margin: 0 auto;
  border: 4px solid #c7c7c7;
  text-align: center;
  font-weight: 900;
}
.block a:hover{
  background: black;
  color: #fff;
  transition: all .3s ease-in-out;
}
.main-job{
  width: 100%;
  height: 100vh;
}
</style>
