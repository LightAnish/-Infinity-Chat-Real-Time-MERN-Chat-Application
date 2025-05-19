import jwt from 'jsonwebtoken';

const generateJwtTokenAndSetCookie = (user,res) => {
  const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign({email:user.email , id:user._id }, secretKey)
    res.cookie('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

}


export default generateJwtTokenAndSetCookie;