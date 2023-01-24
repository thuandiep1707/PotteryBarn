;(function () {
  var menu = document.getElementsByClassName('menu')[0]

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      menu.classList.add('menu-scrolling')
    } else {
      menu.classList.remove('menu-scrolling')
    }
  })
})()
