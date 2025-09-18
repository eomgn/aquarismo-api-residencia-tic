import { Router } from "express";
const routes = Router();

// arquivo de rotas
import { accessouriesRoutes } from "./accessouries-routes";
import { ordersRoutes } from "./orders-routes";
import { fishsRoutes } from "./fishs-routes";

// middlewares

// routes
routes.use("/accessouries", accessouriesRoutes);
routes.use("/orders", ordersRoutes);
routes.use("/fishs", fishsRoutes);

export { routes };
