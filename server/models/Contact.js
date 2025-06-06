const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumber: {
		type: Number,
		trim: true,
	},
  },
  { timestamps: true }
)

module.exports = mongoose.model("Contact", contactSchema);