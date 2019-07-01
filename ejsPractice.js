const path = require("path");

const express = require("express");
const app = express();

const helmert = require("helmet");

app.use(helmert());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine","ejs")
app.set("views",path.join(__dirname,'views'))

app.get("/",(req,res,next) => {
    res.render("index");
});

app.listen(3000);