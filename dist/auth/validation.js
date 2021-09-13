"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
var joi_1 = __importDefault(require("joi"));
var registerValidation = function (data) {
    var schema = joi_1.default.object({
        userName: joi_1.default.string().min(6).alphanum().required(),
        DOB: joi_1.default.date(),
        email: joi_1.default.string().email(),
        password: joi_1.default.string().min(6),
    });
    return schema.validate(data);
};
exports.registerValidation = registerValidation;
var loginValidation = function (data) {
    var schema = joi_1.default.object({
        email: joi_1.default.string().min(6).email(),
        password: joi_1.default.string().min(6),
    });
    return joi_1.default.valid(data, schema);
};
exports.loginValidation = loginValidation;
