const mongoose=require('mongoose');
const costSchema=mongoose.Schema({

    Dental_Implants:{
     type:mongoose.Schema.Types.Mixed,
     default:"empty"
    },
    Bone_Grafting:{
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Membrane: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Sinus_Lift: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Wisdom_Tooth_Extraction:{
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       RCT: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Crown: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Tooth_Preparation: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Veneer: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
     
       Inlay_Onlay: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
   
       Gingival_Scaling: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
     
       Post_Core: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
    
       Surgical_Guide: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
       Titanium_Metal_Bar: {
        type:mongoose.Schema.Types.Mixed,
        default:"empty"
       },
   
},{ collection: 'cost' });

const cost = mongoose.model('cost',costSchema);

module.exports=cost;