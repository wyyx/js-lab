function Person() {
  this.name = undefined
  this.age = undefined
  this.say = function() {
    console.log('Hello!')
  }
}

const p = new Person()

p.height = 180

console.log(p)
p.say()
