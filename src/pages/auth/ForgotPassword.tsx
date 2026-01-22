import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Send verification code to:", email);
      // Store email for verification page
      sessionStorage.setItem("resetEmail", email);
      navigate("/verification");
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Forgot Password
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll send a verification code to your email address
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            label="Email Address"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            error={error}
          />

          <AuthButton type="submit">Send Verification Code</AuthButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;