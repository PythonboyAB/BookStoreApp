import express from 'express';
import { config } from "dotenv";
import mongoose from "mongoose"; 
import bookRoute from "./route/book_route.js"
import cors from "cors"
import userRoute from "./route/user.route.js";
import { login } from './controller/user.controller.js';


const app = express();
app.use(cors());
app.use(express.json());

config();

const port = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

mongoose.set('strictQuery', false);

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Successfully connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB:", error);
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use('/login', login)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
