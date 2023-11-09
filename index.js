var express = require("express");
var product = require("./product.js");
var cors = require('cors');
var app = express();
app.use(cors());

app.listen(5000, () => {
 console.log("Server running on port 5000");
});

app.get("/productByName", (req, res, next) => {
    res.json(product.getProductByName(req.query.searchKey));
});