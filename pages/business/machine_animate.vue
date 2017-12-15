<template>
  <div class="business_machine_animate">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">自动化设备与物流方案动画</h6>
            <h6 class="s-line">Automation equipment and logistics solutions animation</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="video-wrap">
      <div class="close" @click="closewrap">X</div>
      <div class="video-player-box" v-video-player:myVideoPlayer="playerOptions" ref="player"></div>
    </div>
    <div class="showcase">
      <div class="casegroup">
        <div class="case" @click="showvideo('http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAgk4CWwAUouKrGzgI.mp4')">
          <div class="case-overlay">
            <div class="case-title">动画案例1</div>
          </div>
          <img src="~assets/ani1.jpg" alt="">
        </div>
        <div class="case" @click="showvideo('http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAggN3ZxQUo4MKoWQ.mp4')">
          <div class="case-overlay">
            <div class="case-title">动画案例2</div>
          </div>
          <img src="~assets/ani2.jpg" alt="">
        </div>
        <div class="case" @click="showvideo('http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAg7dHZxQUotJyNhQQ.mp4')">
          <div class="case-overlay">
            <div class="case-title">动画案例3</div>
          </div>
          <img src="~assets/ani3.jpg" alt="">
        </div>
        <div class="case" @click="showvideo('http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAgvOHZxQUo6Jy98QI.mp4')">
          <div class="case-overlay">
            <div class="case-title">动画案例4</div>
          </div>
          <img src="~assets/ani4.jpg" alt="">
        </div>
        <div class="case" @click="showvideo('http://10873657.s21d-10.faiusrd.com/58/ABUIABA6GAAgoujZxQUo6vXVyQQ.mp4')">
          <div class="case-overlay">
            <div class="case-title">动画案例5</div>
          </div>
          <img src="~assets/ani5.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="download-file">
      <a href="https://pan.baidu.com/s/1skA3wRV" target="_blank">下载动画业务合同</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
  methods: {
    showvideo (path) {
      var myVideo = document.getElementsByTagName('video')[0]
      let el = document.querySelector('.video-wrap')
      el.classList.add('open')
      myVideo.src = path
      myVideo.pause()
      myVideo.load()
      myVideo.play()
    },
    closewrap () {
      let el = document.querySelector('.video-wrap')
      el.classList.remove('open')
    }
  }
}
</script>


<style>
.business_machine_animate .download-file{
  padding: 20px 0;
  text-align: center;
}
.business_machine_animate .download-file a{
  padding: 20px 40px;
  display: inline-block;
  border: 4px solid #c7c7c7;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 1s;
}
.business_machine_animate .video-wrap{
  display: none;
}
.business_machine_animate .video-wrap.open{
  display: block;
}
.business_machine_animate .video-player-box{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 12;
  background-color: rgba(0,0,0,0.8);
}
.business_machine_animate .video-wrap .close{
  position: fixed;
  right: 40px;
  top: 60px;
  z-index: 9999;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
}
.business_machine_animate .video-player-box .video-js{
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.business_machine_animate .download-file a:hover{
  background-color: #000;
}
.business_machine_animate .showcase{
  padding: 0 20px;
}
.business_machine_animate .showcase .casegroup{
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.business_machine_animate .showcase .casegroup .case{
  flex: 0 0 50%;
  width: 50%;
  max-height: 320px;
  overflow: hidden;
  position: relative;
}
@media (max-width: 767px) {
    .business_machine_animate .showcase .casegroup .case{
        width: 100%;
        flex: 0 0 100%;
    }
  }
.business_machine_animate .showcase .casegroup .case-title{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  z-index: 4;
}
.business_machine_animate .showcase .casegroup .case-overlay::before{
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
.business_machine_animate .showcase .casegroup .case:hover .case-overlay::before{
  background: rgba(0,0,0,0.2);
}
.business_machine_animate .showcase .casegroup .case:hover img{
  transform: scale(1.3);
}
.business_machine_animate .showcase .casegroup .case img{
  width: 100%;
  display: block;
  transition: all 5s;
  position: relative;
  z-index: 2;
}
</style>

