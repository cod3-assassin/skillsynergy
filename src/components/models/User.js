import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  secretKey: {
    type: String,
    required: true,
  },
  resume: {
    filename: String,
    contentType: String,
    fileBuffer: Buffer,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
