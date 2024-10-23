const express = require('express');
const progressrecordModel = require('../models/progressrecord');
const progressRecordRouter = express.Router();


progressRecordRouter.post('/progressrecord', async(req, res) => {
    try {
      const {
        Dental_Implants,Bone_Grafting,Membrane,Sinus_Lift,Wisdom_Tooth_Extraction,
        RCT,Crown,Tooth_Preparation,Veneer,
        Inlay_Onlay,Gingival_Scaling,
        Post_Core,Surgical_Guide,Titanium_Metal_Bar,state,Date,cost,createdId,handCost} = req.body
      const progressrecord = new progressrecordModel({
        Dental_Implants,Bone_Grafting,Membrane,Sinus_Lift,Wisdom_Tooth_Extraction,
        RCT,Crown,Tooth_Preparation,Veneer,
        Inlay_Onlay,Gingival_Scaling,
        Post_Core,Surgical_Guide,Titanium_Metal_Bar,state,Date,cost,createdId,handCost});
      await progressrecord.save();
      return res.status(201).send(progressrecord);
    
    } catch (e) {
      res.status(500).json({error:e.message});
    }
});


progressRecordRouter.get('/progressrecord/:createdId', async (req, res) => {
  try {
      const createdId = req.params.createdId;

      const progressRecord = await progressrecordModel.findOne({ createdId: createdId });

      if (!progressRecord) {
          return res.status(404).json({ message: 'No inspections found for the given criteria' });
      }

      return res.status(200).json(progressRecord);

  } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

progressRecordRouter.patch('/progressrecord/:createdId/state', async (req, res) => {
        try {
          const createdId = req.params.createdId;  
          const { newState } = req.body;
      
          if (!Number.isInteger(Number(createdId))) {
            return res.status(400).json({ message: 'Invalid createdId' });
          }
      
          const updatedProgressRecord = await progressrecordModel.findOneAndUpdate(
            { createdId: createdId },      
            { state: newState },        
            { new: true }                
          );
      
          if (!updatedProgressRecord) {
            return res.status(404).json({ message: 'Inspection not found' });
          }
      
          return res.status(200).json(updatedProgressRecord);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
});


progressRecordRouter.patch('/progressrecord/update/:createdId', async (req, res) => {
    try {
        const createdId = req.params.createdId;

        const updatedFields = req.body; 

        if (!Number.isInteger(Number(createdId))) {
            return res.status(400).json({ message: 'Invalid createdId' });
        }

        const updatedProgressRecord = await progressrecordModel.findOneAndUpdate(
            { createdId: createdId },
            updatedFields,
            { new: true }  
        );

        if (!updatedProgressRecord) {
            return res.status(404).json({ message: 'Progress record not found' });
        }

        return res.status(200).json(updatedProgressRecord);
    } catch (err) {
      
        res.status(500).json({ message: err.message });
    }
});


      
      
module.exports=progressRecordRouter;