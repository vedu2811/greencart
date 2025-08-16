import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 2811;

// ALLOW MULTIPLE ORIGINS
const allowedOrigins = ["http://127.0.0.1:5173"];

// MIDDLEWARE CONFIGURATIONS
app.unsubscribe(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
