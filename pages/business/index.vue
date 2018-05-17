<template>
  <div class="business">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">主营业务</h6>
            <h6 class="s-line">MAIN BUSINESS</h6>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/business/case" class="mian-block mian-block-1">
      <div class="center">
        <div class="title">项目规划与设计</div>
        <ul class="subs">
          <li class="sub-title">工厂智能化物流设计</li>
         
          <li class="sub-title">方案设计模拟仿真</li>
          <li class="sub-title">方案设计咨询</li>
        </ul>
      </div>
    </nuxt-link>   
    <nuxt-link to="/business/machine_animate" class="mian-block mian-block-2">
      <div class="center">
        <div class="title">自动化设备与物流方案动画制作</div>
        <ul class="subs">
          <li class="sub-title">动画案例展示</li>
          <li class="sub-title">动画业务咨询</li>
          <li class="sub-title">动画业务流程</li>
        </ul>
      </div>
    </nuxt-link>
    <nuxt-link to="/business/software" class="mian-block mian-block-3">
      <div class="center">
        <div class="title">仓库管理软件</div>
        <ul class="subs">
          <li class="sub-title">WMS软件开发</li>
          <li class="sub-title">WCS软件开发</li>
          <li class="sub-title">MES软件开发</li>
          <li class="sub-title">生活应用类软件</li>
        </ul>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.mian-block{
  height: 100vh;
  position: relative;
  display: block;
}
.mian-block .title{
  margin-top: 0;
  position: relative;
  z-index: 2;
  font-size: 40px;
  margin-bottom: 1em;
}
@media (max-width: 767px) {
    .mian-block .title{
        font-size: 20px;
    }
  }
.mian-block .center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  width: 100%;
}
.mian-block .center ul{
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
}
@media (max-width: 767px) {
    .mian-block .center ul{
        flex-direction: column;
        padding: 0 40px;
    }
    .mian-block .center ul li{
      margin-bottom: 20px;
    }
  }
.mian-block .center ul li{
  padding: 12px 20px;
  box-shadow: 0 0 0 4px #b58b5b;
  color: #fff;
  background-color: rgba(0,0,0,0.5);
}
.mian-block::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}
.mian-block-1{
  background: url('../../assets/class1.jpg') center no-repeat;
  background-size: cover;
}
.mian-block-2{
  background: url('~assets/class2.jpg') center no-repeat;
  background-size: cover;
}
.mian-block-3{
  background: url('~assets/class3.jpg') center no-repeat;
  background-size: cover;
}
</style>

