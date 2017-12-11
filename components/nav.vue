<template>
    <div class="nav-container">
        <div class="logo">
            <img src="~/assets/logo.png" alt="">
        </div>
        <nav>
            <img src="~/assets/logo.png" alt="">
            <div class="nav-item">
                <nuxt-link to="/" :class="{'active': routepath === '/'}">
                    <icon name="home" scale="1.2"></icon>
                </nuxt-link> 
            </div>
            <div class="nav-item nav-subs">
                <nuxt-link to="/about" :class="{'active': routepath === '/about'}">关于我们</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/about/intro">公司介绍</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about/news">公司新闻</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="nav-item">
                <nuxt-link to="/project">项目案例</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/case">案例介绍</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/friend">合作伙伴</nuxt-link>
                    </li>
                </ul> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/design">项目规划设计</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/il">工厂智能化物流设计</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/simulation">方案设计模拟仿真</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/advisory">方案设计咨询</nuxt-link>
                    </li>
                </ul> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/about">方案动画制作</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/about">动画案例展示</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">动画业务咨询</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">动画业务流程</nuxt-link>
                    </li>
                </ul> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/about">仓库管理软件</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/about">WMS软件开发</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">WCS软件开发</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">MES软件开发</nuxt-link>
                    </li>
                </ul> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/about">招贤纳士</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/about">人才招聘</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">人才培训</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/about">员工案例分享</nuxt-link>
                    </li>
                </ul> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/about">联系我们</nuxt-link>
            </div>      
        </nav>
    </div>
</template>
<script>
export default {
  computed: {
    routepath: function () {
      return this.$route && this.$route.path.match(/(\/\w*)/)[1]
    }
  },
  mounted () {
    let lastScrollTop = 0
    window.addEventListener('scroll', function (e) {
      let pagey = window.pageYOffset
      let el = document.querySelectorAll('.nav-container')[0]
      if (pagey > 100) {
        // 下滑消失
        console.log(pagey > lastScrollTop, lastScrollTop)
        if (pagey > lastScrollTop) {
          el.classList.remove('show')
          el.classList.add('hide')
        } else {
          // 上化显示
          el.classList.remove('hide')
          el.classList.add('show')
        }
      } else {
        el.classList.remove('show')
        el.classList.remove('hide')
      }
      lastScrollTop = window.pageYOffset
    })
  }
}
</script>

<style>
    .nav-container{
        position: fixed;
        top: 0;
        left: 0;
        padding: 30px 0;
        width: 100%;
        transition: all .3s ease-in-out;
    }
    .logo img{
        float: left;
    }
    nav{
        position:absolute;
        left: 0;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: 100;
        transition: all .3s ease-in-out;
    }
    nav img{
      display: none;
    }
    .nav-container.hide{
      top: -120px;
      padding: 0;
    }
    .nav-container.show{
      top: 0;
      padding: 0;
    }
    .nav-container.show img{
      display: none;
    }
    .nav-container.show nav{
      background: rgba(0, 0, 7, 0.52);
    }
    .nav-container.show nav img{
      display: block;
      height: 50px;
      position: absolute;
      left: 50px;
    }
    nav div{
        display: inline-block;
    }
    nav .subs{
        display: none;
        position: absolute;
        left: 0;
        padding: 40px 0;
        top: 40px;
    }
    nav a{
        position: relative;
        display: block;
        padding: 10px 15px;
        color: #fff;
    }
    nav .sub-item a {
      padding: 2px 18px;
      font-size: 14px;
      background: rgba(0, 0, 7, 0.52);
      transition: all .3s ease-in-out;
    }
    nav a:hover{
      background: rgba(0, 0, 7, 0.52);
      border-bottom: 1px solid #c5a47e;
    }
    nav a.active{
      background: rgba(0, 0, 7, 0.52);
      border-bottom: 1px solid #c5a47e;
    }
    nav .nav-item:hover .subs{
        display: block;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .sub-item{
        margin: 0 10px;
    }
</style>



