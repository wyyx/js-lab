function Dog() {
	this.name = 'dog'
}

function Cat() {
	this.name = 'cat'
}

let dog = new Dog()
let cat = new Cat()

Dog.prototype.age = 2
Cat.prototype.age = 4

// shallow copy exclude prototype property
Object.assign(dog, cat)

// for (var prop in dog) {
// 	if (dog.hasOwnProperty(prop)) {
// 		dog[prop] = cat[prop]
// 	}
// }

// // shallow copy include prototype property
// for (var prop in dog) {
// 	dog[prop] = cat[prop]
// }

console.log(dog)
console.log(dog.age)
console.log()
console.log(cat)
console.log(cat.age)
