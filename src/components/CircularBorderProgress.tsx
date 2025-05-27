
import React from 'react';

interface CircularBorderProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const CircularBorderProgress: React.FC<CircularBorderProgressProps> = ({ 
  percentage, 
  size = 48, 
  strokeWidth = 3,
  className = ""
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determina a cor baseada no percentual
  const getProgressColor = (percent: number) => {
    if (percent <= 25) return "#ef4444"; // Vermelho
    if (percent <= 50) return "#eab308"; // Amarelo
    if (percent <= 75) return "#f97316"; // Laranja
    if (percent < 100) return "#3b82f6"; // Azul
    return "#22c55e"; // Verde (100%)
  };

  const progressColor = getProgressColor(percentage);

  return (
    <svg
      width={size + strokeWidth * 2}
      height={size + strokeWidth * 2}
      className={`absolute ${className}`}
      style={{
        left: -strokeWidth,
        top: -strokeWidth
      }}
    >
      {/* Círculo de fundo */}
      <circle
        cx={(size + strokeWidth * 2) / 2}
        cy={(size + strokeWidth * 2) / 2}
        r={radius}
        fill="none"
        stroke="rgba(55, 65, 81, 0.3)"
        strokeWidth={strokeWidth}
      />
      
      {/* Círculo de progresso */}
      <circle
        cx={(size + strokeWidth * 2) / 2}
        cy={(size + strokeWidth * 2) / 2}
        r={radius}
        fill="none"
        stroke={progressColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          transition: 'stroke-dashoffset 0.5s ease-out, stroke 0.3s ease-out'
        }}
      />
    </svg>
  );
};

export default CircularBorderProgress;
