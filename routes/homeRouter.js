const express = require("express");
const { homeStartingContent } = require("../utils/constants.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { page: "home", description: homeStartingContent });
});

module.exports = {
    router,
};
