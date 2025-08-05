import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar com contatos */}
        <div className="flex justify-end items-center py-2 text-sm text-primary-foreground/80 border-b border-primary-foreground/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>pesquisa.artenmo@gmail.com</span>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/4ab958f2-3798-434d-9566-2e7518f18307.png" 
              alt="NMO Brasil" 
              className="h-16 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary-foreground">NMO Brasil</h1>
              <p className="text-sm text-primary-foreground/80">Associação Brasileira de Pacientes de Neuromielite Óptica</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-primary-foreground hover:text-warning transition-colors">Início</a>
            <a href="/sobre" className="text-primary-foreground hover:text-warning transition-colors">Sobre a NMO</a>
            <a href="/cadastro" className="text-primary-foreground hover:text-warning transition-colors">Cadastro</a>
            <a href="/cartao" className="text-primary-foreground hover:text-warning transition-colors">Cartão de Identificação</a>
            <a href="/contato" className="text-primary-foreground hover:text-warning transition-colors">Contato</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="secondary" 
              className="hidden md:inline-flex"
              onClick={() => window.location.href = '/cadastro'}
            >
              Fazer Cadastro
            </Button>
            <Button variant="outline" size="icon" className="lg:hidden text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;