import express from "express";
import deployRoutes from "./src/routes/deployRoutes.js";
import { banner } from "./src/utils/banner.js";

// Express app
const app = express();

// Routes
app.use("/", deployRoutes);

// Start the server
app.listen(3000, () => {
  banner();
});