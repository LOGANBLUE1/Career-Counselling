"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {Mail, Lock, User, Facebook, Twitter} from 'lucide-react';
import { login } from "../../../services/operations/authAPI"


import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "@/store/slices/authSlice"
import { setUser } from "@/store/slices/profileSlice";
// import { ACCOUNT_TYPE } from "../../../utils/constants"
// import google from "/images/assets/Logo/gogole.png"



function SignupForm({name}) {
  const navigate = useRouter();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Password regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Password Validation
    // if (!passwordRegex.test(password)) {
    //   console.log("pwd error")
    //   toast.error("Password must be at least 6 characters long and include Number, lowercase letter, uppercase letter, and special character.");
    //   return;
    // }

    if(name == "signup") {
      if(password !== confirmPassword) {
        console.log("pwd error2")
        toast.error("Passwords do not match.");
        return;
      }

      const signupData = {
        ...formData,
        // accountType,
      };
      console.log("123")
      // Setting signup data to state
      dispatch(setUser(signupData));
      dispatch(setSignupData(signupData));
      // Send OTP to user for verification
      dispatch(sendOtp(formData.email, navigate));
    } else {
      // const signupData = {
      //   ...formData,
      // };
      // dispatch(setSignupData(signupData));
      // console.log("login data", email, password);
      dispatch(login(email, password, navigate));
    }

    // Reset form
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
    // setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  return (
  <form onSubmit={handleOnSubmit}>
      <Card className="bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] w-full max-w-md m-2">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">{name == "signup" ? "Create Account" : "Welcome"}</h2>
        <div className="space-y-4">
        {name == "signup" && 
          <>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
            <div className="relative">
              <Input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="pl-10 text-gray-700"
              />
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500"/>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <div className="relative">
              <Input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="pl-10 text-gray-700"
              />
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-500"/>
            </div>
          </div>
          </>
        }
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="pl-10 text-gray-700"
              />
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500"/>
            </div>
          </div>

          <label className="relative">
            <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-pink-200">*</sup>
            </p>              
            <Input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
              className="form-style w-full !pr-10 text-gray-700"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          {name == "signup" && 
              <label className="relative">
                <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </p>              
                <Input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="form-style w-full !pr-10 text-gray-700"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
          }

          <Button onSubmit={handleOnSubmit} className="block mt-4 mx-auto w-[80%] text-white font-bold">{name == "signup" ? "Signup" : "Login"}</Button>
          <div className="text-center text-gray-500">OR</div>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-blue-500 hover:text-blue-700"><Facebook className="h-6 w-6"/></Link>
            <Link href="#" className="text-red-500 hover:text-red-700"><Mail className="h-6 w-6"/></Link>
            <Link href="#" className="text-blue-400 hover:text-blue-600"><Twitter className="h-6 w-6"/></Link>
          </div>
          <p className="text-sm text-center">
            {name == "signup" ? "Already have an account?" : "Don't have an account?"} <Link href={name == "login" ? "/signup" : "/login"} className="text-primary">{name == "signup" ? "Login" : "Signup"}</Link>
          </p>
        </div>
      </CardContent>
    </Card>
  </form>
  )
}


export default SignupForm;