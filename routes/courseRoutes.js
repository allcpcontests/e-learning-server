import express from 'express';
import { addLecture, createcourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from '../controllers/courseController.js';
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router=express.Router();

//Get All courses without lectures

router.route("/courses").get(getAllCourses);

//create new course only admin protected
router.route("/createcourse").post(isAuthenticated,authorizeAdmin,singleUpload,createcourse);

//add lecture , delete lecture , get course details
router.route("/course/:id").get(isAuthenticated,authorizeSubscribers,getCourseLectures)
.post( isAuthenticated, authorizeAdmin,singleUpload, addLecture)
.delete(isAuthenticated,authorizeAdmin,deleteCourse);



//delete lecture

router.route("/lecture")
.delete(isAuthenticated,authorizeAdmin,deleteLecture);

export default router;