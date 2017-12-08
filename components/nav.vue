<template>
    <div class="container">
        <div class="logo">
            <img src="~/assets/logo.png" alt="">
        </div>
        <nav>
            <div class="nav-item">
                <nuxt-link to="/"><icon name="home"></icon></nuxt-link> 
            </div>
            <div class="nav-item nav-subs">
                <nuxt-link to="/about">关于我们</nuxt-link>
                <ul class="subs">
                    <li class="sub-item">公司介绍</li>
                    <li class="sub-item">公司新闻</li>
                </ul>
            </div>
            <div class="nav-item">项目案例</div>
            <div class="nav-item">项目规划设计</div>
            <div class="nav-item">方案动画制作</div>
            <div class="nav-item">仓库管理软件</div>
            <div class="nav-item">招贤纳士</div>
            <div class="nav-item">联系我们</div>      
        </nav>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .logo img{
        float: left;
    }
    nav{
        position:absolute;
        left: 0;
        width: 100%;
        text-align: center;
    }
    nav div{
        display: inline-block;
    }
    nav .sub-item{
        display: none;
    }
</style>



