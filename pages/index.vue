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
</style>
