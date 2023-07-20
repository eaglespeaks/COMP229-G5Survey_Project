let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Survey Model
let Survey = require('../models/survey');

let surveyController = require('../controllers/survey')

// Get Route for the Survey List page - READ Operation
router.get('/', surveyController.displaySurveyList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', surveyController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', surveyController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', surveyController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', surveyController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', surveyController.performDelete);

module.exports = router;