import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";
const app = fastify();

app.register(memoriesRoutes);
app.register(cors, {
  origin: true,
});
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333!!!");
  });
