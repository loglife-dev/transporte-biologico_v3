import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import "express-async-errors";
import "./database";

import { router } from "./shared/routes";
import { AppError } from "./shared/errors/AppError";

const app = express();
app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Listening on port 3333"));
