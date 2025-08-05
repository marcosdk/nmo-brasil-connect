import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
            <span>© 2024 NMO Brasil. Feito com</span>
            <Heart className="w-4 h-4 text-warning fill-current" />
            <span>para a comunidade NMO.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;