import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthButton from "@/components/auth/AuthButton";
import OtpInput from "@/components/auth/OtpInput";

const VerificationCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(24);
  const [canResend, setCanResend] = useState(false);

  // Get email from session storage (demo purpose)
  const email = sessionStorage.getItem("resetEmail") || "z***@gmail.com";
  const maskedEmail = email.includes("@")
    ? email.slice(0, 2) + "•••••" + email.slice(email.indexOf("@") - 1)
    : email;

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    console.log("Resend verification code");
    setTimer(24);
    setCanResend(false);
  };

  const handleComplete = (code: string) => {
    setOtp(code);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 5) {
      console.log("Verify OTP:", otp);
      navigate("/reset-password");
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Verification Code
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We sent you verification code on.....{maskedEmail}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <OtpInput length={5} onComplete={handleComplete} />

          <div className="text-right">
            {canResend ? (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm text-foreground font-medium hover:underline"
              >
                Resend Code
              </button>
            ) : (
              <span className="text-sm text-muted-foreground">
                Resend Code:{" "}
                <span className="text-foreground font-medium">{formatTime(timer)}</span>
              </span>
            )}
          </div>

          <AuthButton type="submit" disabled={otp.length !== 5}>
            Send Verification Code
          </AuthButton>
        </form>
      </div>
    </AuthLayout>
  );
};

export default VerificationCode;