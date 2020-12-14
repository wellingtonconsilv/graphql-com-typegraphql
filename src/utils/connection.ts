import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://root:admin@dowhile.yk6c3.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
