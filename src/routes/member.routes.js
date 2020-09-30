module.exports = app => {
    const members = require('../controllers/member.controller.js');

    var router = require('express').Router();

    router.post("/", members.create);

    router.get("/", members.find);

    router.get("/:id", members.get);

    // Create routes for the rest of the operations

    app.use('/api/members', router);
}