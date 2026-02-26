import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { WalletBalanceCard } from '../components/WalletBalanceCard';
import { TransactionRow } from '../components/TransactionRow';
import { QrCode, History, FileText, HelpCircle, ArrowLeft, PlusCircle, Clock } from 'lucide-react';
import { ActionButton } from '../components/ActionButton';

export default function StudentDashboard() {
  const navigate = useNavigate();
  // To simulate low balance and request process
  const balance = 85;
  const [requestStatus, setRequestStatus] = useState<'idle' | 'requested'>('idle');

  const recentTransactions = [
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 320, time: 'Today, 2:45 PM', balance: 8680 },
    { vendor: 'Murmuren', color: '#3DDC97', amount: 180, time: 'Today, 11:20 AM', balance: 9000 },
    { vendor: 'Kaivalya', color: '#F5A623', amount: 250, time: 'Yesterday, 6:30 PM', balance: 9180 },
  ];

  const quickActions = [
    { icon: QrCode, label: 'Scan to Pay', action: () => navigate('/student/qr-pay') },
    { icon: History, label: 'Transaction History', action: () => navigate('/student/history') },
    { icon: FileText, label: 'Download Statement', action: () => { } },
    { icon: HelpCircle, label: 'Support', action: () => { } },
  ];

  const handleRequestFunds = () => {
    setRequestStatus('requested');
  }

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
                <div className="text-[10px] text-accent-teal font-mono mt-0.5">ID: SSU-2026-1042</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                SS
              </div>
            </div>
          </div>

          {/* Wallet Balance Card */}
          <div className="mb-6">
            <WalletBalanceCard
              balance={balance}
              cycle="Cycle 1 of 3 · Apr–Jun 2026"
              percentSpent={98}
              variant="glow"
            />
          </div>

          {/* Low Balance Alert & Fund Request */}
          {balance < 100 && (
            <div className="mb-6 bg-warning-amber/10 border border-warning-amber/30 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-warning-amber font-semibold mb-1">Low Balance Alert</div>
                <div className="text-xs text-text-muted">Need emergency funds?</div>
              </div>
              {requestStatus === 'idle' ? (
                <button
                  onClick={handleRequestFunds}
                  className="bg-warning-amber/20 hover:bg-warning-amber/30 text-warning-amber text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <PlusCircle className="w-3 h-3" />
                  Request Funds
                </button>
              ) : (
                <div className="bg-surface-card border border-border-subtle text-text-muted text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3 text-warning-amber" />
                  Pending Approval
                </div>
              )}
            </div>
          )}

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
                    className="bg-surface-card/50 backdrop-blur-sm border border-border-subtle rounded-xl p-4 hover:border-accent-teal/50 hover:bg-surface-card transition-all group object-left"
                  >
                    <Icon className="w-6 h-6 text-accent-teal mb-2 group-hover:scale-110 transition-transform mx-auto" />
                    <div className="text-sm text-text-primary text-center">{action.label}</div>
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