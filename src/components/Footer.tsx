import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/4ab958f2-3798-434d-9566-2e7518f18307.png" 
                alt="NMO Brasil" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">NMO Brasil</h3>
                <p className="text-sm text-primary-foreground/80">Associação Brasileira de Pacientes</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Promovendo conscientização e melhor acesso a tratamentos para pacientes com 
              Neuromielite Óptica e doenças do seu espectro.
            </p>
          </div>
          
          {/* Links úteis */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/sobre" className="hover:text-warning transition-colors">Sobre a NMO</a></li>
              <li><a href="/cadastro" className="hover:text-warning transition-colors">Cadastro de Pacientes</a></li>
              <li><a href="/cartao" className="hover:text-warning transition-colors">Cartão de Identificação</a></li>
              <li><a href="/tratamentos" className="hover:text-warning transition-colors">Tratamentos</a></li>
              <li><a href="/privacidade" className="hover:text-warning transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:pesquisa.artenmo@gmail.com" className="hover:text-warning transition-colors">
                  pesquisa.artenmo@gmail.com
                </a>
              </div>
              <p className="text-primary-foreground/80">
                Para dúvidas sobre o cadastro ou informações sobre a NMO.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
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