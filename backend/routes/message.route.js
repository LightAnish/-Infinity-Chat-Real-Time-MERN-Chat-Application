import express from 'express';
const router = express.Router();
import { isLoggedin } from '../middlewares/isLoggedin.js';
import { getMessages, sendMessage } from '../controllers/message.controller.js';


router.post('/sendMessage/:receiver',isLoggedin, sendMessage);
router.get('/getMessages/:receiver',isLoggedin, getMessages);

export default router;