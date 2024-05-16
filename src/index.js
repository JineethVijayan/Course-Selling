import express from "express";
import cookieParser from "cookie-parser";
import { ConnectDb } from "../config/db.js";
import userRouter from "../routes/userRouter.js";
import instructorRouter from "../routes/instructorRoutes.js";
import coursesRouter from "../routes/coursesRoutes.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/instuctor", instructorRouter)
app.use("/api/v1/course", coursesRouter)
const port = 3000;

ConnectDb();


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});