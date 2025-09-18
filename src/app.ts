import express from "express";
import { routes } from "./routes/index";
import { errorHandling } from "./middlewares/error-handling";

const app = express();
app.use(express.json());

// public routes
app.use(routes);

// ensure handling
app.use(errorHandling);

export { app };
