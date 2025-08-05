import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/4ab958f2-3798-434d-9566-2e7518f18307.png" 
              alt="NMO Brasil" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">NMO Brasil</h1>
              <p className="text-sm text-primary-foreground/80">Associação Brasileira de Pacientes de Neuromielite Óptica</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;