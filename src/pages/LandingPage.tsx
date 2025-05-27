
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage = () => {
  const formatCurrency = (value: number) => {
    return `R$${value.toLocaleString('pt-BR')}`;
  };

  const previousWinners = [
    { id: 1, winner: "João Silva", prize: 2500, date: "15/12/2024" },
    { id: 2, winner: "Maria Santos", prize: 3200, date: "08/12/2024" },
    { id: 3, winner: "Pedro Costa", prize: 1800, date: "01/12/2024" },
    { id: 4, winner: "Ana Oliveira", prize: 4100, date: "24/11/2024" },
    { id: 5, winner: "Carlos Ferreira", prize: 2900, date: "17/11/2024" },
    { id: 6, winner: "Lucia Almeida", prize: 3500, date: "10/11/2024" }
  ];

  const currentPrize = 5000;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Card Principal do Prêmio */}
        <Card className="mb-8 bg-gradient-to-r from-blue-900 to-purple-900 border-blue-500">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-6xl font-bold text-white">
              Prêmio Atual
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4">
              {formatCurrency(currentPrize)}
            </div>
            <p className="text-xl text-gray-300">
              Acumulado e esperando por você!
            </p>
          </CardContent>
        </Card>

        {/* Lista de Prêmios Anteriores */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              Prêmios Anteriores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previousWinners.map((winner) => (
                <div 
                  key={winner.id} 
                  className="flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">
                      {winner.winner}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {winner.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {formatCurrency(winner.prize)}
                    </div>
                    <p className="text-gray-400 text-sm">
                      Prêmio
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
