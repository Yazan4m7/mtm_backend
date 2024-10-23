const express = require('express');
const costModel = require('../models/cost');

const costRouter = express.Router();
costRouter.get('/cost', async (req, res) => {
    try {
        const costDocument = await costModel.findOne({}); // Use `findOne` if you expect only one document
        if (costDocument) {
            res.json(costDocument);
        } else {
            res.status(404).send('Cost document not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving cost document');
    }
});
  module.exports=costRouter;