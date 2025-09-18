import express from "express";
import cors from "cors";
import { routes } from "./routes/index";
import { errorHandling } from "./middlewares/error-handling";

const app = express();
app.use(express.json());
app.use(cors());

// public routes
app.use(routes);

// ensure handling
app.use(errorHandling);

export { app };
