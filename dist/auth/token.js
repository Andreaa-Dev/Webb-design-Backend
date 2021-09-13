"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    var token = req.header("auth-token");
    if (!token)
        return res.status(401).send("Access Denied");
    try {
        var verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    }
    catch (err) {
        res.status(400).send("invalid Token");
    }
}
