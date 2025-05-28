import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import CircularBorderProgress from '../components/CircularBorderProgress';
import CircularProgress from '../components/CircularProgress';
import BorderProgress from '../components/BorderProgress';
import TimerWithProgress from '../components/TimerWithProgress';
import ChatHistoryMenu from '../components/ChatHistoryMenu';

export default function ChatApp() {
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(10);
  const [initialTimer] = useState(10);
  const [accumulated, setAccumulated] = useState(5000);
  const [isTextareaExpanded, setIsTextareaExpanded] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [timerFinished, setTimerFinished] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChat, setActiveChat] = useState('current');
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  const [messages, setMessages] = useState([
    { id: 1, text: "Estou devendo o Papa", sender: "other", time: "19:32" },
    { id: 2, text: "Humm... Argumento fraco!", sender: "me", time: "19:33" },
    { id: 3, text: "Mas o Papa falou que vai me castigar se eu morrer devendo ele! Juro!", sender: "other", time: "19:33" }
  ]);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setTimerFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Controla a transição entre imagem AI e progresso circular
  useEffect(() => {
    // Após 3 segundos, começa a mostrar o progresso
    const showProgressTimer = setTimeout(() => {
      setShowProgress(true);
    }, 3000);

    return () => clearTimeout(showProgressTimer);
  }, []);

  // Simula o progresso de 0 a 100%
  useEffect(() => {
    if (showProgress) {
      const progressInterval = setInterval(() => {
        setProgressPercentage(prev => {
          if (prev >= 100) {
            // Quando chega a 100%, volta para a imagem AI após 2 segundos
            setTimeout(() => {
              setShowProgress(false);
              setProgressPercentage(0);
            }, 2000);
            return 100;
          }
          return prev + 2; // Incrementa 2% a cada 100ms
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [showProgress]);

  // Reset textarea height when message is cleared
  useEffect(() => {
    if (message === '' && textareaRef.current) {
      textareaRef.current.style.height = '40px';
      setIsTextareaExpanded(false);
    }
  }, [message]);

  // Função para rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Rola para baixo sempre que uma nova mensagem é adicionada
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatCurrency = (value) => {
    return `R$${value.toLocaleString('pt-BR')}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message.trim(),
        sender: "me",
        time: getCurrentTime()
      };
      
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTryAgain = () => {
    setTimer(10);
    setTimerFinished(false);
  };

  const handleAddTime = () => {
    setTimer(10);
    setTimerFinished(false);
  };

  const handleTextareaInput = (e) => {
    e.target.style.height = '40px';
    
    if (e.target.scrollHeight > 40) {
      e.target.style.height = e.target.scrollHeight + 'px';
      setIsTextareaExpanded(true);
    } else {
      setIsTextareaExpanded(false);
    }
  };

  const handleAvatarClick = () => {
    // No mobile, toggle o menu. No desktop, o menu fica sempre visível
    if (window.innerWidth < 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
    // Em mobile, fecha o menu após selecionar
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex h-dvh bg-gray-900 text-white overflow-hidden">
      {/* Menu do histórico - sempre visível no desktop */}
      <div className="hidden md:block">
        <ChatHistoryMenu
          isOpen={true}
          onClose={() => {}}
          activeChat={activeChat}
          onChatSelect={handleChatSelect}
          onNewChat={() => {}}
        />
      </div>

      {/* Menu do histórico - modal no mobile */}
      <div className="md:hidden">
        <ChatHistoryMenu
          isOpen={isMenuOpen}
          onClose={handleMenuClose}
          activeChat={activeChat}
          onChatSelect={handleChatSelect}
          onNewChat={() => {}}
        />
      </div>

      {/* Área principal do chat */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-gray-800 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div 
              onClick={handleAvatarClick}
              className="cursor-pointer md:cursor-default"
            >
              {showProgress ? (
                <CircularProgress percentage={progressPercentage} />
              ) : (
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors md:hover:bg-gray-700">
                  <span className="text-sm font-medium">img</span>
                  <span className="text-xs text-gray-400 ml-1">AI</span>
                </div>
              )}
            </div>
            <div>
              <div className="text-2xl font-bold">{formatCurrency(accumulated)}</div>
              <div className="text-sm text-gray-400">Acumulado</div>
            </div>
          </div>
          {timerFinished ? (
            <button 
              onClick={handleTryAgain}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-medium transition-colors"
            >
              Tentar novamente
            </button>
          ) : (
            <TimerWithProgress currentTime={timer} initialTime={initialTimer} />
          )}
        </div>

        {/* Seção de Anúncio Patrocinado */}
        <div className="bg-gray-750 border-b border-gray-600 px-4 py-2 w-full flex-shrink-0">
          <div className="flex items-center justify-between max-w-full">
            <div className="flex items-center space-x-3 flex-1 min-w-0 mr-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">M</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">
                  MacBook Pro - Potência para criar sem limites
                </p>
                <p className="text-xs text-gray-400 truncate">Patrocinado • Apple</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded-md transition-colors flex-shrink-0 whitespace-nowrap">
              Ver mais
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                msg.sender === 'me' 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-600 text-white'
              }`}>
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-800 rounded-t-3xl max-h-[50dvh] flex flex-col items-center justify-center flex-shrink-0">
          {!timerFinished && (
            <div className={`flex bg-gray-700 rounded-3xl p-2 focus-within:ring-2 focus-within:ring-blue-500 gap-3 w-full max-w-none ${
              isTextareaExpanded ? 'items-end' : 'items-center'
            }`}>
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Seu argumento..."
                className="flex-1 bg-transparent text-white resize-none py-2 px-2 focus:outline-none overflow-y-auto"
                style={{
                  height: '40px',
                  minHeight: '40px',
                  maxHeight: 'calc(50dvh - 4rem)'
                }}
                onInput={handleTextareaInput}
              />
              <button
                onClick={handleSendMessage}
                className="bg-gray-600 hover:bg-gray-500 p-2 rounded-full transition-colors flex-shrink-0"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          )}

          {timerFinished && (
            <div className="flex flex-col items-center justify-center bg-gray-700 rounded-3xl p-6 w-full max-w-none min-h-[56px]">
              <p className="text-white text-center mb-4 text-sm">
                Adicione tempo para convencer a IA
              </p>
              <button
                onClick={handleAddTime}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-white font-medium transition-colors"
              >
                Adicionar tempo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
