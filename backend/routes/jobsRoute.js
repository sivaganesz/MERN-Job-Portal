import express from 'express';
import {createPostJob, getAllJobs, getJobById, getAdminJobs} from '../controllers/jobController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route("/createpost").post(isAuthenticated,createPostJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getAdminjobs").get(isAuthenticated,getAdminJobs);

export default router;