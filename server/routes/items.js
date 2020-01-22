var express = require('express');
var router = express.Router();

var itemsController = require('../controllers/items.controller');

router.get('/items', itemsController.searchItem);
router.get('/items/:id', itemsController.getItemById);

module.exports = router;
