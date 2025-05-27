
import React from 'react';
import { X } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useNavigate } from 'react-router-dom';
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
  onGoToUserChat?: () => void;
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

export default function ChatHistoryMenu({ 
  isOpen, 
  onClose, 
  activeChat, 
  onChatSelect,
  isWinnerChat = false,
  winnerName,
  onGoBack,
  onGoToUserChat
}: ChatHistoryMenuProps) {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/account');
  };

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
                    U
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">João Silva</h3>
                  <p className="text-gray-400 text-sm">Minha conta</p>
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
            {isWinnerChat ? (
              <>
                <h2 className="text-lg font-semibold text-white mb-4">Chat do Ganhador</h2>
                <div className="bg-yellow-600/20 border border-yellow-500 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-white">👑</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-white truncate">{winnerName}</h3>
                      <p className="text-xs text-yellow-400 truncate mt-1">Ganhador do prêmio</p>
                      <div className="flex items-center mt-2 text-xs text-yellow-500">
                        <span>Chat vencedor</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Botões de navegação */}
                <div className="space-y-2 mt-6">
                  {onGoBack && (
                    <button
                      onClick={onGoBack}
                      className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      ← Voltar
                    </button>
                  )}
                  {onGoToUserChat && (
                    <button
                      onClick={onGoToUserChat}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Ver meu chat
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-white mb-4">Histórico de Chats</h2>
                {mockHistory.map((chat) => (
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
