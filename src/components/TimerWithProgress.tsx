
import React from 'react';
import BorderProgress from './BorderProgress';

interface TimerWithProgressProps {
  currentTime: number;
  initialTime: number;
}

const TimerWithProgress: React.FC<TimerWithProgressProps> = ({ currentTime, initialTime }) => {
  // Calcula a porcentagem do progresso (invertida pois o timer diminui)
  const progressPercentage = initialTime > 0 ? ((initialTime - currentTime) / initialTime) * 100 : 0;
  
  // Determina a cor da barra: vermelha nos últimos 10 segundos
  const strokeColor = currentTime <= 10 ? "#ef4444" : "#ffffff";
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Barra de progresso na borda */}
      <BorderProgress 
        progress={progressPercentage}
        width={120}
        height={44}
        borderRadius={8}
        strokeWidth={2}
        strokeColor={strokeColor}
        backgroundColor="rgba(55, 65, 81, 0.3)"
      />
      
      {/* Conteúdo do timer - centralizado */}
      <div className="bg-gray-700 px-4 py-2 rounded-lg relative z-10 flex items-center justify-center" style={{ width: '120px', height: '44px' }}>
        <span className="font-mono text-lg text-white">{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};

export default TimerWithProgress;
