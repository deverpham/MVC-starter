"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('admin/index');
});
router.get('/product', function (req, res) {
    res.render('admin/product');
});
exports.default = router;
