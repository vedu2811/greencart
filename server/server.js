import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 2811;

await connectDB();
await connectCloudinary();

// ALLOW MULTIPLE ORIGINS
const allowedOrigins = ["http://localhost:5173"];

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// MIDDLEWARE CONFIGURATIONS
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("API is Working");
});

// User Routes
app.use("/api/user", userRouter);
// Seller Routes
app.use("/api/seller", sellerRouter);
// Product Routes
app.use("/api/product", productRouter);
// Cart Routes
app.use("/api/cart", cartRouter);
// Adress Routes
app.use("/api/address", addressRouter);
// Orders Routes
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
