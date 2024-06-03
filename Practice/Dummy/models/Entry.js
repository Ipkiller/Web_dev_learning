import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const Entry= mongoose.model("Employers", entrySchema);