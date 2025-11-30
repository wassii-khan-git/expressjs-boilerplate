import express from "express";
import authRoutes from "./auth/route.js";

// routes
const router = express.Router();

// auth routes
router.use("/auth", authRoutes);

// export the defualt router
export default router;
