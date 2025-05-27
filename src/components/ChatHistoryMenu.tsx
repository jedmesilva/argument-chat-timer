
import React, { useState } from 'react';
import { Plus, Settings, LogOut, X, MessageSquare, Clock, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

interface ChatHistoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeChat: string;
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

interface ChatItem {
  id: string;
  title: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}

const mockChats: ChatItem[] = [
  {
    id: 'current',
    title: 'Debate atual',
    lastMessage: 'Mas o Papa falou que vai me castigar...',
    time: '19:33',
    unread: true
  },
  {
    id: 'chat-1',
    title: 'Discussão sobre tecnologia',
    lastMessage: 'A IA realmente pode substituir...',
    time: 'Ontem',
  },
  {
    id: 'chat-2',
    title: 'Filosofia e existência',
    lastMessage: 'O que significa realmente viver...',
    time: '2 dias',
  },
  {
    id: 'chat-3',
    title: 'Economia mundial',
    lastMessage: 'As consequências da inflação...',
    time: '1 semana',
  },
  {
    id: 'chat-4',
    title: 'Arte e criatividade',
    lastMessage: 'A expressão artística moderna...',
    time: '2 semanas',
  }
];

export default function ChatHistoryMenu({ isOpen, onClose, activeChat, onChatSelect, onNewChat }: ChatHistoryMenuProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredChats = mockChats.filter(chat =>
    chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccountClick = () => {
    navigate('/account');
    // Em mobile, fecha o menu após navegar
    if (window.innerWidth < 768) {
      onClose();
    }
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
                    JS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">João Silva</h3>
                  <p className="text-gray-400 text-sm">Minha conta</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Botão Nova Conversa */}
          <div className="p-4">
            <Button
              onClick={onNewChat}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Nova Conversa</span>
            </Button>
          </div>

          {/* Busca */}
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar conversas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Lista de Conversas */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="px-2">
                {filteredChats.length > 0 ? (
                  filteredChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => onChatSelect(chat.id)}
                      className={`
                        p-3 mx-2 mb-2 rounded-lg cursor-pointer transition-colors
                        ${activeChat === chat.id 
                          ? 'bg-blue-600/20 border border-blue-500/30' 
                          : 'hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-gray-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-white text-sm font-medium truncate">
                              {chat.title}
                            </h4>
                            <div className="flex items-center space-x-1">
                              {chat.unread && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                              <span className="text-xs text-gray-400 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {chat.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-xs truncate">
                            {chat.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-400 py-8">
                    <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Nenhuma conversa encontrada</p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Footer com configurações */}
          <div className="p-4 border-t border-gray-600">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Separator orientation="vertical" className="h-6 bg-gray-600" />
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
