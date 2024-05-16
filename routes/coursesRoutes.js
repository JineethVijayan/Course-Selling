import express from "express";
import { getCourses,createCourse,deleteCourse,updateCourse } from "../controllers/courseController.js";
import upload from "../middlewares/upload-middleware.js";


const coursesRouter = express.Router();


coursesRouter.get("/get-courses", getCourses);
coursesRouter.post("/add-courses", upload.single("image"), createCourse);
coursesRouter.put("/update-courses/:id", updateCourse);

coursesRouter.delete("/delete-courses/:id", deleteCourse);


export default coursesRouter;