const mongoose = require('mongoose')
      router = require('express').Router()
      User = mongoose.model('User')

// Read
router.get('/user', (req, res, next) => {
	User.find().then((user) => {
		if (!user) res.sendStatus(401)
		res.status(200).json({
			user
		}) //1
	}).catch(next)
})

//Update
router.put('/user/:userId', (req, res, next) => {
	User.findById(req.params.userId).then((user) => {
		if (!user) res.sendStatus(401)
		if (typeof req.body.user.username !== 'undefined') user.username = req.body.user.username
		if (typeof req.body.user.email !== 'undefined') user.email = req.body.user.email

		user.save().then(() => {
			res.status(200).json({
				user
			})
		})
	}).catch(next)
})

//Login
router.post('/users/login', (req, res, next) => {
	//TODO: Login and all require needed
})


//Create
router.post('/users', (req, res, next) => {
	let user = new User()

	user.username = req.body.user.username
	user.email = req.body.user.email

	user.save().then(() => {
		res.status(201).json({
			user
		})
	}).catch(next)
})

//Delete
router.delete('/user/:userId', (req, res, next) => {
	User.findById(req.params.userId).then((user) => {
		if (!user) res.sendStatus(401)
		
		user.remove().then(() => {
			res.status(200).json({
				user
			})
		})
	}).catch(next)
})

module.exports = router

/*1.- json({user: user} In this case first user is a variable and second are datas. Leave one of both
because in ECMAScript 6 if both got same name, we can use only one*/

/*Arrow function no need return*/
