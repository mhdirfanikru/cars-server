import mongoose from "mongoose";

const CarSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  make_id: {
    type: String,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", CarSchema);
export default Car;
