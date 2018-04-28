const express = require('express');
const router = require('express').Router();
const path = require('path');
router.use(express.static("."));
//Another authentication check here. 
const authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/');
	} else{
		next();
	}

};


//Shows HTML home page. 
router.get('/', authCheck, (req, res) => {
	res.sendFile(path.join(__dirname,  '..', '/map.html'));
});

module.exports = router;