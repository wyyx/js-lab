console.log('running app.js...')

var richedit = document.getElementById('richedit')
richedit.contentEditable = true

var res = document.execCommand('italic', true, null)
console.log('TCL: res', res)
