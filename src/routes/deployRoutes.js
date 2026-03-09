import express from "express";
import { deploy } from "../controllers/deployController.js";

// Express router
const router = express.Router();

// Deploy routes

router.get("/deploy", deploy);
router.post("/deploy", deploy);
router.put("/deploy", deploy);
router.patch("/deploy", deploy);
router.delete("/deploy", deploy);
router.options("/deploy", deploy);
router.head("/deploy", deploy);

export default router;