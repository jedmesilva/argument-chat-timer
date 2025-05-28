
import React from 'react';
import { ArrowRight, Trophy, Users, Brain, Target, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-purple-400" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ConvenceAI
            </span>
          </div>
          <Button 
            onClick={handleStartNow}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Convença a IA
            </span>
            <br />
            <span className="text-white">e leve todo o prêmio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Use seus melhores argumentos para convencer nossa Inteligência Artificial a escolher você para receber o prêmio acumulado
          </p>

          {/* Prize Card */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
            <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-xl max-w-lg mx-auto">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-3xl font-bold flex items-center justify-center gap-2">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  Prêmio Atual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  {formatCurrency(currentPrize)}
                </div>
                <p className="text-slate-300 text-lg">
                  A escolha é sua para receber o prêmio acumulado
                </p>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={handleStartNow}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Começar agora
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-white">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">1. Entre na Conversa</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Inicie uma conversa com nossa IA e apresente seus argumentos de forma criativa e convincente
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">2. Convença a IA</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Use argumentos lógicos, emocionais e persuasivos para conquistar a confiança da nossa IA
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">3. Ganhe o Prêmio</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Se conseguir convencer a IA, você leva todo o prêmio acumulado direto para sua conta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Winners */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-white">Ganhadores Anteriores</h2>
            <p className="text-xl text-slate-300">Conheça quem já conseguiu convencer nossa IA</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockWinners.map((winner, index) => (
              <Card key={winner.id} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-xl hover:from-slate-700/80 hover:to-slate-800/80 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-xl mb-1 group-hover:text-purple-300 transition-colors">
                        {winner.name}
                      </CardTitle>
                      <p className="text-slate-400">{formatDate(winner.date)}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {formatCurrency(winner.prize)}
                      </div>
                      <div className="flex items-center text-yellow-400 mt-1">
                        <Trophy className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Vencedor #{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{winner.argument}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-16 border border-slate-700/50">
              <h2 className="text-5xl font-bold mb-8 text-white">Pronto para o Desafio?</h2>
              <p className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Teste suas habilidades de persuasão e tente convencer nossa IA a escolher você para receber o prêmio acumulado
              </p>
              <Button 
                onClick={handleStartNow}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Começar agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <Brain className="w-7 h-7 text-purple-400" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ConvenceAI
            </span>
          </div>
          <p className="text-slate-400">
            © 2024 ConvenceAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
