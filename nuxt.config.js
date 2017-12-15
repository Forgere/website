module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '上海德辉物流',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: '智能物流，方案设计，方案提供商，布局，自动化', content: '智能物流，方案设计，方案提供商，布局，自动化 自动化物流项目规划设计，施工，验收 服务及咨询,WMS， WCS， MES  ， 物流节点监控软件等， ＷＭＳ云平台租赁,物流自动化系统动画制作,工业设备自动化制作,物流自动化招投标咨询服务' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/css/global.css' },
    'video.js/dist/video-js.css'
  ],
  plugins: [
    '~plugins/vue-awesome',
    { src: '~plugins/myvideo.js', ssr: false },
    { src: '~plugins/routetrigger.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader')
        vueLoader.options.transformToRequire = {
          video: 'poster'
        }
      }
    }
  }
}
