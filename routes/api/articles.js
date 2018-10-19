const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/saveArticle").post(articleController.save);
router.route("/getSavedArticle").get(articleController.getSavedArticles);
router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

module.exports = router;