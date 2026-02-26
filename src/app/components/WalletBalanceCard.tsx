import React from 'react';

interface WalletBalanceCardProps {
  balance: number;
  cycle: string;
  percentSpent: number;
  variant?: 'glow' | 'normal';
}

export function WalletBalanceCard({ balance, cycle, percentSpent, variant = 'normal' }: WalletBalanceCardProps) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentSpent / 100) * circumference;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-subtle p-6 ${variant === 'glow'
          ? 'bg-surface-card shadow-[0_0_40px_rgba(79,126,255,0.3)] backdrop-blur-xl'
          : 'bg-surface-card/50 backdrop-blur-sm'
        }`}
      style={{
        backgroundImage: variant === 'glow'
          ? 'radial-gradient(circle at 50% 0%, rgba(79, 126, 255, 0.15), transparent 60%)'
          : undefined
      }}
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <div className="text-text-muted text-sm mb-1">Wallet Balance</div>
          <div className="text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
            ₹{balance.toLocaleString('en-IN')}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            <span className="text-xs text-text-primary">{cycle}</span>
          </div>
        </div>

        {/* Circular progress */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-border-subtle"
            />
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-accent-teal transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
              {Math.round(100 - percentSpent)}%
            </div>
            <div className="text-[10px] text-text-muted">left</div>
          </div>
        </div>
      </div>
    </div>
  );
}
