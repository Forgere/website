<template>
  <div class="join">
    <div class="video-container">
      <div class="overlay">
        <div class="c-c">
          <div class="title subtitle">
            <h6 class="f-line">加入我们</h6>
            <h6 class="s-line">JOIN US</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="careers">
      <div class="career-card">
        <div class="card-title">职位① WMS软件工程师</div>
        <div class="card-desc">
          岗位要求：
          <ul>
            <li>可以独立开发WMS软件</li>
            <li>有ERP对接实施经验，有SAP/Oracal/K3 经验</li>
          </ul>
          招聘人数：2位
        </div>
      </div>
      <div class="career-card">
        <div class="card-title">职位② WCS控制软件工程师</div>
        <div class="card-desc">
          岗位要求：
          <ul>
            <li>可以独立开发WCS软件</li>
            <li>有多年项目应用经验</li>
          </ul>
          招聘人数：2位
        </div>
      </div>
      <div class="career-card">
        <div class="card-title">职位③ 项目工程师</div>
        <div class="card-desc">
          岗位要求：
          <ul>
            <li>精通CAD绘图</li>
            <li>精通Maya/3D-max建模/solid works</li>
            <li>基本动画编制</li>
            <li>沟通能力强</li>
            <li>学习能力强并有强烈的学习欲望</li>
          </ul>
          招聘人数：2位
        </div>
      </div>
      <div class="career-card">
        <div class="card-title">职位④ 网络工程师</div>
        <div class="card-desc">
          岗位要求：
          <ul>
            <li>互联网软件开发和网络设计维护</li>
            <li>精通VB， PHP/Java， Linux操作系统</li>
            <li>精通数据库搭建，数据分析，市场调研，方案整理等</li>
          </ul>
          招聘人数：1位
        </div>
      </div>     
      <div class="career-card">
        <div class="card-title">职位⑤ 三维动画设计师</div>
        <div class="card-desc">
          岗位要求：
          <ul>
            <li>大专及以上学历，对动画软件或数据库，网页软件有强烈的爱好和钻研，学习精神。</li>
            <li>熟练使用动画和模型制作软件，SolidWorks、Maya，动画后期制作软件Ae，以及绘图软件CAD。</li>
            <li>熟悉PHP、Java、JavaScript等，可以进行公司网站的维护，开发管理工作。</li>
            <li>创造性思维，较强的学习和理解能力，具备分析问题、解决问题以及推动项目实施的能力。</li>
            <li>公司有专业的工程师可以进行进行培训和指导。</li>
          </ul>　
          招聘人数：1位
        </div>
      </div>  
      <div class="career-card">
        <div class="card-title">福利待遇</div>
        <div class="card-desc">
          <ul>
            <li>起始月基本工资</li>
            <li>年底双薪</li>
            <li>社会保险</li>
            <li>午餐补贴</li>
            <li>带薪假期</li>
            <li>电脑补贴 （对自带电脑者）</li>
            <li>电话补贴（按项目沟通需要）</li>
            <li>年度工资涨幅（视工作表现而定）</li>
          </ul>　
        </div>
      </div>     
    </div>
    <div class="contact">
      <nuxt-link to="/contact">联系我们</nuxt-link>
    </div>
  </div>
</template>
<style>
.join .career-card{
  padding: 30px;
}
.join .career-card:nth-child(even){
  background-color: #c7c7c7;
}
.join ul li {
  list-style-type: decimal;
}
.join .card-desc{
  font-size: 15px;
  margin-top: 15px;
  margin-left: 10px;
}
@media (max-width: 767px) {
    .join .card-desc{
      font-size: 12px;
    }
  }
.join .contact{
  padding-bottom: 30px;
}
.join .contact a{
    display: block;
    color: #000;
    width: 200px;
    margin: 0 auto;
    border: 4px solid #c7c7c7;
    font-weight: 900;
    margin-top: 20px;
    text-align: center;
}
</style>

