
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-yellow-900" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white">
              ConvenceAI
            </span>
          </div>
          <Button 
            onClick={handleStartNow}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Convença a IA
            </span>
            <br />
            <span className="text-white">e leve todo o prêmio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Use seus melhores argumentos para convencer nossa Inteligência Artificial a escolher você para receber o prêmio acumulado
          </p>

          {/* Prize Card */}
          <div className="relative mb-16 max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
            <Card className="relative bg-slate-900/80 border-slate-700 backdrop-blur-xl shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-white text-3xl font-bold flex items-center justify-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  Prêmio Atual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 pb-8">
                <div className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                  {formatCurrency(currentPrize)}
                </div>
                <p className="text-slate-400 text-lg">
                  Aguardando o próximo vencedor
                </p>
              </CardContent>
            </Card>
          </div>

          <Button 
            onClick={handleStartNow}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Começar agora
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 text-white">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Entre na Conversa</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Inicie uma conversa com nossa IA e apresente seus argumentos de forma criativa e convincente
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Convença a IA</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Use argumentos lógicos, emocionais e persuasivos para conquistar a confiança da nossa IA
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8 mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Ganhe o Prêmio</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
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
            <h2 className="text-5xl font-black mb-6 text-white">Ganhadores Anteriores</h2>
            <p className="text-xl text-slate-400">Conheça quem já conseguiu convencer nossa IA</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockWinners.map((winner, index) => (
              <Card key={winner.id} className="bg-slate-900/60 border-slate-700 backdrop-blur-xl hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {winner.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                          {winner.name}
                        </CardTitle>
                        <p className="text-slate-500 text-sm">{formatDate(winner.date)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                        {formatCurrency(winner.prize)}
                      </div>
                      <div className="flex items-center text-yellow-400 mt-1 justify-end">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="text-sm font-semibold">#{index + 1}</span>
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
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-16 border border-slate-700 shadow-2xl">
              <h2 className="text-5xl font-black mb-8 text-white">Pronto para o Desafio?</h2>
              <p className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Teste suas habilidades de persuasão e tente convencer nossa IA a escolher você para receber o prêmio acumulado
              </p>
              <Button 
                onClick={handleStartNow}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Começar agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-1.5 h-1.5 text-yellow-900" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              ConvenceAI
            </span>
          </div>
          <p className="text-slate-500">
            © 2024 ConvenceAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
