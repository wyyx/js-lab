class MyCache {
	// cache name and size
	constructor(name, size) {
		this.name = name
		this.size = size
		this.storage = JSON.parse(localStorage.getItem(name))
		if (!this.storage) {
			this.storage = []
		}
	}

	add(value) {
		this.storage.unshift(value)
		if (this.storage.length > this.size) {
			this.storage.pop()
		}

		localStorage.setItem(this.name, JSON.stringify(this.storage))
	}

	get() {
		return this.storage
	}
}

let phc = new MyCache('playHistory', 10)
phc.add({ name: 'wyyx', age: 27 })
phc.add({ name: 'sdvfsd', age: 22 })
phc.add({ name: 'cccc', age: 34 })
phc.add({ name: 'vvvvvvvv', age: 67 })
phc.add({ name: 'aaaaaaaa', age: 112 })
phc.add({ name: 'hh', age: 56 })
phc.add({ name: 'nnn', age: 6 })

console.log('playHistory', phc.get())
