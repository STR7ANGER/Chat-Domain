import express from "express";
import cors from "cors";
import { router } from "./routes.js";
import { env } from "./lib/env.js";

export const app = express();

app.use(express.json());

if (env.CORS_ORIGIN) {
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true
    })
  );
} else {
  app.use(cors());
}

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", router);
