module.exports = app => {
    const members = require('../controllers/member.controller.js');

    var router = require('express').Router();

    // Search Members
    router.get("/find", members.find);

    // Get a single Member record (details only)
    router.get("/:id", members.get);

    // Create a Member record
    router.post("/create", members.create);

    // Update a Member record (details only)
    router.post("/update", members.update);

    // Delete a single Member record (details only)
    router.delete("/delete", members.delete);

    // API entry route
    app.use('/api/members', router);
}
