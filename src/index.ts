import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swaggerConfig";
import controllers from "./controllers";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", controllers);
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
