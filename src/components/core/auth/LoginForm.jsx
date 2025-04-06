"use client"
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import {useRouter} from "next/navigation";
// import { login } from "@/services/operations/authAPI"
import Link from "next/link";
// import GoogleAuth from "./GoogleAuth"
// import { ACCOUNT_TYPE } from "../../../utils/constants"

function LoginForm() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // dispatch(login(email, password, router))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Email Address <sup className="text-pink-400">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Password <sup className="text-pink-400">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
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
        <Link href="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-400">
            Forgot Password
          </p>
        </Link>
      </label>
      {/* <GoogleAuth accountType={ACCOUNT_TYPE.DEFAULT}/> */}
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-200 py-[8px] px-[12px] font-medium text-black"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
