const mongoose=require('mongoose');
const progressrecordSchema=mongoose.Schema({

    createdId:{
        type:Number,
        required:true
    },
    Dental_Implants:{
     type:mongoose.Schema.Types.Mixed,
     default:0
    },
    Bone_Grafting:{
        type:mongoose.Schema.Types.Mixed,
        default:0
       },
       Membrane: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },
       Sinus_Lift: {
        type:[String],
        default:["empty"]
       },
       Wisdom_Tooth_Extraction:{
        type:[String],
        default:["empty"]
       },
       RCT: {
        type: Number,  
        default: 0 
       },
       Crown: {
        type: Number,  
        default: 0 
       },
       Tooth_Preparation: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },
       Veneer: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },

       Inlay_Onlay: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },

       Gingival_Scaling: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },

       Post_Core: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },

       Surgical_Guide: {
        type:mongoose.Schema.Types.Mixed,
        default:0
       },
       Titanium_Metal_Bar: {
        type:[String],
        default:["empty"]
       },

       state:{
        type:String,
        required:true
       },
       Date:{
        type:String,
        required:true
       },
       cost:{
        type:Number,
        required:true

       },  handCost:{
        type:Number,
        required:true
           },



});

const progressrecord = mongoose.model("progressrecord",progressrecordSchema);

module.exports=progressrecord;