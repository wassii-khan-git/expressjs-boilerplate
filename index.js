// express
import express from "express";
// third party
import cors from "cors";
// routes
import router from "./routes/index.js";
// custom
import DatabaseConnection from "./db/connection.js";
import { PORT_NUMBER } from "./config/config.js";

// app initialization
const app = express();

// database connection
DatabaseConnection();

// middleware
app.use(cors());
app.use(express.json());

// Use your existing routes:
app.use("/v1/api", router);

// server listens on port number
app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});

// for vercel deployment
export default app;
