'use client'
import LoginForm from "@/components/core/auth/LoginForm";
import Template from "@/components/core/auth/Template";

function Login() {

    return (
            <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image="/login.webp"
    >
      <LoginForm />
    </Template>
    )
}

export default Login
