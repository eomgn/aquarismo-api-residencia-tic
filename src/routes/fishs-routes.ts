import { Router } from "express";
const fishsRoutes = Router();

// controllers
import { FishsController } from "../controllers/fishs-controller";
const fishsController = new FishsController();

// middlewares

// routes
fishsRoutes.get("/", fishsController.index);
fishsRoutes.post("/", fishsController.create);

export { fishsRoutes };
