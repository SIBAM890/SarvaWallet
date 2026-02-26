import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { TransactionRow } from '../components/TransactionRow';

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Vishwa', 'Murmuren', 'Kaivalya'];

  const transactions = [
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 320, date: 'Feb 26, 2026', time: '2:45 PM', balance: 8680, month: 'February 2026' },
    { vendor: 'Murmuren', color: '#3DDC97', amount: 180, date: 'Feb 26, 2026', time: '11:20 AM', balance: 9000, month: 'February 2026' },
    { vendor: 'Kaivalya', color: '#F5A623', amount: 250, date: 'Feb 25, 2026', time: '6:30 PM', balance: 9180, month: 'February 2026' },
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 420, date: 'Feb 24, 2026', time: '1:15 PM', balance: 9430, month: 'February 2026' },
    { vendor: 'Murmuren', color: '#3DDC97', amount: 150, date: 'Feb 23, 2026', time: '12:00 PM', balance: 9850, month: 'February 2026' },
    { vendor: 'Kaivalya', color: '#F5A623', amount: 200, date: 'Feb 22, 2026', time: '7:45 PM', balance: 10000, month: 'February 2026' },
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 380, date: 'Feb 20, 2026', time: '3:20 PM', balance: 10200, month: 'February 2026' },
    { vendor: 'Vishwa', color: '#4F7EFF', amount: 290, date: 'Jan 30, 2026', time: '5:10 PM', balance: 12580, month: 'January 2026' },
    { vendor: 'Murmuren', color: '#3DDC97', amount: 160, date: 'Jan 28, 2026', time: '1:30 PM', balance: 12870, month: 'January 2026' },
    { vendor: 'Kaivalya', color: '#F5A623', amount: 230, date: 'Jan 26, 2026', time: '6:00 PM', balance: 13030, month: 'January 2026' },
  ];

  const filteredTransactions = activeFilter === 'All'
    ? transactions
    : transactions.filter(txn => txn.vendor === activeFilter);

  // Group transactions by month
  const groupedTransactions: { [key: string]: typeof transactions } = {};
  filteredTransactions.forEach(txn => {
    if (!groupedTransactions[txn.month]) {
      groupedTransactions[txn.month] = [];
    }
    groupedTransactions[txn.month].push(txn);
  });

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Mobile Frame */}
      <div className="max-w-[390px] mx-auto min-h-screen bg-primary-bg">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary-bg/95 backdrop-blur-lg border-b border-border-subtle">
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigate('/student/dashboard')}
                className="p-2 hover:bg-surface-card/50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-text-muted" />
              </button>
              <h2 className="text-lg font-bold">Transaction History</h2>
              <div className="w-9" />
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeFilter === filter
                    ? 'bg-brand-blue text-text-primary'
                    : 'bg-surface-card/50 text-text-muted hover:bg-surface-card'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="p-6 pt-4">
          {Object.entries(groupedTransactions).map(([month, txns]) => (
            <div key={month} className="mb-6 last:mb-0">
              {/* Month Separator */}
              <div className="text-xs text-text-muted uppercase tracking-wide mb-3 font-semibold">
                {month}
              </div>

              {/* Transactions */}
              <div className="bg-surface-card/50 backdrop-blur-sm border border-border-subtle rounded-xl p-4">
                {txns.map((txn, index) => (
                  <TransactionRow
                    key={index}
                    vendorName={txn.vendor}
                    vendorColor={txn.color}
                    amount={txn.amount}
                    timestamp={`${txn.date} · ${txn.time}`}
                    remainingBalance={txn.balance}
                    showBalance={true}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}