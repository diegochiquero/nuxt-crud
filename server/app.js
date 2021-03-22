/*
 * Nuxt-crud project
 * 2021 Diego Chiquero Mena <chiquerodiego@gmail.com>
 */

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorhandler = require('errorhandler')
const mongoose = require('mongoose')
const config = require('./config')
const helmet = require('helmet')

const isProduction = process.env.NODE_ENV === 'production'
console.log(`environment is ${process.env.NODE_ENV}`)

//Create global app object
const app = express()

app.use(cors())

//Middleware
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
app.use(helmet())
app.use(require('method-override')())
app.use(express.static(__dirname + '/public'))

if (!isProduction) {
	app.use(errorhandler());
  }

if(!isProduction) mongoose.set('debug', true)

//Database connection
mongoose.connect(config.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

console.log(`database: ${config.db}`)

mongoose.set('useCreateIndex', true) //To avoid a deprecation warning

//Models
require('./models/User')

//Routes
app.use(require('./routes'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found - No encontrado')
	err.status = 404
	next(err)
})

// development error handler
// will print stacktrace
if (!isProduction) {
	app.use(function(err, req, res, next) {
	  console.log(err.stack);
  
	  res.status(err.status || 500);
  
	  res.json({'errors': {
		message: err.message,
		error: err
	  }});
	});
  }

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({
		'errors': {
			message: err.message,
			error: {}
		}
	})
})

//Finally let's start our server...
const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${server.address().port}`))

module.exports = app