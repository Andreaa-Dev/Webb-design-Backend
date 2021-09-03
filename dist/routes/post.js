"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var post_1 = __importDefault(require("../models/post"));
// client make request - sent data
router.get("/", function (req, res) {
    res.send("post here");
});
// create data
router.post("/", function (req, res) {
    var post = new post_1.default({
        name: req.body.name,
        address: req.body.address,
        date: req.body.date,
        description: req.body.description,
    });
});
exports.default = router;
