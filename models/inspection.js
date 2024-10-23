const mongoose=require('mongoose');
const inspectionSchema = mongoose.Schema({
    nationalId: { type: Number, required: true },
    createdId: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    jobNumber: { type: Number, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    Dental_Implants: { type: Number, default: 0 },
    Bone_Grafting: { type:mongoose.Schema.Types.Mixed, default: 0 },
    Membrane: { type:Number, default: 0 },
    Sinus_Lift: { type: [String], default: ["empty"] },
    Wisdom_Tooth_Extraction: { type: [String], default: ["empty"] },
    RCT: { type: [Number], default: [0] },
    Crown: { type: [Number], default: [0] },
    Tooth_Preparation: { type: Number, default: 0 },
    Veneer: { type: Number, default: 0 },
    noteVeneer: { type: String, default: "empty" },
    Inlay_Onlay: { type: Number, default: 0 },
    noteInlayonlay: { type: String, default: "empty" },
    Gingival_Scaling: { type: Number, default: 0 },
    noteGingivalscaling: { type: String, default: "empty" },
    Post_Core: { type:Number, default: 0 },
    notePostCore: { type: String, default: "empty" },
    Surgical_Guide: { type: Number, default: 0 },
    Titanium_Metal_Bar: { type: [String], default: ["empty"] },
    generalNote: { type: String, default: "empty" },
    doctorName: { type: String, required: true },
    state: { type: String, required: true },
    Date: { type: String, required: true },
    cost: { type: Number, required: true },
    handCost: { type: Number, required: true },
    composing_Dental_Implants: { type: Boolean, required: true },
    on_Potash: { type: String, default: "Not specified" },
    on_Patient: { type: String, default: "Not specified" }
});

const inspection = mongoose.model("inspections",inspectionSchema);

module.exports=inspection;