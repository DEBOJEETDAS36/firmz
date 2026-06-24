// lib/models/Lead.ts
import mongoose, { Schema, models } from "mongoose";

const LeadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Prevent model recompilation during hot reloads
const Lead = models.Lead || mongoose.model("Lead", LeadSchema);

export default Lead;