import { Router } from "express";
const accessouriesRoutes = Router();

// controllers
import { AccssouriesController } from "../controllers/accessouries-controller";
const accssouriesController = new AccssouriesController();

// middlewares

// routes
accessouriesRoutes.get("/", accssouriesController.index);
accessouriesRoutes.post("/", accssouriesController.create);

export { accessouriesRoutes };
