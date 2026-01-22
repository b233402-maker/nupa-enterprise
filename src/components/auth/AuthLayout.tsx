import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";

interface AuthLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, showBackButton = true }: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Brand Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-auth-bg items-center justify-center p-2 relative">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop"
            alt="NUPA Enterprise"
            className="w-full h-full object-cover"
          />
          {/* Logo Overlay with better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-100/95 via-stone-100/70 to-transparent flex flex-col items-center pt-24">
            <div className="text-center">
              <img src={logo} alt="NUPA Logo" className="w-28 h-auto mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground tracking-wide">NUPA</h2>
              <p className="text-lg font-semibold text-foreground tracking-[0.25em]">ENTERPRISE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center justify-center p-6 bg-auth-bg">
          <div className="text-center">
            <img src={logo} alt="NUPA Logo" className="w-20 h-auto mx-auto mb-2" />
            <h2 className="text-xl font-bold text-foreground">NUPA</h2>
            <p className="text-xs font-semibold text-foreground tracking-widest">ENTERPRISE</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-8 sm:px-12 lg:px-16 xl:px-24">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="mb-6 w-fit p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6 text-foreground" />
            </button>
          )}
          
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;