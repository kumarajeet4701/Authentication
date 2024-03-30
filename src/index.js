const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname, "../templates");
const LoginModel = require("./mongodb");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, resp) => {
    resp.render("Login");
});

app.get("/signup", (req, resp) => {
    resp.render("Signup");
});

app.post("/signup", async (req, resp) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
    };

    try {
        
        await LoginModel.create(data);
        resp.render("home");
    } catch (error) {
        console.error("Error creating user:", error);
        resp.status(500).send("Error creating user");
    }
});

app.listen(5000, () => {
    console.log("Port Connected");
});

