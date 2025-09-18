import { Router } from "express";
const ordersRoutes = Router();

// controllers
import { OrdersController } from "../controllers/orders-controller";
const ordersController = new OrdersController();

// middlewares

// routes
ordersRoutes.get("/", ordersController.index);
ordersRoutes.post("/", ordersController.create);

export { ordersRoutes };
