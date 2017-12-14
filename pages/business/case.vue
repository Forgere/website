<template>
  <div class="business_case">
    <div class="video-wrap">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">项目规划与设计</h6>
            <h6 class="s-line">Project planning and design</h6>
          </div>
        </div>
      </div>
      <div class="video">
        <video id="video-player" class="video-bg" poster="/_nuxt/img/index.15e6b17.jpg" loop="" autoplay="" preload="" muted="" width="100%">
          <source src="http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAgvJfhwAUooLjrvAM.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="case-block splitarea">
      <div class="splitarea-word">
        <div class="word-warp">
          <h3>工厂智能化物流设计</h3>
          <p>工厂智能化物流设计是围绕采购、生产、销售、物流等企业的核心环节，通过对信息流、物流、资金流的集中控制，从采购原辅材料开始到制成中间产品、最终产品，最后通过销售网络把产品送到消费者手中的过程。供应链系统是将供应商、制造商、分销商、零售商、最终用户连成一个整体的功能网链，快速反馈不同的信息，环环相扣，整体优化网络的执行过程，提升企业的效益。供应链系统强调对信息流、物流、资金流的全面掌控，协调产业内外的需求与信息，整合上下游合作伙伴的业务关系。</p>
          <p>工厂智能化物流设计方案是透过整合企业内部流程、外部流程、不同企业及其内部的管理系统，从整体上考虑满足市需求的总体成本，打破独自为政、不协调、不沟通、不计划、不同步的运作局面，实现采购、生产、销售的完美协同，以最小的成本满足市场需求，健全企业物流系统。</p>
          <p>我司根据企业的具体状况，对运作模式进行诊断，对物流设计相关业务流程进行重组，对物流管理过程进行优化，为企业实施最适合的供应链解决方案，提高企业的运营效率与效益。</p>
          <p>我司提供的智能化物流软件是针对供应链上各节点企业的合作、彼此协调的管理，将企业供应链上分散在各地、处于不同价值增值环节如供应商、技术研发中心、生产企业、第三方物流企业等具有特定优势的独立企业联合起来，以信息共享为基础，从系统的全局观出发，促使企业内部如销售部、市场部、生产部、采购部、财务部等与外部协调发展，提高企业智能化物流整体快速响应能力，实现企业智能化的效益最大化。</p>
        </div>
      </div>
      <div class="splitarea-img">
        <img src="~assets/paylist.png" alt="">
      </div>
    </div>
  </div>
</template>
<style>
.business_case .video-wrap{
  position: relative;
}
.business_case .video-wrap .overlay .title{
  margin-top: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.business_case .case-block.splitarea{
  height: auto;
}
.business_case .case-block.splitarea .splitarea-img{
  background: none;
}
.business_case .case-block.splitarea .splitarea-img img{
  display: block;
  width: 100%;
}
.business_case .case-block.splitarea .splitarea-word .word-warp{
  transform: none;
  top: 0;
  font-size: 15px;
}
@media (max-width: 767px) {
    .business_case .case-block.splitarea .splitarea-word .word-warp{
        font-size: 12px;
    }
  }
</style>
