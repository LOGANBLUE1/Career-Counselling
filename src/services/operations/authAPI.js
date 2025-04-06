import { toast } from "react-hot-toast"

import {setLoading, setToken } from "@/store/slices/authSlice"
import {setUser } from "@/store/slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import {HTTP_STATUS_CODE} from "@/utils/constants";
import { HTTP_METHODS } from "@/utils/constants"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  GOOGLE_LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, router) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      // console.log('Before going to apiCaller')
      const response = await apiConnector(HTTP_METHODS.POST, SENDOTP_API, {
        email,
        // checkUserPresent: true,
      })
      // console.log("SENDOTP API RESPONSE............", response)

      if (!response.success) {
        toast.error(response.message)
        return;
      }

      toast.success("OTP Sent Successfully")
      router.push("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    } finally {
      // dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  router
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      const response = await apiConnector(HTTP_METHODS.POST, SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      // console.log("SIGNUP API RESPONSE............", response)

      if (!response.success) {
        toast.error(response.message);
        if(response.status === HTTP_STATUS_CODE.Conflict)
          router.push("/login")
        return;
      }

      toast.success("Signup Successful")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      router.push("/signup")
    } finally {
      // dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}

// export function login(
//   email,
//   password,
//   router
// ) {
//   return async (dispatch) => {
//     console.log("Inside login :", email, password)
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector(HTTP_METHODS.POST, LOGIN_API, {
//         email,
//         password,
//       })
//       console.log("Backend Url: ", process.env.REACT_APP_BASE_URL);
//
//       // console.log("LOGIN API RESPONSE............", response)
//
//       // if user does not exist
//       if (!response.success) {
//         toast.error(response.message);
//         if(response.status === HTTP_STATUS_CODE.NotFound)
//           router.push("/signup")
//         return;
//       }
//
//       toast.success("Login Successful")
//       dispatch(setToken(response.token))
//       const userImage = response?.user?.image ??
//         `https://api.dicebear.com/5.x/initials/svg?seed=${response.user.firstName} ${response.user.lastName}`
//
//       dispatch(setUser({ ...response.user, image: userImage }))
//       localStorage.setItem("token", JSON.stringify(response.token))
//       router.push("/dashboard/my-profile")
//     } catch (error) {
//       console.log("LOGIN API ERROR............", error)
//       toast.error("Login Failed")
//     } finally {
//       dispatch(setLoading(false))
//       toast.dismiss(toastId)
//     }
//   }
// }

export function getPasswordResetToken(
  email, 
  setEmailSent
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector(HTTP_METHODS.POST, RESETPASSTOKEN_API, {
        email,
      })

      // console.log("RESETPASSTOKEN RESPONSE............", response)

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    } finally {
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
}

export function resetPassword(
  password, 
  confirmPassword, 
  token, 
  router
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector(HTTP_METHODS.POST, RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      // console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success("Password Reset Successfully")
      router.push("/login")
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    } finally {
      toast.dismiss(toastId)
      dispatch(setLoading(false))
    }
  }
}

export function logout(router) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    router.push("/")
  }
}
