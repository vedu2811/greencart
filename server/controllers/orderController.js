import Product from "../models/product.js";

// Placing Order COD : /api/orde/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length === 0) {
      return res.json({ success: true, message: "Invalid Data" });
    }
  } catch (error) {}
};
