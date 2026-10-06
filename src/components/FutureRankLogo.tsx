import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const FutureRankLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-28 h-28 md:w-36 md:h-36 text-5xl'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl md:text-3xl'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-xs md:text-sm tracking-[0.45em]'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Futuristic F Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 rounded-xl blur-[10px] opacity-70 group-hover:opacity-100 transition-opacity" />
        
        {/* SVG Futuristic F with isometric bevel */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="30%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="fGradFacet" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="fGradDark" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>

          {/* Main 3D F Shape */}
          <path
            d="M22 14 H78 C82.5 14 85 18 83 22 L72 40 C70.5 42.5 68 44 65 44 H45 V52 H64 C68 52 70 55.5 68.5 59 L61 72 C59.5 75 57 76.5 53.5 76.5 H45 V86 C45 89 42.5 91.5 39.5 91.5 H26 C23 91.5 21 89 21 86 V19 C21 16 23 14 26 14 Z"
            fill="url(#fGradMain)"
          />

          {/* Facet Light Reflection */}
          <path
            d="M24 16 H76 L66 38 H43 V54 H60 L54 68 H43 V88 H25 V16 Z"
            fill="url(#fGradFacet)"
            opacity="0.35"
          />

          {/* Neon inner core line */}
          <path
            d="M32 24 H70 L62 36 H38 V60 H54 L48 70 H38 V82"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-wider text-white ${textSizes[size]} font-['Space_Grotesk',sans-serif]`}>
            FUTURE <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">RANK</span>
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-gradient-to-r from-transparent to-purple-500 opacity-60"></span>
            <span className={`font-semibold text-slate-400 ${subSizes[size]}`}>
              STUDIO
            </span>
            <span className="h-[1px] w-3 bg-gradient-to-l from-transparent to-purple-500 opacity-60"></span>
          </div>
        </div>
      )}
    </div>
  );
};
