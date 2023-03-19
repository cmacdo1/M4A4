const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router
    .route('/')
    .get(loanController.getData)
    .post(loanController.postData);

router
    .route('/:id')
    .get(loanController.getDataById)    
    .put(loanController.updateDataById)
    .delete(loanController.deleteDataById);

module.exports = router;