import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.port, () => {
  console.log(`Server turning on http://localhost:${env.port}`);
});
