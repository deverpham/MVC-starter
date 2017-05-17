Object.defineProperty(exports, "__esModule", { value: true });
var uniqueString = require('unique-string');
var express = require('express');
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.newRouter = function () {
        return express.Router();
    };
    HelperService.prototype.response = function (status, value) {
        this.log('error-string', value);
        return {
            status: status,
            value: value
        };
    };
    HelperService.prototype.generateId = function () {
        return uniqueString();
    };
    HelperService.prototype.checkNull = function (variable) {
        return variable == undefined;
    };
    HelperService.prototype.log = function (name, message) {
        console.log(name.toUpperCase() + " : " + message);
    };
    HelperService.prototype.resRejectNull = function (listKey, req, res) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            listKey.forEach(function (key, i) {
                _this.log("checking params " + key + " is not valid;", _this.checkNull(req.body[key]).toString());
                if (_this.checkNull(req.body[key]) || req.body[key] == '') {
                    res.status(500).send(_this.response('error', "Missing params " + key + " or empty value"));
                    resolve(true);
                }
                if (i == listKey.length - 1)
                    resolve(false);
            });
        });
    };
    return HelperService;
}());
exports.helper = new HelperService();
