import express from 'express';
import { isLoggedin } from '../middlewares/isLoggedin.js';
import { getAllUsers, updateProfile } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/allusers',isLoggedin,getAllUsers)
router.post('/updateprofile',isLoggedin,updateProfile)


export default router;