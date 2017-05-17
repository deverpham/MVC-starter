Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../../server");
var ModelService = (function () {
    function ModelService() {
    }
    ModelService.prototype.connectModel = function (name) {
        return new Promise(function (resolve) {
            var pointer = setInterval(function () {
                if (server_1.app.models != undefined) {
                    clearInterval(pointer);
                    resolve(server_1.app.models[name]);
                }
            }, 100);
        });
    };
    ModelService.prototype.modelCreate = function (model, data) {
        return new Promise(function (resolve, reject) {
            try {
                model.create(data, function (err, object) {
                    if (err)
                        reject(err.toString());
                    resolve(object);
                });
            }
            catch (err) {
                reject(err.toString());
            }
        });
    };
    ModelService.prototype.modelDelete = function (model, id) {
        return new Promise(function (resolve, reject) {
            try {
                model.destroyById(id, function (err, object) {
                    if (err)
                        reject(err.toString());
                    resolve(object);
                });
            }
            catch (err) {
                reject(err.toString());
            }
        });
    };
    ModelService.prototype.modelChange = function (model, id, dataChange) {
        return new Promise(function (resolve, reject) {
            try {
                model.upsertWithWhere({
                    id: id
                }, dataChange, function (err, object) {
                    if (err)
                        reject(err.toString());
                    resolve(object);
                });
            }
            catch (err) {
                reject(err.toString());
            }
        });
    };
    ModelService.prototype.modelGet = function (model) {
        return new Promise(function (resolve, reject) {
            try {
                model.find(function (err, object) {
                    if (err)
                        reject(err.toString());
                    resolve(object);
                });
            }
            catch (err) {
                reject(err.toString());
            }
        });
    };
    return ModelService;
}());
exports.modelService = new ModelService();
