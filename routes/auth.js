const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

/*
// Creating a new user
router.post('/signup',authController.signup);

// Authentication
router.get('/login',authController.signin);

// Password Reset
router.post('/reset',authController.resetRequest);
router.get('/reste',authController.resetRequestTokenVerification);
router.patch('/reset',authController.resetPassword);
*/