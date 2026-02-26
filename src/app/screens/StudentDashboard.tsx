import React from 'react';
import { useNavigate } from 'react-router';
import { WalletBalanceCard } from '../components/WalletBalanceCard';
import { TransactionRow } from '../components/TransactionRow';
import { QrCode, History, FileText, HelpCircle, ArrowLeft } from 'lucide-react';

export default function StudentDashboard() {
  const navigate = useNavigate();

  const recentTransactions = [
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 320, time: 'Today, 2:45 PM', balance: 8680 },
    { vendor: 'Murmuren', color: '#3DDC97', amount: 180, time: 'Today, 11:20 AM', balance: 9000 },
    { vendor: 'Kaivalya', color: '#F5A623', amount: 250, time: 'Yesterday, 6:30 PM', balance: 9180 },
  ];

  const quickActions = [
    { icon: QrCode, label: 'Pay at Vendor', action: () => navigate('/student/qr-pay') },
    { icon: History, label: 'Transaction History', action: () => navigate('/student/history') },
    { icon: FileText, label: 'Download Statement', action: () => { } },
    { icon: HelpCircle, label: 'Support', action: () => { } },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Mobile Frame */}
      <div className="max-w-[390px] mx-auto min-h-screen bg-primary-bg relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-brand-blue/10 to-transparent pointer-events-none" />

        <div className="relative p-6 pb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-surface-card/50 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-text-muted" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-text-muted">Hey</div>
                <div className="text-sm font-semibold">Sibam 👋</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                SS
              </div>
            </div>
          </div>

          {/* Wallet Balance Card */}
          <div className="mb-6">
            <WalletBalanceCard
              balance={6240}
              cycle="Cycle 1 of 3 · Apr–Jun 2026"
              percentSpent={25}
              variant="glow"
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-sm text-text-muted mb-4 uppercase tracking-wide">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className="bg-surface-card/50 backdrop-blur-sm border border-border-subtle rounded-xl p-4 hover:border-accent-teal/50 hover:bg-surface-card transition-all group"
                  >
                    <Icon className="w-6 h-6 text-accent-teal mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-text-primary">{action.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-text-muted uppercase tracking-wide">Recent Transactions</h3>
              <button
                onClick={() => navigate('/student/history')}
                className="text-xs text-accent-teal hover:underline"
              >
                View All
              </button>
            </div>
            <div className="bg-surface-card/50 backdrop-blur-sm border border-border-subtle rounded-xl p-4">
              {recentTransactions.map((txn, index) => (
                <TransactionRow
                  key={index}
                  vendorName={txn.vendor}
                  vendorColor={txn.color}
                  amount={txn.amount}
                  timestamp={txn.time}
                  clickable
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}