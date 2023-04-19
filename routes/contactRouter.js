const express = require("express");
const { contactContent } = require("../utils/constants.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("contact", { page: "Contact", description: contactContent });
});

module.exports = {
    router,
};
