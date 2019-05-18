var h3 = document.querySelector('h3')
var body = document.querySelector('body')
h3.addEventListener('click', event => {
  console.log('TCL: h3 -> event', event)
})

body.addEventListener('click', event => {
  console.log('TCL:  body -> event', event)
})

body.addEventListener(
  'click',
  event => {
    console.log('TCL:  capture body -> event', event)
  },
  {
    capture: true
  }
)
