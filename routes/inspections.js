const express = require('express');
const inspectionModel = require('../models/inspection');
const inspectionRouter = express.Router();

inspectionRouter.post('/inspection', async(req, res) => {
  try {
    const {nationalId,phoneNumber,jobNumber,address,name,
      Dental_Implants,Bone_Grafting,Membrane,Sinus_Lift,Wisdom_Tooth_Extraction,
      RCT,Crown,Tooth_Preparation,Veneer,noteVeneer,
      Inlay_Onlay,noteInlayonlay,Gingival_Scaling,noteGingivalscaling,
      Post_Core,notePostCore,Surgical_Guide,Titanium_Metal_Bar,generalNote,doctorName,state,Date,cost,createdId,handCost,composing_Dental_Implants} = req.body;
    const Inspection = new inspectionModel({nationalId,phoneNumber,jobNumber,address,name,
      Dental_Implants,Bone_Grafting,Membrane,Sinus_Lift,Wisdom_Tooth_Extraction,
      RCT,Crown,Tooth_Preparation,Veneer,noteVeneer,
      Inlay_Onlay,noteInlayonlay,Gingival_Scaling,noteGingivalscaling,
      Post_Core,notePostCore,Surgical_Guide,Titanium_Metal_Bar,generalNote,doctorName,state,Date,cost,createdId,handCost,composing_Dental_Implants});
    await Inspection.save();
    return res.status(201).send(Inspection);
  
  } catch (e) {
    res.status(500).json({error:e.message});
  }
  });

  inspectionRouter.get('/inspections/:filter', async (req, res) => {
    try {
      const userRole = req.params.filter; 
      let query = {};
      
  if (userRole == 'on Waiting' || userRole == 'Accepted' || userRole == 'Under Treatment' || userRole == 'Completed') {
    query = { state: userRole };
      
      } else{
        query = { doctorName: req.params.filter };

      }
  
      const inspections = await inspectionModel.find(query);
  
      if (!inspections || inspections.length === 0) {
        return res.status(404).json({ message: 'Inspections not found' });
      } else {
        return res.json(inspections);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  inspectionRouter.get('/inspection/:doctorName/:state', async (req, res) => {
    try {
      const { doctorName, state } = req.params;
   
      const inspections = await inspectionModel.find({
        doctorName: doctorName,
        state: state            
      });
  
      if (inspections.length > 0) {
        res.status(200).json(inspections);
      } else {
        res.status(404).json({ message: 'No inspections found for the given criteria' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  inspectionRouter.patch('/inspection/:id/on_Potash', async (req, res) => {
    try {
      const { id } = req.params; 
      const { costOnPotash, costOnPatient } = req.body; 
  
    
      const updatedInspection = await inspectionModel.findByIdAndUpdate(
        id,
        { on_Potash: costOnPotash, on_Patient: costOnPatient }, 
        { new: true } 
      );
  
      if (!updatedInspection) {
        return res.status(404).json({ message: 'Inspection not found' });
      }
  
      return res.status(200).json(updatedInspection); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
inspectionRouter.patch('/inspection/:id/state', async (req, res) => {
  try {
    const { id } = req.params;
    const { newState } = req.body; 

    const updatedInspection = await inspectionModel.findByIdAndUpdate(
      id,
      { state: newState },
      { new: true } 
    );

    if (!updatedInspection) {
      return res.status(404).json({ message: 'Inspection not found' });
    }

    return res.status(200).json(updatedInspection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


  module.exports=inspectionRouter;