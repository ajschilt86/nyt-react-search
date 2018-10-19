let db = require("../models");

module.exports = {
    save: function (req, res) {
        db.Article.fineOne({ articleId: req.body.articleId })
            .then(function (response) {
                if (response === null) {
                    db.Article.create(req, body).then((response) => {
                        console.log(response + "has been created")
                        res.send("Saved!");
                    })
                        .catch(err => res.json(err));
                }
            })
    },
    getSavedArticles: function (req, res) {
        db.Article
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteSavedArticle: function (req, res) {
        console.log("Delete Articles Path hit");
        console.log(JSON.stringify(req.body));
        db.Article
            .remove({ articleId: req.body.articleId }, (err) => {
                if (err) throw err;

                console.log("Article Sucessfully Deleted");

                db.Article
                    .find({})
                    .sort({ date: -1 })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
    }
};