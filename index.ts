import express from "express"
import * as v1Workout from "./v1/routes/workoutRoutes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Workout.router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
