console.log('running app.js...')

var editable = document.querySelector('.editable')

editable.addEventListener('mouseleave', function() {
  var selection = document.getSelection()
  console.log('TCL: selection', selection)
  document.execCommand('bold', false, null)
  document.execCommand('italic', false, null)
})
