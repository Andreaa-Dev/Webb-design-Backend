"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var post_1 = __importDefault(require("./routes/post"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
dotenv_1.default.config();
app.use("/posts", post_1.default);
app.get("/", function (req, res) {
    res.send("hi");
});
app.get("/", function (req, res) {
    res.send("hello");
});
// connect to DB
mongoose_1.default.connect(process.env.DB_CONNECTION, function () {
    console.log("welcome");
});
// listen to the server
app.listen(5000);
