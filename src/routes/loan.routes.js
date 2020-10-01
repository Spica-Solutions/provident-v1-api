module.exports = app => {
    const loans = require('../controllers/loan.controller');

    const router = require('express').Router();

    // Search Members
    router.get("/", loans.find);

    // Get a single Member record (details only)
    router.get("/:id", loans.get);

    // Create a Member record
    router.post("/", loans.create);

    // Update a Member record (details only)
    router.post("/:id", loans.update);

    // Delete a single Member record (details only)
    router.delete("/:id", loans.delete);

    // API entry route
    app.use('/api/loans', router);
}