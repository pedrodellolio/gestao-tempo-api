import express from "express";
import tasksRoutes from "./task";

const router = express.Router();

router.use("/tasks", tasksRoutes);

export default router;
