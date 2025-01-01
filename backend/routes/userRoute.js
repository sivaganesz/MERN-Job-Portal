import express from 'express';
import { register, login,logout, updateProfile } from '../controllers/userController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import  {singleUpload}  from '../middleware/multipar.js';

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;
