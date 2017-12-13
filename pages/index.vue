<template>
  <section class="container home">
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
        <p>
          COOPERATION AND WIN-WIN, TO PROVIDE VALUE-ADDED INTEGRATED AUTOMATIC LOGISTICS SOLUTION!
          <br/>
          合作共赢，提供增值的一体化自动物流解决方案！
          <br/>
          以解决客户最头疼的问题为切入口，提供能够满足客户需求的一体化的解决方案
        </p>
        <nuxt-link to="/contact">联系我们</nuxt-link>
      </div>
    </div>
    <div class="main-job">
      <div class="job-item">
        <img src="~/assets/class1.jpg" alt="">
        <div class="card-img-overlay card-block">
          <h4 class="card-title">
            仓储物流服务
          </h4>
        </div>
      </div>
      <div class="job-item">
        <img src="~/assets/class2.jpg" alt="">
        <div class="card-img-overlay card-block">
          <h4 class="card-title">
            智能化工厂，物流规划设计咨询
          </h4>
        </div>
      </div>
      <div class="job-item">
        <img src="~/assets/class3.jpg" alt="">
        <div class="card-img-overlay card-block">
          <h4 class="card-title">
            自动化物流项目工程
          </h4>
        </div>
      </div>
      <div class="job-item">
        <img src="~/assets/class4.jpg" alt="">
        <div class="card-img-overlay card-block">
          <h4 class="card-title">
            智能化软件（WMS， WCS，MES）开发
          </h4>
        </div>
      </div>
    </div>
    <div class="advantage">
      <h4>我们的优势</h4>
      <p>以解决客户最头疼的问题为切入口，提供能够满足客户需求的一体化的解决方案。以详细的投资回报分析来打消客户的顾虑，提高客户投资的意愿。以稳定可靠的系统实施和验收， 充足的人员培训和考核实现项目顺利的交接给客户使用。 提高客户的满意度。以及时周到的售后服务， 确保客户高枕无忧。</p>
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
  padding: 0 12px;
}
.title p {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
h6{
  font-size: 72px;
  font-family: kings-caslon-display,Garamond,"Times New Roman",serif;
}
@media (max-width: 980px) {
  h6 {
    font-size: 58px;
  }
}
@media (max-width: 525px) {
  h6 {
    font-size: 40px;
  }
  .title p {
    font-size: 12px;
  }
}
h6.f-line{
}
h6.s-line{
  text-align: right;
}
.block{
  padding: 60px 12px;
  line-height: 2em;
  text-align: center;
}
.block a{
  display: block;
  color: #000;
  width: 200px;
  margin: 0 auto;
  border: 4px solid #c7c7c7;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
}
.block a:hover{
  background: black;
  color: #fff;
  transition: all .3s ease-in-out;
}
.main-job{
  width: 100%;
  overflow: hidden;
}
.main-job div.job-item{
  transition: all 5s;
  width: 50%;
  float: left;
  overflow: hidden;
  position: relative;
}
@media (max-width: 767px) {
    .main-job div.job-item{
        width: 100%;
    }
  }
.main-job div.job-item img{
  width: 100%;
  height: auto;
  min-height: 25vh;
  display: block;
  transition: all 5s;
}
.main-job div.job-item:hover img{
  transform: scale(1.1);
}
.main-job div.job-item:hover .card-img-overlay::before{
  display: none;
}
.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.2);
  color: #fff;
  z-index: 100;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 18.75vw;
  overflow: hidden;
}
.card-img-overlay::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: rgba(0,0,0,.5);
}
.card-img-overlay h4{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.advantage{
  padding: 80px 40px;
}
.advantage p{
  font-size: 15px;
  line-height: 1.8em;
  margin-top: 1em;
}
@media (max-width: 767px) {
    .advantage p{
        font-size: 12px;
    }
    .advantage{
      padding: 30px 12px;
    }
  }
</style>
