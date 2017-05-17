Object.defineProperty(exports, "__esModule", { value: true });
var loopback = require('loopback');
var express = require('express');
var boot = require('loopback-boot');
exports.app = loopback();
var bodyParser = require('body-parser');
exports.app.use('/public', express.static('./public'));
var path = require('path');
var app_router_1 = require("./router/app.router");
var user_router_1 = require("./router/user.router");
var todo_router_1 = require("./router/todo.router");
exports.app.use(bodyParser.urlencoded({
    extended: true
}));
exports.app.use(bodyParser.json());
exports.app.set('views', './views');
exports.app.set('view engine', 'pug');
exports.app.use(app_router_1.default);
exports.app.use('/user', user_router_1.default);
exports.app.use('/todo', todo_router_1.default);
boot(exports.app, path.join(__dirname, '../server'), function () {
    exports.app.listen(process.env.PORT, function () {
        console.log("Server started \r\nlisten " + process.env.PORT);
    });
});
