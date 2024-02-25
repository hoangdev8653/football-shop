import mongoose from "mongoose";

const Blog = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
});

const BlogModel = mongoose.model("blog", Blog);

export default BlogModel;
