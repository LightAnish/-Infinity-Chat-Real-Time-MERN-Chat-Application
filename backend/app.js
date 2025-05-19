import express from 'express';
// const app = express();
import { server,app,io } from './server.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './db/connectDb.js';
connectDb();

import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import chatRoutes from './routes/message.route.js';
import cookieParser from 'cookie-parser';
app.use(cors(
  {
    origin: process.env.CLIENT_URL || "https://infinity-chat-real-time-mern-chat-application-tpiv.vercel.app",
    credentials: true,
  }
));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/chats', chatRoutes)

// app.get('/',(req,res)=>{
//   console.log(req.cookies.token);
  
// })

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});