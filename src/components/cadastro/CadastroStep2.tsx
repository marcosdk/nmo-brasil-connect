import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, ArrowLeft, Upload } from "lucide-react";

interface CadastroStep2Props {
  onNext: (data: any) => void;
  onPrev: () => void;
  initialData: any;
}

const CadastroStep2 = ({ onNext, onPrev, initialData }: CadastroStep2Props) => {
  const [formData, setFormData] = useState({
    anoDiagnostico: "",
    medicoHospital: "",
    tipoExame: "",
    sequelas: [] as string[],
    tratamentos: "",
    tipoTratamento: "",
    outrosDiagnosticos: "",
    laudoMedico: null as File | null,
    documentoFoto: null as File | null,
    ...initialData
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [field]: file });
  };

  const handleSequelaChange = (sequela: string, checked: boolean) => {
    if (checked) {
      setFormData({ 
        ...formData, 
        sequelas: [...formData.sequelas, sequela] 
      });
    } else {
      setFormData({ 
        ...formData, 
        sequelas: formData.sequelas.filter(s => s !== sequela) 
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.anoDiagnostico || !formData.medicoHospital) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent">
            <Stethoscope className="w-5 h-5" />
            Informações sobre NMOSD
          </CardTitle>
          <CardDescription>
            Dados sobre seu diagnóstico e tratamento atual
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Diagnóstico */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Diagnóstico</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="anoDiagnostico">Ano do Diagnóstico *</Label>
                <Input 
                  id="anoDiagnostico"
                  type="number"
                  min="1950"
                  max={new Date().getFullYear()}
                  value={formData.anoDiagnostico}
                  onChange={(e) => handleInputChange("anoDiagnostico", e.target.value)}
                  placeholder="2024"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="medicoHospital">Quem fez o diagnóstico? *</Label>
                <Input 
                  id="medicoHospital"
                  value={formData.medicoHospital}
                  onChange={(e) => handleInputChange("medicoHospital", e.target.value)}
                  placeholder="Nome do médico ou hospital"
                  required
                />
              </div>
            </div>

            <div>
              <Label>Você possui?</Label>
              <RadioGroup 
                value={formData.tipoExame}
                onValueChange={(value) => handleInputChange("tipoExame", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aqp4-positivo" id="aqp4-positivo" />
                  <Label htmlFor="aqp4-positivo">Aquaporina-4 POSITIVO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aqp4-negativo" id="aqp4-negativo" />
                  <Label htmlFor="aqp4-negativo">Aquaporina-4 NEGATIVO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mog-positivo" id="mog-positivo" />
                  <Label htmlFor="mog-positivo">MOG POSITIVO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao-sei" id="nao-sei" />
                  <Label htmlFor="nao-sei">Não sei/Não quero informar</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Sequelas */}
          <div className="space-y-4">
            <Label>Sequelas (pode selecionar mais de uma opção)</Label>
            <div className="space-y-3">
              {[
                { id: "fisicas", label: "Físicas/Motoras" },
                { id: "visuais", label: "Visuais" },
                { id: "cognitivas", label: "Cognitivas" },
                { id: "sensoriais", label: "Sensoriais" },
                { id: "nenhuma", label: "Nenhuma" },
                { id: "outro", label: "Outro" }
              ].map((sequela) => (
                <div key={sequela.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={sequela.id}
                    checked={formData.sequelas.includes(sequela.id)}
                    onCheckedChange={(checked) => handleSequelaChange(sequela.id, checked as boolean)}
                  />
                  <Label htmlFor={sequela.id}>{sequela.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Tratamentos */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="tratamentos">Quais tratamentos você faz para NMO? (medicamentos e outros)</Label>
              <Textarea 
                id="tratamentos"
                value={formData.tratamentos}
                onChange={(e) => handleInputChange("tratamentos", e.target.value)}
                placeholder="Descreva os medicamentos e tratamentos que você utiliza"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="tipoTratamento">Como você faz o seu tratamento para NMO?</Label>
              <Select onValueChange={(value) => handleInputChange("tipoTratamento", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sus">Pelo SUS</SelectItem>
                  <SelectItem value="plano-saude">Pelo Plano de Saúde</SelectItem>
                  <SelectItem value="particular">Particular</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="outrosDiagnosticos">Tem algum outro diagnóstico?</Label>
              <Textarea 
                id="outrosDiagnosticos"
                value={formData.outrosDiagnosticos}
                onChange={(e) => handleInputChange("outrosDiagnosticos", e.target.value)}
                placeholder="Informe outros diagnósticos médicos que você possui"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="laudoMedico">Laudo ou Relatório Médico (opcional)</Label>
              <div className="mt-2">
                <input
                  type="file"
                  id="laudoMedico"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => handleFileChange("laudoMedico", e)}
                  className="hidden"
                />
                <label 
                  htmlFor="laudoMedico" 
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {formData.laudoMedico 
                        ? `Arquivo selecionado: ${formData.laudoMedico.name}` 
                        : "Clique para fazer upload do laudo médico"
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, JPG, PNG, DOC até 10MB
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="documentoFoto">Anexar documento com FOTO</Label>
              <div className="mt-2">
                <input
                  type="file"
                  id="documentoFoto"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => handleFileChange("documentoFoto", e)}
                  className="hidden"
                />
                <label 
                  htmlFor="documentoFoto" 
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {formData.documentoFoto 
                        ? `Arquivo selecionado: ${formData.documentoFoto.name}` 
                        : "Clique para fazer upload do documento com foto"
                      }
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, JPG, PNG, DOC até 10MB
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrev}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Etapa Anterior
        </Button>
        <Button type="submit">
          Continuar para Próxima Etapa
        </Button>
      </div>
    </form>
  );
};

export default CadastroStep2;