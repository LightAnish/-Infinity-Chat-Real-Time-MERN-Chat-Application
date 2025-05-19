import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../contexts/Auth.context";
import { NavLink, useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const {user, setUser} = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    const validateConfirmPassword = (value) => {        
    return value === watch("password") || "Confirm Passwords do not match to Password";
    }

  const onSubmit = (data) => {
    const { fullName, email, password, confirmPassword } = data;

    const userInfo = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    
    axios
      .post("http://localhost:4001/api/auth/signup", userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("User created successfully", response);
          // Handle success (e.g., navigate to another page)
          localStorage.setItem("chatApp", JSON.stringify(response.data.user));
          setUser(response.data.user);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error.response.data.message
        );
        toast.error(error.response.data.message)
        // Handle error (e.g., show error message)
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-ghost ">
      <ToastContainer/>
      <div className="w-full md:w-1/3 bg-white h-screen md:h-[90%] rounded-2xl px-8 py-10">
        <div>
          <h1 className="text-3xl text-black font-medium text-center mb-6">
            Infinity <span className="text-primary ">Chat</span>
          </h1>
          <h1 className="text-xl text-black font-medium text-center">
            Crete Your Account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-y-2 mt-4"
        >
          {/* fullname */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black text-[15px]">
                Full Name
              </legend>
              <input
                type="text"
                className="input w-full bg-gray-300 text-black font-semibold"
                placeholder="Enter Your Full Name"
                {...register("fullName")}
              />
            </fieldset>
          </div>

          {/* gender */}
          {/* <fieldset className="fieldset ">
        <legend className="fieldset-legend text-black  text-[15px]">Gender</legend>
        <select defaultValue="Pick a browser" className="select text-black bg-gray-300 w-full">
            <option disabled={true}>Select gender</option>
            <option>Male</option>
            <option>Female</option>
        </select>
        <span className="label">Optional</span>
        </fieldset> */}

          {/* email */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black text-[15px]">
                Email
              </legend>
              <label className="input validator w-full bg-gray-300 text-black">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required  {...register("email")} />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </fieldset>
          </div>

          {/* password */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend  text-black text-[15px]">
                Password
              </legend>
              <div>
                <label className="input validator bg-gray-300 text-black w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    required
                    placeholder="Password"
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                     {...register("password")}
                  />

                  {showPassword ? (
                    <FaEye
                      onClick={() => setShowPassword(false)}
                      className="text-2xl cursor-pointer hover:text-gray-700 duration-300"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword(true)}
                      className="text-2xl cursor-pointer hover:text-gray-700 duration-300"
                    />
                  )}
                </label>


                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
              </div>
            </fieldset>
          </div>

          {/* confirm password */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black text-[15px]">
                Confirm Password
              </legend>
              <div>
                <label className="input validator bg-gray-300 text-black w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    required
                    placeholder="Password"
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                     {...register("confirmPassword",{required: true,validate: validateConfirmPassword})}
                  />
                  {showConfirmPassword ? (
                    <FaEye
                      onClick={() => setShowConfirmPassword(false)}
                      className="text-2xl cursor-pointer hover:text-gray-700 duration-300"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowConfirmPassword(true)}
                      className="text-2xl cursor-pointer hover:text-gray-700 duration-300"
                    />
                  )}
                </label>
    
                   {errors.confirmPassword && (<p className="text-error">{errors.confirmPassword.message}</p>)}
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
              </div>
            </fieldset>
          </div>

          <button type="submit" className="btn btn-primary mt-6">SignUp</button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <p className="text-black text-[15px]">Already have an account?</p>
          <NavLink
            to="/auth/login"
            className="text-primary font-semibold text-[15px] ml-2"
          >
            Login
          </NavLink>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;
