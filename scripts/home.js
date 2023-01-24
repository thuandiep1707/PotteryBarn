;(function () {
  const body = document.querySelector('body')
  const introThumbnail = document.getElementsByClassName('intro-thumbnail')[0]

  window.addEventListener('scroll', () => {
    let { scrollY } = window

    const scaleValue = {
      50: 1,
      100: 1.25,
      150: 1.5,
      200: 1.75,
      250: 2,
      300: 2.5,
      350: 3,
      400: 3.5,
    }

    if (scrollY < 100) {
      scrollY = 100
    }

    introThumbnail.style.transform = 'scale(' + scaleValue[scrollY] + ')'
  })
})()
