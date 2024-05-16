import express from "express";
import { getCourses,createCourse,deleteCourse,updateCourse } from "../controllers/courseController.js";
import upload from "../middlewares/upload-middleware.js";
import {
  getAllInstructors,
  singin,
  singup,
  removeInstructor
} from "../controllers/instructorController.js";

const instructorRouter = express.Router();

instructorRouter.post("/signup", singup);
instructorRouter.post("/signin", singin);

instructorRouter.get("/get-instructors", getAllInstructors);
instructorRouter.delete("/delete-instructors/:id",removeInstructor);


export default instructorRouter;