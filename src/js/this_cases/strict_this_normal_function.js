'use strict'

// In normal function 'this' is caller

const person = {
  name: 'Tom',
  helloNormalFunction: function() {
    console.log('helloFromObject', this)
  }
}

person.helloNormalFunction()
