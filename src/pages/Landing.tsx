
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Trophy, Users, Calendar, ArrowRight } from 'lucide-react';

interface PrizeWinner {
  id: string;
  chatId: string;
  winnerName: string;
  winnerAvatar: string;
  prizeAmount: number;
  winDate: string;
  convincingMessage: string;
  timeToWin: string;
}

const mockPrizeHistory: PrizeWinner[] = [
  {
    id: '1',
    chatId: 'chat_winner_1',
    winnerName: 'Ana Silva',
    winnerAvatar: '/placeholder.svg',
    prizeAmount: 15000,
    winDate: '2025-01-20',
    convincingMessage: 'A inteligência artificial precisa compreender a humanidade...',
    timeToWin: '8m 30s'
  },
  {
    id: '2',
    chatId: 'chat_winner_2',
    winnerName: 'Carlos Santos',
    winnerAvatar: '/placeholder.svg',
    prizeAmount: 12500,
    winDate: '2025-01-18',
    convincingMessage: 'O futuro depende da nossa capacidade de colaboração...',
    timeToWin: '12m 15s'
  },
  {
    id: '3',
    chatId: 'chat_winner_3',
    winnerName: 'Maria Costa',
    winnerAvatar: '/placeholder.svg',
    prizeAmount: 10000,
    winDate: '2025-01-15',
    convincingMessage: 'A tecnologia deve servir à humanidade, não o contrário...',
    timeToWin: '6m 45s'
  }
];

export default function Landing() {
  const navigate = useNavigate();
  const currentPrize = 18500;

  const formatCurrency = (value: number) => {
    return `R$${value.toLocaleString('pt-BR')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const handleStartChat = () => {
    // Gera um novo ID de chat
    const newChatId = `chat_${Date.now()}`;
    navigate(`/chat/${newChatId}`);
  };

  const handleViewWinnerChat = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Convença a IA e leve todo o prêmio
          </h1>
        </div>

        {/* Current Prize Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-700 border-0 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
              <Trophy className="text-yellow-400" size={32} />
              Prêmio Atual
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-4">
              {formatCurrency(currentPrize)}
            </div>
            <p className="text-blue-100 text-lg mb-6">
              A IA escolheu você para receber o prêmio acumulado
            </p>
            <button
              onClick={handleStartChat}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 mx-auto"
            >
              Começar Conversa
              <ArrowRight size={20} />
            </button>
          </CardContent>
        </Card>

        {/* Prize History */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="text-blue-400" />
            Histórico de Ganhadores
          </h2>
          
          <div className="space-y-4">
            {mockPrizeHistory.map((winner) => (
              <Card 
                key={winner.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                onClick={() => handleViewWinnerChat(winner.chatId)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {winner.winnerName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {winner.winnerName}
                        </h3>
                        <p className="text-gray-400 text-sm max-w-md truncate">
                          "{winner.convincingMessage}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-xl">
                        {formatCurrency(winner.prizeAmount)}
                      </div>
                      <div className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(winner.winDate)}
                      </div>
                      <div className="text-blue-400 text-sm">
                        Tempo: {winner.timeToWin}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
