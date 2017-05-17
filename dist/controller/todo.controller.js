var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_service_1 = require("../core/helper.service");
var model_service_1 = require("../core/service/model.service");
var TodoController = (function () {
    function TodoController() {
        this.init();
    }
    TodoController.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, model_service_1.modelService.connectModel('todo')];
                    case 1:
                        _a.todoModel = _b.sent();
                        return [2];
                }
            });
        });
    };
    TodoController.prototype.addNew = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            data.status = 'yetstart';
            data.date = new Date();
            data.id = helper_service_1.helper.generateId();
            model_service_1.modelService.modelCreate(_this.todoModel, data)
                .then(function () {
                resolve();
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    TodoController.prototype.deleteTodo = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            model_service_1.modelService.modelDelete(_this.todoModel, id)
                .then(function () {
                resolve();
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    TodoController.prototype.getTodayList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            model_service_1.modelService.modelGet(_this.todoModel)
                .then(function (results) {
                resolve(results);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    TodoController.prototype.changeStatus = function (id, currentStatus) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            switch (currentStatus) {
                case 'yetstart':
                    model_service_1.modelService.modelChange(_this.todoModel, id, {
                        status: 'inprogress'
                    })
                        .then(function (results) {
                        resolve('inprogress');
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                    break;
                case 'inprogress':
                    model_service_1.modelService.modelChange(_this.todoModel, id, {
                        status: 'completed'
                    })
                        .then(function (results) {
                        resolve('completed');
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                    break;
            }
        });
    };
    return TodoController;
}());
exports.todoController = new TodoController();
