<template>
  <div class="project">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">项目案例</h6>
            <h6 class="s-line">PROJECTS</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="showcase">
      <div class="casegroup">
        <nuxt-link class="case" to="/project/1">
          <div class="case-overlay">
            <div class="case-title">某日化企业平库AGV方案</div>
          </div>
          <img src="~assets/case1.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/2">
          <div class="case-overlay">
            <div class="case-title">国内某糖厂AGV供料解决方案</div>
          </div>
          <img src="~assets/case2.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/3">
          <div class="case-overlay">
            <div class="case-title">国内某上市化纤公司</div>
          </div>
          <img src="~assets/case3.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/4">
          <div class="case-overlay">
            <div class="case-title">某世界500强汽车配件公司</div>
          </div>
          <img src="~assets/case4.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/5">
          <div class="case-overlay">
            <div class="case-title">印刷机自动上下纸案例</div>
          </div>
          <img src="~assets/case5.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/6">
          <div class="case-overlay">
            <div class="case-title">国内某知名化妆品公司</div>
          </div>
          <img src="~assets/case6.jpg" alt="">
        </nuxt-link>
        <nuxt-link class="case" to="/project/7">
          <div class="case-overlay">
            <div class="case-title">国内某知名包装公司普通４层货架库解决方案</div>
          </div>
          <img src="~assets/case7.jpg" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style>
.project .showcase .casegroup{
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.project .showcase .casegroup .case{
  flex: 0 0 50%;
  width: 50%;
  max-height: 320px;
  overflow: hidden;
  position: relative;
}
@media (max-width: 767px) {
    .project .showcase .casegroup .case{
        width: 100%;
        flex: 0 0 100%;
    }
  }
.project .showcase .casegroup .case-title{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  z-index: 4;
}
.project .showcase .casegroup .case-overlay::before{
  display: block;
  content: '';
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 3;
}
.project .showcase .casegroup .case:hover .case-overlay::before{
  background: rgba(0,0,0,0.2);
}
.project .showcase .casegroup .case:hover img{
  transform: scale(1.3);
}
.project .showcase .casegroup .case img{
  width: 100%;
  display: block;
  transition: all 5s;
  position: relative;
  z-index: 2;
}
</style>

