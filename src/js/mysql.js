// import $ from 'jquery'
// import moment from 'moment'
const mysql = require('mysql')
const faker = require('faker')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'ig_user',
	password: 'password',
	database: 'join_us'
})

var data = []
for (var i = 0; i < 500; i++) {
	data.push([ faker.internet.email(), faker.date.past() ])
}

var q = 'INSERT INTO users (email, created_at) VALUES ?'

connection.query(q, [ data ], function(err, result) {
	console.log(err)
	console.log(result)
})

connection.end()
