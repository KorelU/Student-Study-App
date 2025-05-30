import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Class', ClassSchema);