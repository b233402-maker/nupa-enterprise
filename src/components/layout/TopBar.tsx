import { Phone, Facebook, Instagram, Twitter } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+013 456 25 440</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
