
import React from 'react';
import { ArrowRight, Trophy, Users, Brain, Target } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">ConvenceAI</span>
          </div>
          <Button 
            onClick={handleStartNow}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Convença a IA e leve todo o prêmio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Use seus melhores argumentos para convencer nossa Inteligência Artificial a escolher você para receber o prêmio acumulado
          </p>

          {/* Prize Card */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 max-w-md mx-auto mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Prêmio Atual</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(currentPrize)}
              </div>
              <p className="text-blue-100">A escolha é sua para receber o prêmio acumulado</p>
            </CardContent>
          </Card>

          <Button 
            onClick={handleStartNow}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Começar agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Entre na Conversa</h3>
              <p className="text-gray-300">
                Inicie uma conversa com nossa IA e apresente seus argumentos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Convença a IA</h3>
              <p className="text-gray-300">
                Use argumentos criativos, lógicos e persuasivos para convencer a IA
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Ganhe o Prêmio</h3>
              <p className="text-gray-300">
                Se conseguir convencer a IA, você leva todo o prêmio acumulado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Winners */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Ganhadores Anteriores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockWinners.map((winner) => (
              <Card key={winner.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-lg">{winner.name}</CardTitle>
                      <p className="text-gray-400">{formatDate(winner.date)}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">
                        {formatCurrency(winner.prize)}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Trophy className="w-4 h-4 mr-1" />
                        <span className="text-sm">Vencedor</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{winner.argument}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para o Desafio?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Teste suas habilidades de persuasão e tente convencer nossa IA a escolher você
          </p>
          <Button 
            onClick={handleStartNow}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Começar agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-semibold">ConvenceAI</span>
          </div>
          <p className="text-gray-400">
            © 2024 ConvenceAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
