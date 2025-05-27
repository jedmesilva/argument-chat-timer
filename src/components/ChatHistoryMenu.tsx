
import React from 'react';
import { X, Plus } from 'lucide-react';
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
  onNewChat 
}: ChatHistoryMenuProps) {
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
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isOpen ? 'md:block' : 'md:block'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header do menu */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-white">Histórico de Chats</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-700 transition-colors md:hidden"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Botão novo chat */}
          <div className="p-4">
            <button
              onClick={onNewChat}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Plus size={16} />
              <span>Novo Chat</span>
            </button>
          </div>

          {/* Lista de histórico */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
