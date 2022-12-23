const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sondage = new Schema(
  {
    title: { type: String, require: [true, `title is required`] },
    description: { type: String, require: [true, `description is required`] },
    category: { type: String, require: [`check is required`] },
    sondageTable: [{ type: Schema.Types.ObjectId, ref: 'sondage' }],
    count: { type: Number, default: 0 }

  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = mongoose.model('Sondages', sondage, 'Sondages')