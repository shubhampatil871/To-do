import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(conn);
  } catch (error) {
    console.log("database server error", error);
  }
};

connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
