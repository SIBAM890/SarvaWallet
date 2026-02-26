import React from 'react';

interface AdminKPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function AdminKPICard({ title, value, subtitle, trend, trendValue }: AdminKPICardProps) {
  const trendColors = {
    up: 'text-success-green',
    down: 'text-red-400',
    neutral: 'text-text-muted'
  };

  return (
    <div className="bg-surface-card border border-border-subtle rounded-xl p-6 backdrop-blur-sm hover:border-accent-teal/30 transition-all">
      <div className="text-xs text-text-muted uppercase tracking-wide mb-2">{title}</div>
      <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
        {value}
      </div>
      {subtitle && (
        <div className="text-sm text-text-muted">{subtitle}</div>
      )}
      {trend && trendValue && (
        <div className={`text-xs mt-2 ${trendColors[trend]}`}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
        </div>
      )}
    </div>
  );
}
