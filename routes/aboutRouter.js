const express = require("express");
const { aboutContent } = require("../utils/constants.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("about", { page: "About", description: aboutContent });
});

module.exports = {
    router,
};
