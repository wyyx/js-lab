// In arrow function 'this' is the 'this' of outer scope

const person = {
  name: 'Tom',
  helloFromArrowFunction: () => {
    // Outer 'this' is undefined
    console.log('helloFromArrowFunction', this)
  }
}

person.helloFromArrowFunction()

const group = {
  groupName: 'A company',
  printMembers: function() {
    const helloFromArrowFunction = () => {
      // Outer 'this' is group ('this' of printMembers)
      console.log('helloFromArrowFunction', this)
    }

    helloFromArrowFunction()
  }
}

group.printMembers()
