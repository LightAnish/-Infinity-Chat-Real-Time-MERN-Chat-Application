import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
    profileImage: {
        type: String,
        default: 'https://res.cloudinary.com/drkubzc4n/image/upload/v1747404940/male_avatar_cndsie.avif',
    },
    // gender: {
    //     type: String,
    //     enum: ['male','female'],
    //     default: 'male'
    // }
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;