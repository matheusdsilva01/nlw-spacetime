import cors from "@fastify/cors";
import "dotenv/config";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { authRoutes } from "./routes/auth";
import multipart from "@fastify/multipart";
import { memoriesRoutes } from "./routes/memories";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";
const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(multipart);

app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(jwt, {
  secret: "85frb4vfg4196WSAR4ge",
});

app.register(authRoutes);
app.register(memoriesRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Server is running on port 3333!!!");
  });
