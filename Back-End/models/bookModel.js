import mongoose from "mongoose";

// Article Schema
const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  publishDate: { type: String, required: true },
  images: [String],
});

// make a model from the Schema
export const Article = mongoose.model("Article", articleSchema);
