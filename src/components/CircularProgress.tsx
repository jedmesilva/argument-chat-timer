
import React from 'react';
import CircularBorderProgress from './CircularBorderProgress';

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  return (
    <div className="w-12 h-12 relative flex items-center justify-center bg-gray-700 rounded-full overflow-hidden">
      {/* Borda de progresso circular */}
      <CircularBorderProgress 
        percentage={percentage}
        size={48}
        strokeWidth={3}
      />
      
      {/* Conteúdo central */}
      <span className="text-xs font-bold text-white relative z-10">
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default CircularProgress;
