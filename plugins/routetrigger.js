export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    // do something to validate
    let el = document.querySelectorAll('.nav-container')[0]
    if (el && el.classList.contains('open')) {
      el.classList.remove('open')
    }
    return false
  })
}
