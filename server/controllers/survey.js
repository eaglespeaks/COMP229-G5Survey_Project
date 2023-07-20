let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Survey = require('../models/survey');

module.exports.displaySurveyList = async (req, res, next) => {
    try {
        let surveyList = await Survey.find();
        // console.log(surveyList)

        res.render('survey/list', {title: 'Survey', SurveyList: surveyList})
    } catch (err) {
        console.error(err);
    }
};

module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('survey/add', {title: 'Add Survey'})
    } catch (err) {
        console.error(err);
    }
};

module.exports.processAddPage = async (req, res, next) =>{
    let newSurvey = new Survey({
        "name": req.body.name,
        "creator": req.body.creator,
        "released": req.body.released,
        "description": req.body.description,
        "status": req.body.status
    });

    try{
        await newSurvey.save();
        res.redirect('/survey-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try {
        let surveyToEdit = await Survey.findById(id);
        res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedSurvey = {
        "name": req.body.name,
        "developer": req.body.developer,
        "released": req.body.released,
        "description": req.body.description,
        "price": req.body.price
    };

    try {
        await Survey.updateOne({_id: id}, updatedSurvey);
        res.redirect('/survey-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try {
        await Survey.findByIdAndRemove(id);
        res.redirect('/survey-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};