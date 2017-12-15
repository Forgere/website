<template>
  <div class="project_detail">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">案例详情</h6>
            <h6 class="s-line">details of solutions </h6>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-area">
      <div class="video-wrap">
        <div class="video-player-box" v-video-player:myVideoPlayer="playerOptions" ref="player"></div>
      </div>
      <div class="word-wrap">
        该自动库项目包含生产车间自动码垛，自动入库，自动存储，地台板自动清洁回收供应，洁净仓库的进出库缓冲等行业首创的定制自动化方案应用。立库总计设计货位大于11000个，库区面积约为2600平方米，容积率大于5.0。项目配置3台中型双伸位堆垛机、提升机及自动堆叠机等设备。项目设备总投资约为1600万元。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  asyncData ({ params }) {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAgk4CWwAUouKrGzgI.mp4'
        }],
        poster: '/index.15e6b17.jpg',
        width: '100%'
      }
    }
  },
  mounted () {
    console.log(this.playerOptions)
  }
}
</script>
<style>
.project_detail .video-js{
  width: 100%;
}
.detail-area .word-wrap{
  padding: 40px 20px;
}
</style>


