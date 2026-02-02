import express from "express";
import apiRoutes from "./routes/api.js";
import docsRoutes from "./routes/api-docs.js";

const app = express();
const port = 3000;

app.use("/api", apiRoutes);
app.use(docsRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
