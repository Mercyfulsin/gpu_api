const mongoose = require("mongoose");

// Create schema || 'Skeleton' of the object
const GPUSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pn: { type: String, required: true },
  info1: { type: String },
  info2: { type: String },
  info3: { type: String },
  info4: { type: String },
  info5: { type: String },
});

// Convert the schema into a model
const GPU = mongoose.model("GPU", GPUSchema);
// export the model for Controller usage
module.exports =  GPU;