import Product from "../models/product.js";

// Placing Order COD : /api/orde/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length === 0) {
      return res.json({ success: true, message: "Invalid Data" });
    }
    // Calculate amount using items
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, 0);
    // Add tax (2%)
    amount += Math.float(amount * 0.02);
  } catch (error) {}
};
