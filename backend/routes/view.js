const express = require('express');
const Router = express.Router();
const {saveCrytoData, getCrytoDataById, getAllCrytoData, deleteSavedCryptoData} = require('../controllers/view');


Router.route('/').get(getAllCrytoData).post(saveCrytoData).delete(deleteSavedCryptoData)
Router.route('/:id').get(getCrytoDataById)

module.exports = Router;