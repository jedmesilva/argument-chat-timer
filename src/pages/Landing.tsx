
import React from 'react';
import { ArrowRight, Trophy, Users, Brain, Target, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface Winner {
  id: string;
  name: string;
  prize: number;
  date: string;
  argument: string;
}

const mockWinners: Winner[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    prize: 25000,
    date: '2024-05-20',
    argument: 'Convenceu a IA com argumentos sobre sustentabilidade e impacto social'
  },
  {
    id: '2',
    name: 'Maria Santos',
    prize: 18500,
    date: '2024-05-15',
    argument: 'Apresentou um plano detalhado de uso responsável do prêmio'
  },
  {
    id: '3',
    name: 'João Oliveira',
    prize: 32000,
    date: '2024-05-10',
    argument: 'Desenvolveu uma estratégia convincente baseada em dados'
  },
  {
    id: '4',
    name: 'Ana Costa',
    prize: 22750,
    date: '2024-05-05',
    argument: 'Usou argumentos emocionais e racionais de forma equilibrada'
  }
];

export default function Landing() {
  const navigate = useNavigate();
  const currentPrize = 45000;

  const formatCurrency = (value: number) => {
    return `R$ ${value.toLocaleString('pt-BR')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const handleStartNow = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted))_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative p-2 bg-primary rounded-xl shadow-lg">
              <Brain className="w-8 h-8 text-primary-foreground" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-accent-foreground" />
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground">
              ConvenceAI
            </span>
          </div>
          <Button 
            onClick={handleStartNow}
            className="font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-primary">
              Convença a IA
            </span>
            <br />
            <span className="text-foreground">e leve todo o prêmio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            Use seus melhores argumentos para convencer nossa Inteligência Artificial a escolher você para receber o prêmio acumulado
          </p>

          {/* Prize Card */}
          <div className="relative mb-16 max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary rounded-3xl blur-xl opacity-30"></div>
            <Card className="relative bg-card border shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-card-foreground text-3xl font-bold flex items-center justify-center gap-3">
                  <div className="p-2 bg-accent rounded-xl">
                    <Trophy className="w-8 h-8 text-accent-foreground" />
                  </div>
                  Prêmio Atual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 pb-8">
                <div className="text-6xl font-black text-primary mb-4">
                  {formatCurrency(currentPrize)}
                </div>
                <p className="text-muted-foreground text-lg">
                  Aguardando o próximo vencedor
                </p>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={handleStartNow}
            size="lg"
            className="px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Começar agora
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 text-foreground">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">1</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Entre na Conversa</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Inicie uma conversa com nossa IA e apresente seus argumentos de forma criativa e convincente
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 text-secondary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">2</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Convença a IA</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Use argumentos lógicos, emocionais e persuasivos para conquistar a confiança da nossa IA
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-12 h-12 text-accent-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">3</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Ganhe o Prêmio</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Se conseguir convencer a IA, você leva todo o prêmio acumulado direto para sua conta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Winners */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 text-foreground">Ganhadores Anteriores</h2>
            <p className="text-xl text-muted-foreground">Conheça quem já conseguiu convencer nossa IA</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockWinners.map((winner, index) => (
              <Card key={winner.id} className="bg-card border hover:bg-accent/5 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {winner.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-card-foreground text-xl group-hover:text-primary transition-colors">
                          {winner.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">{formatDate(winner.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-primary">
                        {formatCurrency(winner.prize)}
                      </div>
                      <div className="flex items-center text-accent mt-1 justify-end">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm font-semibold">#{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">{winner.argument}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-card rounded-3xl p-16 border shadow-2xl">
              <h2 className="text-5xl font-black mb-8 text-foreground">Pronto para o Desafio?</h2>
              <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Teste suas habilidades de persuasão e tente convencer nossa IA a escolher você para receber o prêmio acumulado
              </p>
              <Button 
                onClick={handleStartNow}
                size="lg"
                className="px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Começar agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative p-2 bg-primary rounded-xl">
              <Brain className="w-6 h-6 text-primary-foreground" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-1.5 h-1.5 text-accent-foreground" />
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">
              ConvenceAI
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 ConvenceAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
