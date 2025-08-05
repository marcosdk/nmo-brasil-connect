import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CadastroStep1Props {
  onNext: (data: any) => void;
  initialData: any;
}

const CadastroStep1 = ({ onNext, initialData }: CadastroStep1Props) => {
  const [formData, setFormData] = useState({
    consentimentoCompartilhamento: false,
    consentimentoDadosSensiveis: false,
    nomeCompleto: "",
    dataNascimento: "",
    cpf: "",
    identidade: "",
    genero: "",
    endereco: "",
    telefone: "",
    whatsapp: "",
    email: "",
    emailContato: "",
    profissao: "",
    estadoCivil: "",
    escolaridade: "",
    raca: "",
    ...initialData
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentimentoCompartilhamento || !formData.consentimentoDadosSensiveis) {
      alert("É necessário concordar com o compartilhamento de dados para continuar.");
      return;
    }
    
    if (!formData.nomeCompleto || !formData.dataNascimento || !formData.cpf || !formData.email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Consentimentos */}
      <div className="space-y-4">
        <Card className="border-warning">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Shield className="w-5 h-5" />
              Consentimento para Compartilhamento de Dados
            </CardTitle>
            <CardDescription>
              Leia atentamente antes de prosseguir
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="consentimento-compartilhamento"
                checked={formData.consentimentoCompartilhamento}
                onCheckedChange={(checked) => handleInputChange("consentimentoCompartilhamento", checked)}
              />
              <Label htmlFor="consentimento-compartilhamento" className="text-sm leading-relaxed">
                <strong>SIM, Concordo</strong> em compartilhar meus dados com a NMO Brasil e quero receber contatos da organização
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="consentimento-sensiveis"
                checked={formData.consentimentoDadosSensiveis}
                onCheckedChange={(checked) => handleInputChange("consentimentoDadosSensiveis", checked)}
              />
              <Label htmlFor="consentimento-sensiveis" className="text-sm leading-relaxed">
                <strong>SIM, Concordo</strong> em compartilhar meus dados pessoais sensíveis com a NMO Brasil
              </Label>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Seus dados são protegidos conforme nossa Política de Privacidade e serão utilizados apenas para os objetivos da pesquisa e comunicação da NMO Brasil.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Informações Pessoais */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary">Informações Pessoais</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input 
              id="nome"
              value={formData.nomeCompleto}
              onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
            <Input 
              id="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cpf">CPF *</Label>
            <Input 
              id="cpf"
              value={formData.cpf}
              onChange={(e) => handleInputChange("cpf", e.target.value)}
              placeholder="000.000.000-00"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="identidade">Identidade</Label>
            <Input 
              id="identidade"
              value={formData.identidade}
              onChange={(e) => handleInputChange("identidade", e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label>Gênero de Nascimento</Label>
          <RadioGroup 
            value={formData.genero}
            onValueChange={(value) => handleInputChange("genero", value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="feminino" id="feminino" />
              <Label htmlFor="feminino">Feminino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="masculino" id="masculino" />
              <Label htmlFor="masculino">Masculino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao-responder" id="nao-responder" />
              <Label htmlFor="nao-responder">Prefiro não responder</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="endereco">Endereço</Label>
          <Input 
            id="endereco"
            value={formData.endereco}
            onChange={(e) => handleInputChange("endereco", e.target.value)}
            placeholder="Rua, número, bairro, cidade, estado"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input 
              id="telefone"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div>
            <Label>Receber informações por WhatsApp?</Label>
            <RadioGroup 
              value={formData.whatsapp}
              onValueChange={(value) => handleInputChange("whatsapp", value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="whatsapp-sim" />
                <Label htmlFor="whatsapp-sim">SIM</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="whatsapp-nao" />
                <Label htmlFor="whatsapp-nao">NÃO</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">E-mail de Contato *</Label>
            <Input 
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label>Receber informações por e-mail?</Label>
            <RadioGroup 
              value={formData.emailContato}
              onValueChange={(value) => handleInputChange("emailContato", value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="email-sim" />
                <Label htmlFor="email-sim">SIM</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="email-nao" />
                <Label htmlFor="email-nao">NÃO</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label htmlFor="profissao">Profissão</Label>
          <Input 
            id="profissao"
            value={formData.profissao}
            onChange={(e) => handleInputChange("profissao", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="estadoCivil">Estado Civil</Label>
            <Select onValueChange={(value) => handleInputChange("estadoCivil", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solteiro">Solteira(o)</SelectItem>
                <SelectItem value="casado">Casada(o) / União Estável</SelectItem>
                <SelectItem value="divorciado">Divorciada(o) / Separada(o)</SelectItem>
                <SelectItem value="viuvo">Viúva(o)</SelectItem>
                <SelectItem value="nao-responder">Prefiro não responder</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="escolaridade">Escolaridade</Label>
            <Select onValueChange={(value) => handleInputChange("escolaridade", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                <SelectItem value="medio">Ensino Médio</SelectItem>
                <SelectItem value="superior">Ensino Superior</SelectItem>
                <SelectItem value="pos-graduacao">Pós-Graduação</SelectItem>
                <SelectItem value="mestrado">Mestrado</SelectItem>
                <SelectItem value="doutorado">Doutorado</SelectItem>
                <SelectItem value="pos-doutorado">Pós-doutorado</SelectItem>
                <SelectItem value="nenhum">Não concluí nenhum nível de educação formal</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="raca">Raça/Cor</Label>
          <Select onValueChange={(value) => handleInputChange("raca", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preta">Preta</SelectItem>
              <SelectItem value="parda">Parda</SelectItem>
              <SelectItem value="branca">Branca</SelectItem>
              <SelectItem value="indigena">Indígena</SelectItem>
              <SelectItem value="amarela">Amarela</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="w-full md:w-auto">
          Continuar para Próxima Etapa
        </Button>
      </div>
    </form>
  );
};

export default CadastroStep1;