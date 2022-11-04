import express from 'express';
import 
{addToPlaylist,
changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login,
 logout, register, removeFromPlaylist, resetPassword, updateProfile
 , updateprofilepicture,
 updateUserRole
} 
from "../controllers/userController.js";
import {authorizeAdmin, isAuthenticated} from "../middlewares/auth.js"
import singleUpload from '../middlewares/multer.js';


const router=express.Router();

router.route("/register").post(singleUpload,register);

//login

router.route("/login").post(login);

//logout
router.route("/logout").get(logout);
//getmyprofile
router.route("/me").get(isAuthenticated ,getMyProfile);

//delete my profile

router.route("/me").delete(isAuthenticated ,deleteMyProfile);

//change password
router.route("/changepassword").put(isAuthenticated ,changePassword);

//updateprofile
router.route("/updateprofile").put(isAuthenticated ,updateProfile);

//updateprofilepicture

router.route("/updateprofilepicture").put(isAuthenticated,singleUpload ,updateprofilepicture);

// forgetpaswword
router.route("/forgetpassword").post(forgetPassword);


// resetpassword

router.route("/resetpassword/:token").put(resetPassword);

// add to playlist

router.route("/addtoplaylist").post(isAuthenticated ,addToPlaylist);


//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated ,removeFromPlaylist);



//admin routes

router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers);

router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole);
router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole).delete(isAuthenticated,authorizeAdmin,deleteUser);




export default router;