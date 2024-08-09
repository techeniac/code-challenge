import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import resourceRoutes from "./routes/resourceRoutes";

createConnection({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  entities: [__dirname + "/entity/*.ts"],
}).then(() => {
  const app = express();
  app.use(express.json());
  app.use("/resources", resourceRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}).catch(error => console.log(error));
