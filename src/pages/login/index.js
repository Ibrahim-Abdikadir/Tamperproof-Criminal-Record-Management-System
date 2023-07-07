/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../api/hooks/useAuth";

import {
  displaySuccessMessage,
  displayErrorMessage,
} from "../../components/toast/Toast";
import { AuthContext } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState({ police: true, forensic: false });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const loginMutation = useLogin();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await loginMutation.mutateAsync(formData);
      dispatch(setUser(response));
      dispatch(setToken(response.token));
      // console.log(response.token);
      console.log(response.token, response.role);
      // if (response.role) localStorage.setItem("role", response.role);

      localStorage.setItem("role", response.role);

      if (response.token && response.role === "police") {
        localStorage.setItem("userToken", response.token);
        setIsAuthenticated(true);
        displaySuccessMessage("Login successfull");
        navigate("/");
      } else if (
        (response.token && response.role === "forensic") ||
        response.role === "forensics"
      ) {
        localStorage.setItem("userToken", response.token);
        setIsAuthenticated(true);
        displaySuccessMessage("Login successfull");
        navigate("/forensic");
      } else if (
        (response.token && response.role === "admin") ||
        response.role === "admin"
      ) {
        localStorage.setItem("userToken", response.token);
        setIsAuthenticated(true);
        displaySuccessMessage("Login successfull");
        navigate("/admin");
      }
      else if (
        (response.token && response.role === "immigration") ||
        response.role === "courts"
      ) {
        localStorage.setItem("userToken", response.token);
        setIsAuthenticated(true);
        displaySuccessMessage("Login successfull");
        navigate("/immigration");
      }
    } catch (error) {
      displayErrorMessage("Some error occured");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen sm:bg-zinc-900/90  bg-gray-400   ">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay hidden  md:block"
        src="https://res.cloudinary.com/itgenius/image/upload/v1683377164/matt-popovich-7mqsZsE6FaU-unsplash_c7ywzi.jpg"
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white rounded-[24px] p-8">
          <h2 className="text-4xl font-bold text-center py-4 font-sans text-gray-700">
            LOGIN
          </h2>

          <div className="flex flex-col mb-4">
            <label className="text-gray-900 font-sans font-bold">Email</label>
            <input
              className="border relative bg-gray-100 p-2 rounded-md "
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-900 font-sans font-bold">
              Password
            </label>
            <input
              className="border relative bg-gray-100 p-2 rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-3 mt-8 bg-indigo-600 rounded-md hover:bg-indigo-500 relative text-white"
          >
            {loading ? (
              <div className="text-white text-center  font-bold">
                Authenticating.....
              </div>
            ) : (
              "Sign In"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}
