import User from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({_id: {$ne: req.user._id}}).select('-password');
        if (!users) {
            return res.status(404).json({ message: 'Users not found' });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(402).json({message:"Server Error"})
    }
}

export const updateProfile = async (req, res) => {
  const { fullName, email, profileImage } = req.body;
  console.log(fullName, email, profileImage);
  

  try {
    // Find existing user
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only update if new values are provided
    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    user.profileImage = profileImage || user.profileImage;

    await user.save();

    return res.status(200).json({ message: "Profile updated successfully" ,user: user});
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
