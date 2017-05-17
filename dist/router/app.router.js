"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var appRouter = express.Router();
appRouter.get('/', function (req, res) {
    res.render('index');
});
exports.default = appRouter;
