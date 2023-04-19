///jshint esversion:6

const express = require("express");

const { router: homeRouter } = require("./routes/homeRouter.js");
const { router: aboutRouter } = require("./routes/aboutRouter.js");
const { router: contactRouter } = require("./routes/contactRouter.js");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/", homeRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
