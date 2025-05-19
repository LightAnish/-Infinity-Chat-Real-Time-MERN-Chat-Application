import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const isLoggedin =  (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Not authorized' });
        }

      jwt.verify(token, process.env.JWT_SECRET_KEY,async (err, token) => {
            if(err){
                return res.status(401).json({ message: 'Not authorized error' });
            }

            let user = await User.findOne({email: token.email}).select('-password');
            if(!user){
                return res.status(401).json({ message: 'user not found' });
            }

            req.user = user
            next();


      });

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Not authorized error' });
    }
}