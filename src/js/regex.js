let re = /(\d+)\.(\d+)\.(\d+)\.(\d+)/
let s1 = '192.168.10.128'
let s2 = 'zserzertjhwst'

console.log('re.test(s1)', re.test(s1))
console.log('re.exec(s1)', re.exec(s1))
console.log('s1.match(re)', s1.match(re))
