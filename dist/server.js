"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var post_1 = __importDefault(require("./routes/post"));
var order_1 = __importDefault(require("./routes/order"));
var product_1 = __importDefault(require("./routes/product"));
var user_1 = __importDefault(require("./routes/user"));
var auth_1 = __importDefault(require("./auth/auth"));
var app = (0, express_1.default)();
dotenv_1.default.config();
// middleware:
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/posts", post_1.default);
app.use("/order", order_1.default);
app.use("/product", product_1.default);
app.use("/user", user_1.default);
app.use("/register", auth_1.default);
app.get("/", function (req, res) {
    res.send("hi");
});
app.get("/", function (req, res) {
    res.send("hello");
});
// connect to DB
mongoose_1.default
    .connect(process.env.DB_CONNECTION)
    .then(function () {
    console.log("connected");
    app.listen(5000);
})
    .catch(function (err) { return console.log("error in connection", err); });
// listen to the server
