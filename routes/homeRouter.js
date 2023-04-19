const express = require("express");
const { check, validationResult } = require("express-validator");
const { homeStartingContent } = require("../utils/constants.js");

const router = express.Router();

const postsArr = [];

router.get("/", (req, res) => {
    res.render("home", {
        page: "Home",
        description: homeStartingContent,
        postsArr,
    });
});

router.get("/compose", (req, res) => {
    res.render("post", { page: "Compose", errors: [], title: "", content: "" });
});

router.post("/compose", async (req, res) => {
    const { title, content } = req.body;

    await check("title").notEmpty().withMessage("Title is obligatory").run(req);
    await check("content")
        .isLength({ min: 10 })
        .withMessage("Content should be at least 10 characters")
        .run(req);

    const result = validationResult(req);

    //Validate result is empty
    if (!result.isEmpty()) {
        // errors
        return res.render("post", {
            page: "Compose",
            errors: result.array(),
            title,
            content,
        });
    }

    const randomId =
        Math.random().toString(32).substring(2) + Date.now().toString(32);

    const post = {
        id: randomId,
        title,
        content,
    };

    postsArr.push(post);

    res.redirect("/");
});

router.get("/:postId", (req, res) => {
    const { postId } = req.params;
    const { title = "Post Not found", content = "" } = postsArr.filter(
        (el) => el.id === postId
    )[0];
    res.render("viewPost", { page: "viewPost", title, content });
});

module.exports = {
    router,
};
