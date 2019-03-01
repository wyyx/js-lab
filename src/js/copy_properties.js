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

for (var prop in dog) {
	if (dog.hasOwnProperty(prop)) {
		dog[prop] = cat[prop]
	}
}

console.log(dog)
console.log(dog.age)

console.log(cat)
console.log(cat.age)
