import React from 'react';

interface TransactionRowProps {
  vendorName: string;
  vendorColor: string;
  amount: number;
  timestamp: string;
  remainingBalance?: number;
  showBalance?: boolean;
}

export function TransactionRow({
  vendorName,
  vendorColor,
  amount,
  timestamp,
  remainingBalance,
  showBalance = false,
}: TransactionRowProps) {

  return (
    <div className={`flex items-center justify-between py-3 border-b border-border-subtle/50 last:border-0 hover:bg-surface-card/30 px-3 -mx-3 rounded-lg transition-colors`}>
      <div className="flex items-center gap-3">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: vendorColor }}
        />
        <div>
          <div className="text-sm text-text-primary">{vendorName}</div>
          <div className="text-xs text-text-muted">{timestamp}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm font-semibold text-red-400" style={{ fontFamily: 'var(--font-mono)' }}>
          −₹{amount.toLocaleString('en-IN')}
        </div>
        {showBalance && remainingBalance !== undefined && (
          <div className="text-xs text-text-muted mt-0.5" style={{ fontFamily: 'var(--font-mono)' }}>
            Bal: ₹{remainingBalance.toLocaleString('en-IN')}
          </div>
        )}
      </div>
    </div>
  );
}