import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CadastroStep1 from "@/components/cadastro/CadastroStep1";
import CadastroStep2 from "@/components/cadastro/CadastroStep2";
import CadastroStep3 from "@/components/cadastro/CadastroStep3";

const Cadastro = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { number: 1, title: "Consentimento e Dados Pessoais" },
    { number: 2, title: "Informações sobre NMOSD" },
    { number: 3, title: "Cartão de Identificação" }
  ];

  const progress = (currentStep / 3) * 100;

  const handleNextStep = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (data: any) => {
    const finalData = { ...formData, ...data };
    console.log("Dados finais do cadastro:", finalData);
    // Aqui implementaria o envio dos dados
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-muted py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-4">Cadastro de Pacientes com NMOSD</h1>
            <p className="text-muted-foreground mb-6">
              Seu cadastro é fundamental para melhorarmos o acesso a tratamentos e 
              promovermos a conscientização sobre a Neuromielite Óptica no Brasil.
            </p>
            
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.number
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted-foreground/20 text-muted-foreground"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span className="ml-2 text-sm font-medium hidden sm:inline">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Etapa {currentStep} de {steps.length}
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">{currentStep}</Badge>
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Precisamos do seu consentimento e informações básicas para continuar."}
                {currentStep === 2 && "Agora vamos coletar informações específicas sobre seu diagnóstico e tratamento."}
                {currentStep === 3 && "Por último, você pode solicitar o Cartão de Identificação da Pessoa com NMOSD."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && (
                <CadastroStep1 
                  onNext={handleNextStep}
                  initialData={formData}
                />
              )}
              {currentStep === 2 && (
                <CadastroStep2 
                  onNext={handleNextStep}
                  onPrev={handlePrevStep}
                  initialData={formData}
                />
              )}
              {currentStep === 3 && (
                <CadastroStep3 
                  onSubmit={handleSubmit}
                  onPrev={handlePrevStep}
                  initialData={formData}
                />
              )}
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Dúvidas sobre o cadastro?
            </p>
            <p className="text-sm">
              Entre em contato: <a href="mailto:pesquisa.artenmo@gmail.com" className="text-primary hover:underline">pesquisa.artenmo@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cadastro;