
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ChatData {
  id: string;
  isWinnerChat: boolean;
  winnerName?: string;
  prizeAmount?: number;
  messages: Array<{
    id: number;
    text: string;
    sender: string;
    time: string;
  }>;
  finalTime?: number;
  convictionPercentage?: number;
}

const CHAT_CACHE_KEY = 'current_chat_jwt';
const CHAT_EXPIRY_HOURS = 24;

// Mock data para chats ganhadores
const winnerChatsData: { [key: string]: ChatData } = {
  'winner-carlos': {
    id: 'winner-carlos',
    isWinnerChat: true,
    winnerName: 'Carlos Silva',
    prizeAmount: 8500,
    finalTime: 0,
    convictionPercentage: 100,
    messages: [
      { id: 1, text: "Preciso pagar a faculdade da minha filha", sender: "other", time: "14:30" },
      { id: 2, text: "Ela sempre sonhou em ser médica", sender: "other", time: "14:31" },
      { id: 3, text: "Com este prêmio, posso garantir que ela continue perseguindo seu sonho", sender: "other", time: "14:32" },
      { id: 4, text: "Argumento convincente! Você merece este prêmio.", sender: "me", time: "14:33" }
    ]
  },
  'winner-ana': {
    id: 'winner-ana',
    isWinnerChat: true,
    winnerName: 'Ana Costa',
    prizeAmount: 12200,
    finalTime: 0,
    convictionPercentage: 100,
    messages: [
      { id: 1, text: "Minha mãe precisa de uma cirurgia urgente", sender: "other", time: "16:15" },
      { id: 2, text: "Nossa família não tem condições", sender: "other", time: "16:16" },
      { id: 3, text: "Este dinheiro salvaria a vida dela", sender: "other", time: "16:17" },
      { id: 4, text: "Sua causa é nobre. Você ganhou o prêmio!", sender: "me", time: "16:18" }
    ]
  },
  'winner-pedro': {
    id: 'winner-pedro',
    isWinnerChat: true,
    winnerName: 'Pedro Santos',
    prizeAmount: 6800,
    finalTime: 0,
    convictionPercentage: 100,
    messages: [
      { id: 1, text: "Sou professor e quero abrir uma escola gratuita na periferia", sender: "other", time: "10:45" },
      { id: 2, text: "Este prêmio seria o primeiro passo para educar centenas de crianças", sender: "other", time: "10:46" },
      { id: 3, text: "Educação transforma vidas e comunidades", sender: "other", time: "10:47" },
      { id: 4, text: "Sua visão educacional é inspiradora. Parabéns!", sender: "me", time: "10:48" }
    ]
  },
  'winner-maria': {
    id: 'winner-maria',
    isWinnerChat: true,
    winnerName: 'Maria Oliveira',
    prizeAmount: 9300,
    finalTime: 0,
    convictionPercentage: 100,
    messages: [
      { id: 1, text: "Perdi meu emprego na pandemia", sender: "other", time: "13:20" },
      { id: 2, text: "Estou há 8 meses procurando trabalho", sender: "other", time: "13:21" },
      { id: 3, text: "Tenho 3 filhos pequenos e as contas estão atrasadas", sender: "other", time: "13:22" },
      { id: 4, text: "Sua perseverança é admirável. Você merece esta ajuda!", sender: "me", time: "13:23" }
    ]
  }
};

function generateJWT(chatId: string): string {
  const header = { alg: "none", typ: "JWT" };
  const payload = {
    chatId,
    exp: Math.floor(Date.now() / 1000) + (CHAT_EXPIRY_HOURS * 3600),
    iat: Math.floor(Date.now() / 1000)
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  
  return `${encodedHeader}.${encodedPayload}.`;
}

function validateJWT(token: string): { valid: boolean; chatId?: string } {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return { valid: false };

    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    if (payload.exp < currentTime) {
      return { valid: false };
    }

    return { valid: true, chatId: payload.chatId };
  } catch {
    return { valid: false };
  }
}

function generateNewChatId(): string {
  return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function useChatManager() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [currentChatData, setCurrentChatData] = useState<ChatData | null>(null);

  useEffect(() => {
    if (chatId) {
      // Se é um chat de ganhador
      if (winnerChatsData[chatId]) {
        setCurrentChatData(winnerChatsData[chatId]);
      } else {
        // Chat do usuário - verificar JWT
        const cachedJWT = localStorage.getItem(CHAT_CACHE_KEY);
        if (cachedJWT) {
          const validation = validateJWT(cachedJWT);
          if (validation.valid && validation.chatId === chatId) {
            // JWT válido, carregar chat existente
            const defaultUserChat: ChatData = {
              id: chatId,
              isWinnerChat: false,
              messages: [
                { id: 1, text: "Estou devendo o Papa", sender: "other", time: "19:32" },
                { id: 2, text: "Humm... Argumento fraco!", sender: "me", time: "19:33" },
                { id: 3, text: "Mas o Papa falou que vai me castigar se eu morrer devendo ele! Juro!", sender: "other", time: "19:33" }
              ]
            };
            setCurrentChatData(defaultUserChat);
          } else {
            // JWT inválido, criar novo chat
            createNewUserChat();
          }
        } else {
          // Sem JWT, criar novo chat
          createNewUserChat();
        }
      }
    } else {
      // Sem chatId, criar novo chat do usuário
      createNewUserChat();
    }
  }, [chatId]);

  const createNewUserChat = () => {
    const newChatId = generateNewChatId();
    const newJWT = generateJWT(newChatId);
    localStorage.setItem(CHAT_CACHE_KEY, newJWT);
    
    navigate(`/chat/${newChatId}`, { replace: true });
  };

  const goToWinnerChat = (winnerId: string) => {
    navigate(`/chat/${winnerId}`);
  };

  const goToUserChat = () => {
    const cachedJWT = localStorage.getItem(CHAT_CACHE_KEY);
    if (cachedJWT) {
      const validation = validateJWT(cachedJWT);
      if (validation.valid && validation.chatId) {
        navigate(`/chat/${validation.chatId}`);
      } else {
        createNewUserChat();
      }
    } else {
      createNewUserChat();
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    currentChatData,
    setCurrentChatData,
    goToWinnerChat,
    goToUserChat,
    goBack,
    createNewUserChat
  };
}
