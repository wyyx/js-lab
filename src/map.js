let john = { name: 'John' }

let array = [john]

john = null // overwrite the reference

console.log(john)
console.log(array[0])
