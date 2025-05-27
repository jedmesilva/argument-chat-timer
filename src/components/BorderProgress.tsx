
import React from 'react';

interface BorderProgressProps {
  progress: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
  className?: string;
}

const BorderProgress: React.FC<BorderProgressProps> = ({ 
  progress, 
  width = 300, 
  height = 200, 
  borderRadius = 20, 
  strokeWidth = 4,
  strokeColor = "#ffffff",
  backgroundColor = "#e5e7eb",
  className = ""
}) => {
  // Criar o path do retângulo com cantos arredondados
  const createRoundedRectPath = (w: number, h: number, r: number) => {
    return `
      M ${r} 0
      L ${w - r} 0
      Q ${w} 0 ${w} ${r}
      L ${w} ${h - r}
      Q ${w} ${h} ${w - r} ${h}
      L ${r} ${h}
      Q 0 ${h} 0 ${h - r}
      L 0 ${r}
      Q 0 0 ${r} 0
      Z
    `;
  };

  // Calcular o perímetro do retângulo com cantos arredondados
  const perimeter = 2 * (width + height) - 8 * borderRadius + 2 * Math.PI * borderRadius;
  const pathString = createRoundedRectPath(width, height, borderRadius);

  return (
    <svg
      width={width + strokeWidth * 2}
      height={height + strokeWidth * 2}
      className={`absolute ${className}`}
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Borda de fundo */}
      <path
        d={pathString}
        transform={`translate(${strokeWidth}, ${strokeWidth})`}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
      />
      
      {/* Borda de progresso - CORRIGIDA */}
      <path
        d={pathString}
        transform={`translate(${strokeWidth}, ${strokeWidth})`}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={perimeter}
        strokeDashoffset={perimeter * (1 - progress / 100)}
        pathLength={perimeter}
        style={{
          transition: 'stroke-dashoffset 0.5s ease-out, stroke 0.3s ease-out'
        }}
      />
    </svg>
  );
};

export default BorderProgress;
