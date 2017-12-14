<template>
    <div class="nav-container">
        <div class="logo">
            <img src="~/assets/logo.png" alt="">
        </div>
        <div class="nav-wrap">
          <icon name="bars" scale="2" class="menu"></icon>
        </div>
        <nav>
            <img src="~/assets/logo.png" alt="">
            <div class="nav-item">
                <nuxt-link to="/" :class="{'active': routepath === '/'}">
                    <icon name="home" scale="1.2"></icon>
                </nuxt-link> 
            </div>
            <div class="nav-item">
                <nuxt-link to="/about" :class="{'active': routepath === '/about'}">关于我们</nuxt-link>
            </div>
            <div class="nav-item">
                <nuxt-link to="/business" :class="{'active': routepath === '/business'}">
                  主营业务
                </nuxt-link>
                <ul class="subs">
                    <li class="sub-item">
                        <nuxt-link to="/business/case">项目规划与设计</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/friend">自动化设备与物流方案动画制作</nuxt-link>
                    </li>
                    <li class="sub-item">
                        <nuxt-link to="/friend">仓库管理软件</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="nav-item">
                <nuxt-link to="/news" :class="{'active': routepath === '/news'}">
                  公司新闻
                </nuxt-link>
            </div>
            <div class="nav-item nav-subs">
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
    let el = document.querySelectorAll('.nav-container')[0]
    window.addEventListener('scroll', function (e) {
      let pagey = window.pageYOffset
      if (pagey > 100) {
        // 下滑消失
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
    let menu = document.querySelectorAll('.nav-wrap .menu')[0]
    menu.addEventListener('click', function (e) {
      if (el.classList.contains('open')) {
        el.classList.remove('open')
      } else {
        el.classList.add('open')
      }
    }, false)
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
        width: 200px;
        margin-left: 50px;
    }
    .nav-wrap .menu{
      display: none;
      float: right;
      margin-right: 40px;
      color: white;
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
    @media (max-width: 1280px) {
        .nav-wrap .menu{
          display: block;
          position: absolute;
          right: 0;
          top: 20px;
        }
        nav{
          display: none;
          position: relative;
          left: 0;
        }
        .nav-container{
          padding: 15px 0;
        }
        .nav-container.open{
          background: rgba(0, 0, 0, 0.8);
        }
        .nav-container.open nav{
          display: block;
        }
        .nav-container.open nav img{
          display: none!important;
          position: static;
        }
        .nav-container.show img{
          position: static!important;
        }
        .logo img{
            float: none;
            width: 120px;
            margin-left: 20px;
        }
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
    @media (max-width: 1280px) {
        .nav-container.show{
          background: rgba(0, 0, 0, 0.8);
          padding: 0;
        }
        .nav-container.show img{
          display: block;
          height: 38.6px;
          position: absolute;
          top: 0;
          margin-top: 15px;
          margin-bottom: 15px;
        }
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
    @media (max-width: 1280px) {
        nav div{
            display: block;
        }
      }    
    nav .subs{
        display: none;
        position: absolute;
        left: 0;
        padding: 40px 0;
        top: 40px;
        transition: all .3s ease-in-out;
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
    @media (max-width: 1280px) {
        nav .nav-item:hover .subs{
            display: none;
        }
      } 
    .sub-item{
        margin: 0 10px;
    }
</style>



