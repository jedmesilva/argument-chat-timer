
import React from 'react';
import { X, ArrowLeft, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import ChatHistoryItem from './ChatHistoryItem';

interface ChatHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

interface ChatHistoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeChat: string;
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
  isWinnerChat?: boolean;
  winnerName?: string;
  onGoBack?: () => void;
  onSwitchToUserChat?: () => void;
}

const mockHistory: ChatHistory[] = [
  {
    id: 'current',
    title: 'Conversa sobre Papa',
    lastMessage: 'Mas o Papa falou que vai me castigar...',
    timestamp: 'Agora'
  },
  {
    id: '2',
    title: 'Discussão sobre filosofia',
    lastMessage: 'A vida é uma questão complexa...',
    timestamp: 'Ontem'
  },
  {
    id: '3',
    title: 'Debate sobre tecnologia',
    lastMessage: 'IA vai mudar o mundo...',
    timestamp: '2 dias atrás'
  },
  {
    id: '4',
    title: 'Conversa sobre música',
    lastMessage: 'O rock nunca vai morrer...',
    timestamp: '1 semana atrás'
  }
];

const winnerChatHistory: ChatHistory[] = [
  {
    id: 'chat_winner_1',
    title: 'Chat de Ana Silva',
    lastMessage: 'A inteligência artificial precisa compreender...',
    timestamp: '20 Jan'
  },
  {
    id: 'chat_winner_2',
    title: 'Chat de Carlos Santos',
    lastMessage: 'O futuro depende da nossa capacidade...',
    timestamp: '18 Jan'
  },
  {
    id: 'chat_winner_3',
    title: 'Chat de Maria Costa',
    lastMessage: 'A tecnologia deve servir à humanidade...',
    timestamp: '15 Jan'
  }
];

export default function ChatHistoryMenu({ 
  isOpen, 
  onClose, 
  activeChat, 
  onChatSelect,
  isWinnerChat = false,
  winnerName,
  onGoBack,
  onSwitchToUserChat
}: ChatHistoryMenuProps) {
  const handleAccountClick = () => {
    console.log('Navegando para conta do usuário...');
  };

  // Se é um chat de ganhador, mostra apenas esse chat no histórico
  const historyToShow = isWinnerChat 
    ? winnerChatHistory.filter(chat => chat.id === activeChat)
    : mockHistory;

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div className={`
        fixed md:relative top-0 left-0 h-full w-80 bg-gray-800 border-r border-gray-600 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block
      `}>
        <div className="flex flex-col h-full">
          {/* Header com perfil do usuário */}
          <div className="p-4 border-b border-gray-600">
            <div className="flex items-center justify-between">
              <div 
                onClick={handleAccountClick}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors flex-1"
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" alt="Usuario" />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {isWinnerChat && winnerName ? winnerName.charAt(0) : 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">
                    {isWinnerChat && winnerName ? winnerName : 'João Silva'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {isWinnerChat ? 'Ganhador do prêmio' : 'Minha conta'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-700 transition-colors md:hidden"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Lista de histórico */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <h2 className="text-lg font-semibold text-white mb-4">
              {isWinnerChat ? 'Chat do Ganhador' : 'Histórico de Chats'}
            </h2>
            {historyToShow.map((chat) => (
              <ChatHistoryItem
                key={chat.id}
                id={chat.id}
                title={chat.title}
                lastMessage={chat.lastMessage}
                timestamp={chat.timestamp}
                isActive={activeChat === chat.id}
                onClick={() => onChatSelect(chat.id)}
              />
            ))}
          </div>

          {/* Botões de navegação para chats de ganhadores */}
          {isWinnerChat && (
            <div className="p-4 border-t border-gray-600 space-y-3">
              <button
                onClick={onGoBack}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Voltar para Landing
              </button>
              
              <button
                onClick={onSwitchToUserChat}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <User size={16} />
                Meu Chat
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
