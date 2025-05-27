import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Brain, Users, ArrowRight, Star, Crown } from 'lucide-react';

const PrizCard = ({ amount, isMain = false }) => {
  const [displayAmount, setDisplayAmount] = useState(0);
  
  useEffect(() => {
    if (isMain) {
      const duration = 2000;
      const steps = 60;
      const increment = amount / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= amount) {
          setDisplayAmount(amount);
          clearInterval(timer);
        } else {
          setDisplayAmount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    } else {
      setDisplayAmount(amount);
    }
  }, [amount, isMain]);
  
  const formatCurrency = (value) => {
    return `R$ ${value.toLocaleString('pt-BR')}`;
  };

  if (isMain) {
    return (
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-yellow-500/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Crown icon */}
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">PRÊMIO ACUMULADO</h2>
            <div className="text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              {formatCurrency(displayAmount)}
            </div>
            <p className="text-gray-400 text-lg">Convença a IA e leve tudo!</p>
          </div>
          
          {/* Sparkle effects */}
          <div className="absolute top-4 right-4">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Star className="w-4 h-4 text-orange-500 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Prêmio</p>
          <p className="text-white font-bold text-xl">{formatCurrency(amount)}</p>
        </div>
        <Trophy className="w-6 h-6 text-yellow-500" />
      </div>
    </div>
  );
};

const WinnerCard = ({ winner, amount, date, argument }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{winner.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{winner}</h3>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-green-400 font-bold text-xl">R$ {amount.toLocaleString('pt-BR')}</p>
          <p className="text-gray-400 text-sm">Ganhou</p>
        </div>
      </div>
      
      <div className="bg-gray-900 p-4 rounded-lg">
        <p className="text-gray-300 text-sm italic">"{argument}"</p>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-white font-semibold text-xl">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default function LandingPage() {
  const currentPrize = 15750;
  
  const previousWinners = [
    {
      winner: "Carlos Silva",
      amount: 8500,
      date: "15 Mai 2025",
      argument: "Preciso pagar a faculdade da minha filha e ela sempre sonhou em ser médica. Com este prêmio, posso garantir que ela continue perseguindo seu sonho."
    },
    {
      winner: "Ana Costa",
      amount: 12200,
      date: "10 Mai 2025", 
      argument: "Minha mãe precisa de uma cirurgia urgente e nossa família não tem condições. Este dinheiro salvaria a vida dela."
    },
    {
      winner: "Pedro Santos",
      amount: 6800,
      date: "05 Mai 2025",
      argument: "Sou professor e quero abrir uma escola gratuita na periferia. Este prêmio seria o primeiro passo para educar centenas de crianças."
    },
    {
      winner: "Maria Oliveira", 
      amount: 9300,
      date: "28 Abr 2025",
      argument: "Perdi meu emprego na pandemia e estou há 8 meses procurando trabalho. Tenho 3 filhos pequenos e as contas estão atrasadas."
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Desafio Intelectual",
      description: "Teste suas habilidades de argumentação contra uma IA avançada que analisa cada palavra."
    },
    {
      icon: Zap,
      title: "Tempo Limitado", 
      description: "Você tem poucos minutos para elaborar o argumento mais convincente da sua vida."
    },
    {
      icon: Users,
      title: "Competição Justa",
      description: "Todos têm a mesma chance. Não importa quem você é, apenas quão convincente consegue ser."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CONVENÇA A IA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma revolucionária onde você precisa convencer uma Inteligência Artificial 
            a escolher você para receber o <span className="text-yellow-400 font-bold">prêmio acumulado</span>
          </p>
        </div>

        {/* Main Prize Card */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-lg">
            <PrizCard amount={currentPrize} isMain={true} />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
            <span>COMEÇAR AGORA</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-400 mt-4 text-lg">
            Elabore seu argumento e tente convencer a IA
          </p>
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Explanation Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
              O Desafio
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
              Nossa IA analisa milhares de fatores em seu argumento: coerência, emoção, originalidade, 
              necessidade real e impacto social. Você precisa ser <span className="text-yellow-400 font-semibold">genuíno</span>, 
              <span className="text-blue-400 font-semibold"> convincente</span> e 
              <span className="text-green-400 font-semibold"> único</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              <span className="text-red-400 font-semibold">Não tente enganar</span> - a IA detecta inconsistências. 
              Seja honesto sobre por que merece o prêmio e como isso mudaria sua vida.
            </p>
          </div>
        </div>

        {/* Previous Winners */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Ganhadores Anteriores
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {previousWinners.map((winner, index) => (
              <WinnerCard 
                key={index}
                winner={winner.winner}
                amount={winner.amount}
                date={winner.date}
                argument={winner.argument}
              />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 border border-gray-600">
          <h2 className="text-4xl font-bold mb-6">
            Você tem o que é preciso?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Milhares tentaram, poucos conseguiram. Será que você consegue elaborar 
            o argumento que vai convencer nossa IA?
          </p>
          <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
            <span>ACEITAR O DESAFIO</span>
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Convença a IA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}