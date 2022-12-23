const mongoose = require('mongoose');
const VoteSchema = new mongoose.Schema({
  option: { type: String, required: true },
  count: { type: Number, default: 0 },
},
  {
    timeseries: true,
    versionKey: false
  }
);
module.exports = mongoose.model('Vote', VoteSchema);
