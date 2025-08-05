import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, FileText, CreditCard, Stethoscope, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-accent to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Juntos por uma vida melhor com
              <span className="block text-warning">NMOSD</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Promovendo conscientização e melhor acesso a tratamentos para pacientes com 
              Neuromielite Óptica e doenças do seu espectro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="warning"
                onClick={() => window.location.href = '/cadastro'}
                className="text-lg px-8 py-3"
              >
                <FileText className="w-5 h-5 mr-2" />
                Fazer Cadastro
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.href = '/sobre'}
              >
                <Heart className="w-5 h-5 mr-2" />
                Sobre a NMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Nossos Objetivos</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que seu cadastro é importante?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada cadastro nos ajuda a ter uma visão mais clara da realidade dos pacientes com NMOSD no Brasil
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Mapear Pacientes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Levantar o número de pacientes com NMOSD no Brasil
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Acesso a Medicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Avaliar e melhorar o acesso aos tratamentos necessários
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gerar dados para melhorias no acesso a tratamentos
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Conscientização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Promover conhecimento sobre a NMOSD na sociedade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cartão Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Cartão de Identificação</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Cartão de Identificação da Pessoa com NMOSD
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Um documento que comprova o diagnóstico e oferece benefícios em estabelecimentos 
                  públicos e privados, facilitando o acesso a serviços especiais.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    R$ 40,00
                  </Badge>
                  <span className="text-muted-foreground">
                    Inclui confecção + frete
                  </span>
                </div>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/cartao'}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Saiba Mais
                </Button>
              </div>
              
              <Card className="border-warning">
                <CardHeader>
                  <CardTitle className="text-warning">Benefícios do Cartão</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span>Comprovação oficial do diagnóstico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span>Acesso facilitado a serviços de saúde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span>Descontos em estabelecimentos parceiros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span>Identificação para emergências médicas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Faça parte da nossa comunidade
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Seu cadastro é gratuito, simples e rápido. Juntos podemos fazer a diferença 
            na vida de pessoas com NMOSD em todo o Brasil.
          </p>
          <Button 
            size="lg" 
            variant="warning"
            onClick={() => window.location.href = '/cadastro'}
            className="text-lg px-8 py-3"
          >
            Cadastrar Agora
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4">
            Dúvidas? Entre em contato: pesquisa.artenmo@gmail.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
