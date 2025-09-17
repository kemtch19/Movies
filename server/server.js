import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest"

const app = express();
const port = 3000;

await connectDB();

// Middleware
app.use(express.json()); /* express middleware */
app.use(cors()); /* cors middleware */
app.use(clerkMiddleware()); /* clerk middleware */
app.use("/api/inngest", serve({ client: inngest, functions })); /* inggest middleware */

// API Routes
app.get("/", (req, res) => res.send("The server is Active"));

app.listen(port, () => console.log(`Server in: http://localhost:${port}`));
