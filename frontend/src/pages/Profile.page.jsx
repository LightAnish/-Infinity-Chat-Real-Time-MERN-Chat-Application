import React, { use, useEffect, useState } from "react";
import { useAuth } from "../contexts/Auth.context";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const [editable, setEditable] = useState(false);
  const { user ,setUser} = useAuth();
  const [preview, setPreview] = useState(user?.profileImage);
  const [file, setFile] = useState(null);
  const [name, setName] = useState(user?.fullName);
  const [email, setEmail] = useState(user?.email);

 
  
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


const handleImageChange = (e) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;

  setFile(selectedFile);
  const imageUrl = URL.createObjectURL(selectedFile);
  setPreview(imageUrl); // show image preview
};

const HandleUploadImage = async (e) => {
  e.preventDefault();
  if (!file) return alert("Please select a file");

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=211dbefc6bca477cc2d0ea76251319d2`,
      formData
    );
    const imageUrl = res.data.data.url;

   const response = await axios.post('http://localhost:4001/api/users/updateprofile',{profileImage: imageUrl},{withCredentials: true}  )
   
    const storedUser = localStorage.getItem('chatApp');

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        userData.profileImage = imageUrl;

        localStorage.setItem('chatApp', JSON.stringify(userData));
        console.log("Profile image updated in localStorage.");
      } catch (error) {
        console.error("Failed to update profileImage in localStorage:", error);
      }
}
   
   

    setPreview(imageUrl); // Update preview with uploaded version
    alert("Image uploaded successfully!");

    // Optionally: save imageUrl to your backend or update user context
    console.log("Uploaded image URL:", imageUrl);
  } catch (error) {
    console.error("Image upload failed:", error);
    alert("Upload failed. Please try again.");
  }
};


  const onSubmit = async(data) => {


   try {
     const response = await axios.post('http://localhost:4001/api/users/updateprofile',{  fullName: data.fullName,
    email: data.email},{withCredentials: true}  )
    //  console.log(response);
     
     const storedUser = localStorage.getItem('chatApp');

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        userData.fullName = data.fullName;
        userData.email = data.email;

        localStorage.setItem('chatApp', JSON.stringify(userData));
        console.log("User information updated in localStorage.");
      } catch (error) {
        console.error("Failed to update user information in localStorage:", error);
      }
    }

    console.log("User information updated successfully!");
   } catch (error) {
      console.log(error);
   }
  };

  return (
    <div className="w-full h-screen flex text-black">
      {/* back */}

      <div className="hidden md:block md:w-[20%] h-full bg-white p-8">
        <h1 className="text-xl font-medium text-primary">General</h1>
        <ul className="mt-2 pl-2">
          <li className="cursor-pointer font-mono hover:text-purple-700  duration-300">
            Profile
          </li>
          <li className="cursor-pointer font-mono hover:text-purple-700  duration-300">
            Chats
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[80%] h-full bg-gray-100 p-10">
   <div className="flex items-center">           <NavLink to="/chats"> <IoMdArrowRoundBack className="w-6 h-6 mr-6 text-gray-500" /></NavLink>
        <h1 className="text-3xl font-bold mb-4">Profile</h1></div>
        <form onSubmit={HandleUploadImage} action="">
          <div>
            <label htmlFor="profilePic">
              <div className="avatar cursor-pointer">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img draggable={false} src={preview} />
                </div>
              </div>
            </label>

            <button className="btn btn-primary ml-4" type="submit">Upload image</button>
            <input
              // onChange={handleImage}
              className="hidden"
              type="file"
              name="profilePic"
              id="profilePic"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          
          <h1 className="text-xl font-semibold mt-4 mb-8">User Details</h1>
        </form>

        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="md:p-4 space-y-4">
            {/* profile image */}

            {/* fullname */}
            <div className="w-full md:w-1/2 flex justify-between items-center">
              <label htmlFor="">Full Name</label>
              <input
             
                defaultValue={user?.fullName}
                disabled={!editable}
                className="p-2 border-1 rounded-lg"
                type="text"
                placeholder="Enter Your Name"
                {...register("fullName")}
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-between items-center">
              <label htmlFor="">Email</label>
              <input
                defaultValue={user?.email}
                disabled={!editable}
                className="p-2 border-1 rounded-lg"
                type="text"
                placeholder="Enter Your Name"
                {...register("email")}
              />
            </div>
            {/* <div className=' w-1/2 flex justify-between items-center'>
                  <label htmlFor="">Password</label>
                  <input disabled={editable ? false : true} className='p-2 border-1 rounded-lg' type="text" placeholder='Enter Your Name' />
                </div> */}

            {editable ? (
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            ) : (
              <input
                onClick={() => setEditable(true)}
                className="btn btn-primary w-32 "
                value={"Edit"}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
