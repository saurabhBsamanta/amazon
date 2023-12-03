"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("./data");
var app = (0, express_1.default)();
app.get('api/products', function (req, res) {
    res.json(data_1.sampleProducts);
});
var PORT = 4000;
app.listen(PORT, function () {
    console.log("server started at http://localhost:".concat(PORT));
});
