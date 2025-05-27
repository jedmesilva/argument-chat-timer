
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Trophy, Zap, Brain, Users, ArrowRight, Star, Crown, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrizCard = ({ amount, isMain = false }) => {
  const [displayAmount, setDisplayAmount] = useState(0);
  
  const animateCounter = useCallback(() => {
    if (!isMain) {
      setDisplayAmount(amount);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = amount / steps;
    let current = 0;
    let animationFrame;
    
    const animate = () => {
      current += increment;
      if (current >= amount) {
        setDisplayAmount(amount);
      } else {
        setDisplayAmount(Math.floor(current));
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [amount, isMain]);
  
  useEffect(() => {
    const cleanup = animateCounter();
    return cleanup;
  }, [animateCounter]);
  
  const formatCurrency = useMemo(() => {
    return (value) => `R$ ${value.toLocaleString('pt-BR')}`;
  }, []);

  if (isMain) {
    return (
      <div className="relative group" role="region" aria-label="Prêmio principal">
        {/* Glow effect - otimizado para performance */}
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          aria-hidden="true"
        />
        
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-yellow-500/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Crown icon */}
          <div className="flex justify-center mb-4">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 mb-2">
              PRÊMIO ACUMULADO
            </h2>
            <div 
              className="text-3xl sm:text-4xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4"
              aria-live="polite"
              aria-label={`Prêmio atual: ${formatCurrency(displayAmount)}`}
            >
              {formatCurrency(displayAmount)}
            </div>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Convença a IA e leve tudo!
            </p>
          </div>
          
          {/* Sparkle effects */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4" aria-hidden="true">
            <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
          </div>
          <div 
            className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4" 
            aria-hidden="true"
          >
            <Star 
              className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 animate-pulse" 
              style={{animationDelay: '0.5s'}} 
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Prêmio</p>
          <p className="text-white font-bold text-lg sm:text-xl">{formatCurrency(amount)}</p>
        </div>
        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" aria-hidden="true" />
      </div>
    </div>
  );
};

const WinnerCard = ({ winner, amount, date, argument }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-white font-bold text-sm sm:text-lg">
              {winner.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-sm sm:text-lg truncate">
              {winner}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">{date}</p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-green-400 font-bold text-sm sm:text-xl">
            R$ {amount.toLocaleString('pt-BR')}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm">Ganhou</p>
        </div>
      </div>
      
      <div className="bg-gray-900 p-3 sm:p-4 rounded-lg">
        <div className={`text-gray-300 text-xs sm:text-sm italic transition-all duration-300 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}>
          "{argument}"
        </div>
        
        {argument.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Ver menos' : 'Ver mais'}
            <ChevronDown 
              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </article>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex items-start space-x-4 mb-4">
        <div className="p-2 sm:p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors flex-shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">{title}</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const navigate = useNavigate();
  const currentPrize = 15750;
  
  const previousWinners = useMemo(() => [
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
  ], []);

  const features = useMemo(() => [
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
  ], []);

  const handleStartChallenge = useCallback(() => {
    navigate('/chat');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Hero Section */}
      <main id="main-content" className="container mx-auto px-4 pt-8 sm:pt-12 lg:pt-16 pb-12">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            CONVENÇA A IA
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Uma plataforma revolucionária onde você precisa convencer uma Inteligência Artificial 
            a escolher você para receber o <span className="text-yellow-400 font-bold">prêmio acumulado</span>
          </p>
        </header>

        {/* Main Prize Card */}
        <section className="mb-8 sm:mb-12 lg:mb-16 flex justify-center" aria-labelledby="prize-section">
          <div className="w-full max-w-lg px-4">
            <PrizCard amount={currentPrize} isMain={true} />
          </div>
        </section>

        {/* CTA Button */}
        <section className="text-center mb-12 sm:mb-16 lg:mb-20">
          <button 
            onClick={handleStartChallenge}
            className="group relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-describedby="cta-description"
          >
            <span>COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <p id="cta-description" className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
            Elabore seu argumento e tente convencer a IA
          </p>
        </section>

        {/* How it Works */}
        <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Como Funciona
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard 
                key={`feature-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Explanation Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto px-4" aria-labelledby="challenge-section">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-600">
            <h2 id="challenge-section" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-400">
              O Desafio
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center mb-4 sm:mb-6">
              Nossa IA analisa milhares de fatores em seu argumento: coerência, emoção, originalidade, 
              necessidade real e impacto social. Você precisa ser <span className="text-yellow-400 font-semibold">genuíno</span>, 
              <span className="text-blue-400 font-semibold"> convincente</span> e 
              <span className="text-green-400 font-semibold"> único</span>.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center">
              <span className="text-red-400 font-semibold">Não tente enganar</span> - a IA detecta inconsistências. 
              Seja honesto sobre por que merece o prêmio e como isso mudaria sua vida.
            </p>
          </div>
        </section>

        {/* Previous Winners */}
        <section className="mb-8 sm:mb-12 lg:mb-16" aria-labelledby="winners-section">
          <h2 id="winners-section" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Ganhadores Anteriores
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {previousWinners.map((winner, index) => (
              <WinnerCard 
                key={`winner-${index}`}
                winner={winner.winner}
                amount={winner.amount}
                date={winner.date}
                argument={winner.argument}
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-600">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Você tem o que é preciso?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Milhares tentaram, poucos conseguiram. Será que você consegue elaborar 
            o argumento que vai convencer nossa IA?
          </p>
          <button 
            onClick={handleStartChallenge}
            className="group relative inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 focus:outline-none focus:ring-4 focus:ring-green-500/50"
          >
            <span>ACEITAR O DESAFIO</span>
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" aria-hidden="true" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 sm:py-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Convença a IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
