
import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

interface ChatHistoryItemProps {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function ChatHistoryItem({ 
  id, 
  title, 
  lastMessage, 
  timestamp, 
  isActive = false, 
  onClick 
}: ChatHistoryItemProps) {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg cursor-pointer transition-colors border ${
        isActive 
          ? 'bg-blue-600/20 border-blue-500' 
          : 'bg-gray-700/50 border-gray-600 hover:bg-gray-600/50'
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
          <MessageCircle size={16} className="text-gray-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white truncate">{title}</h3>
          <p className="text-xs text-gray-400 truncate mt-1">{lastMessage}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
