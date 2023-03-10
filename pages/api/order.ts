import { PurchasedProductDto } from "../../interfaces/order";
import { OrderCreatedDto } from "../../interfaces/order";
import { OrderToCreateDto } from "../../interfaces/order";

const products: PurchasedProductDto[] = [];

const order: OrderCreatedDto = {
  id: "1",
};

const orderToCreate: OrderToCreateDto = {
  products,
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("POST request received", orderToCreate);
      res.status(200).json({ orderToCreate });
    } catch (err) {
      res.status(500).json({ error: "failed to load data" });
    }
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
}
