import SignupForm from "@/components/core/auth/SignupForm";
import Template from "@/components/core/auth/Template";

function signup() {

    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image="/signup.webp"
        >
            <SignupForm />
        </Template>
    )
}

export default signup
