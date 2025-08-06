
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, ArrowLeft, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CadastroStep3Props {
  onSubmit: (data: any) => void;
  onPrev: () => void;
  initialData: any;
}

const CadastroStep3 = ({ onSubmit, onPrev, initialData }: CadastroStep3Props) => {
  const [formData, setFormData] = useState({
    desejCartao: "",
    nomeCartao: "",
    cpfNoCartao: "",
    identidadeNoCartao: "",
    convenio: "",
    cartaoSus: "",
    infoConvenioSus: "",
    alergia: "",
    tipoSanguineo: "",
    contatoEmergencia: "",
    contatoMedico: "",
    hospitalAcompanhamento: "",
    infoMedicoHospital: "",
    ...initialData
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      alert("Cadastro realizado com sucesso! Obrigado por participar.");
    } catch (error) {
      alert("Erro ao enviar cadastro. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border-secondary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-secondary">
            <CreditCard className="w-5 h-5" />
            Cartão de Identificação da Pessoa com NMOSD
          </CardTitle>
          <CardDescription>
            Um documento que comprova seu diagnóstico e oferece benefícios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>O que é o Cartão de Identificação?</strong><br />
              É um documento oficial que comprova o diagnóstico de NMOSD e pode oferecer benefícios 
              em estabelecimentos públicos e privados, facilitando o acesso a serviços e tratamentos especiais.
            </AlertDescription>
          </Alert>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">Benefícios do Cartão</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Comprovação oficial do diagnóstico de NMOSD
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Acesso facilitado a serviços de saúde
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Possíveis descontos em estabelecimentos parceiros
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Documento de identificação para emergências médicas
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-primary border-primary">
                Investimento
              </Badge>
              <span className="text-2xl font-bold text-primary">R$ 40,00</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Valor inclui a confecção do cartão personalizado + frete para sua residência
            </p>
          </div>

          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Deseja solicitar o Cartão de Identificação da Pessoa com NMOSD?
            </Label>
            <RadioGroup 
              value={formData.desejCartao}
              onValueChange={(value) => handleInputChange("desejCartao", value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="cartao-sim" />
                <Label htmlFor="cartao-sim" className="flex-1">
                  <div>
                    <div className="font-medium">SIM, quero solicitar o cartão</div>
                    <div className="text-sm text-muted-foreground">
                      Você receberá instruções de pagamento por e-mail
                    </div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="cartao-nao" />
                <Label htmlFor="cartao-nao" className="flex-1">
                  <div>
                    <div className="font-medium">NÃO, não desejo o cartão no momento</div>
                    <div className="text-sm text-muted-foreground">
                      Você pode solicitar posteriormente
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.desejCartao === "sim" && (
            <div className="space-y-6">
              <Alert className="border-accent">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Próximos passos:</strong><br />
                  Após finalizar o cadastro, você receberá um e-mail com as instruções 
                  de pagamento e os dados necessários para a confecção do seu cartão.
                </AlertDescription>
              </Alert>

              <Card className="border-secondary">
                <CardHeader>
                  <CardTitle className="text-secondary">Dados para o Cartão de Identificação</CardTitle>
                  <CardDescription>
                    Preencha as informações que devem constar no seu cartão
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="space-y-2">
                    <Label htmlFor="nomeCartao" className="text-base font-semibold">
                      Nome para o Cartão *
                    </Label>
                    <Input
                      id="nomeCartao"
                      value={formData.nomeCartao}
                      onChange={(e) => handleInputChange("nomeCartao", e.target.value)}
                      placeholder="Digite o nome que deve aparecer no cartão"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Quer que o seu CPF conste no cartão? *
                    </Label>
                    <RadioGroup 
                      value={formData.cpfNoCartao}
                      onValueChange={(value) => handleInputChange("cpfNoCartao", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="cpf-sim" />
                        <Label htmlFor="cpf-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="cpf-nao" />
                        <Label htmlFor="cpf-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Quer que a sua identidade conste no cartão? *
                    </Label>
                    <RadioGroup 
                      value={formData.identidadeNoCartao}
                      onValueChange={(value) => handleInputChange("identidadeNoCartao", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="identidade-sim" />
                        <Label htmlFor="identidade-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="identidade-nao" />
                        <Label htmlFor="identidade-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="convenio" className="text-base font-semibold">
                      Convênio
                    </Label>
                    <Input
                      id="convenio"
                      value={formData.convenio}
                      onChange={(e) => handleInputChange("convenio", e.target.value)}
                      placeholder="Nome do convênio médico"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cartaoSus" className="text-base font-semibold">
                      Cartão SUS
                    </Label>
                    <Input
                      id="cartaoSus"
                      value={formData.cartaoSus}
                      onChange={(e) => handleInputChange("cartaoSus", e.target.value)}
                      placeholder="Número do Cartão SUS"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      No caso de ter convênio e cartão do SUS, qual informação você quer que conste no seu cartão de identificação? *
                    </Label>
                    <RadioGroup 
                      value={formData.infoConvenioSus}
                      onValueChange={(value) => handleInputChange("infoConvenioSus", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sus" id="info-sus" />
                        <Label htmlFor="info-sus">SUS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="convenio" id="info-convenio" />
                        <Label htmlFor="info-convenio">Convênio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nenhum" id="info-nenhum" />
                        <Label htmlFor="info-nenhum">Nenhum</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="alergia" className="text-base font-semibold">
                      Alergia
                    </Label>
                    <Input
                      id="alergia"
                      value={formData.alergia}
                      onChange={(e) => handleInputChange("alergia", e.target.value)}
                      placeholder="Informações sobre alergias"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tipoSanguineo" className="text-base font-semibold">
                      Tipo Sanguíneo
                    </Label>
                    <Input
                      id="tipoSanguineo"
                      value={formData.tipoSanguineo}
                      onChange={(e) => handleInputChange("tipoSanguineo", e.target.value)}
                      placeholder="Ex: A+, O-, AB+, etc."
                    />
                    <p className="text-sm text-muted-foreground">
                      Para incluir no cartão é necessário enviar comprovação
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contatoEmergencia" className="text-base font-semibold">
                      Contato de Emergência (Nome e telefone) *
                    </Label>
                    <Textarea
                      id="contatoEmergencia"
                      value={formData.contatoEmergencia}
                      onChange={(e) => handleInputChange("contatoEmergencia", e.target.value)}
                      placeholder="Nome: João Silva | Telefone: (11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contatoMedico" className="text-base font-semibold">
                      Contato Médico
                    </Label>
                    <Textarea
                      id="contatoMedico"
                      value={formData.contatoMedico}
                      onChange={(e) => handleInputChange("contatoMedico", e.target.value)}
                      placeholder="Dr. João Silva | Telefone: (11) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hospitalAcompanhamento" className="text-base font-semibold">
                      Hospital onde faz acompanhamento
                    </Label>
                    <Input
                      id="hospitalAcompanhamento"
                      value={formData.hospitalAcompanhamento}
                      onChange={(e) => handleInputChange("hospitalAcompanhamento", e.target.value)}
                      placeholder="Nome do hospital"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      No caso de contato médico e hospital de acompanhamento, qual informação você quer que conste no seu cartão de identificação? *
                    </Label>
                    <RadioGroup 
                      value={formData.infoMedicoHospital}
                      onValueChange={(value) => handleInputChange("infoMedicoHospital", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contato-medico" id="info-medico" />
                        <Label htmlFor="info-medico">Contato Médico</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hospital-acompanhamento" id="info-hospital" />
                        <Label htmlFor="info-hospital">Hospital de Acompanhamento</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nenhum" id="info-medico-nenhum" />
                        <Label htmlFor="info-medico-nenhum">Nenhum</Label>
                      </div>
                    </RadioGroup>
                  </div>

                </CardContent>
              </Card>
            </div>
          )}

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-accent">Finalização do Cadastro</CardTitle>
          <CardDescription>
            Confirme se todas as informações estão corretas antes de enviar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Lembre-se:</strong><br />
              • Seus dados são protegidos conforme nossa Política de Privacidade<br />
              • O cadastro é gratuito e pode ser atualizado posteriormente<br />
              • Você receberá uma confirmação por e-mail<br />
              • Para dúvidas: pesquisa.artenmo@gmail.com
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Etapa Anterior
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
        </Button>
      </div>
    </form>
  );
};

export default CadastroStep3;
