const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');

router.post('/generate-blueprint', async (req, res) => {
    try {
        const userInput = req.body.userInput;
        const response = await openaiService.generateBlueprint(userInput);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
