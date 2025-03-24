const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  package: {
    place: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  travelers: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
    },
  ],
  contactDetails: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  travelDate: { type: Date, required: true },
});

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;