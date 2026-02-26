import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AdminKPICard } from '../components/AdminKPICard';
import { ActionButton } from '../components/ActionButton';
import { StatusBadge } from '../components/StatusBadge';
import { Home, Users, Store, FileBarChart, Settings, ArrowLeft, Check, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FinanceAdminDashboard() {
  const navigate = useNavigate();

  const spendData = [
    { name: 'Vishwa', value: 45200, fill: '#4F7EFF' },
    { name: 'Murmuren', value: 32800, fill: '#3DDC97' },
    { name: 'Kaivalya', value: 28400, fill: '#F5A623' },
  ];

  const recentTransactions = [
    { id: 'SSU-2026-1042', name: 'Sibam Sahoo', vendor: 'Vishwa', amount: 120, time: 'Today, 2:45 PM' },
    { id: 'SSU-2024-0583', name: 'Priya Mehta', vendor: 'Murmuren', amount: 80, time: 'Today, 2:20 PM' },
    { id: 'SSU-2024-0219', name: 'Rahul Kumar', vendor: 'Kaivalya', amount: 250, time: 'Today, 1:50 PM' },
    { id: 'SSU-2024-0891', name: 'Sneha Reddy', vendor: 'Vishwa', amount: 420, time: 'Today, 1:15 PM' },
  ];

  const [fundRequests, setFundRequests] = useState([
    { id: 'SSU-2026-1042', name: 'Sibam Sahoo', requestedAmount: 1000, currentBalance: 85, status: 'pending' },
    { id: 'SSU-2024-0456', name: 'Vikram Singh', requestedAmount: 500, currentBalance: 12, status: 'pending' },
  ]);

  const handleApproveRequest = (studentId: string) => {
    setFundRequests(requests => requests.map(req =>
      req.id === studentId ? { ...req, status: 'approved' } : req
    ));
  };

  const handleRejectRequest = (studentId: string) => {
    setFundRequests(requests => requests.map(req =>
      req.id === studentId ? { ...req, status: 'rejected' } : req
    ));
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Desktop Frame - 1440x900 */}
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-surface-card border-r border-border-subtle flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SSU</span>
              </div>
              <div>
                <div className="font-bold text-sm">SarvaWallet</div>
                <div className="text-xs text-text-muted">Finance Admin</div>
              </div>
            </div>

            <nav className="space-y-1">
              {[
                { icon: Home, label: 'Overview', active: true },
                { icon: Users, label: 'Students', active: false },
                { icon: Store, label: 'Vendors', active: false },
                { icon: FileBarChart, label: 'Reports', active: false },
                { icon: Settings, label: 'Settings', active: false },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active
                      ? 'bg-brand-blue text-text-primary'
                      : 'text-text-muted hover:bg-surface-card hover:text-text-primary'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto p-6">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-muted hover:bg-surface-card hover:text-text-primary transition-colors text-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Login</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Finance Dashboard</h1>
              <p className="text-text-muted">
                Sri Sri University SarvaWallet System
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <AdminKPICard
                title="Total Active Wallets"
                value="1,247"
                trend="up"
                trendValue="+23 this week"
              />
              <AdminKPICard
                title="Total Spend This Month"
                value="₹1.06L"
                subtitle="February 2026"
              />
              <AdminKPICard
                title="Pending Verification"
                value={fundRequests.filter(req => req.status === 'pending').length.toString()}
                subtitle="Fund Raises"
              />
              <AdminKPICard
                title="Vendor Settlements Due"
                value="₹87.3K"
                trend="neutral"
                trendValue="3 vendors"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Chart */}
              <div className="bg-surface-card border border-border-subtle rounded-xl p-6">
                <h3 className="text-lg font-bold mb-6">Monthly Spend by Vendor</h3>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={spendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2D1F4A" />
                    <XAxis
                      dataKey="name"
                      stroke="#8B7AA8"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#8B7AA8"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1128',
                        border: '1px solid #2D1F4A',
                        borderRadius: '8px',
                        color: '#F0EAFF'
                      }}
                      formatter={(value: number) => [`₹${value.toLocaleString('en-IN')}`, 'Spend']}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Fund Raise Verification Table */}
              <div className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border-subtle">
                  <h3 className="text-lg font-bold">Fund Raise Requests</h3>
                </div>

                <div className="overflow-x-auto flex-1">
                  <table className="w-full">
                    <thead className="bg-primary-bg/50">
                      <tr>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                          Student
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                          Bal / Request
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle/50">
                      {fundRequests.map((req) => (
                        <tr key={req.id} className="hover:bg-surface-card/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="text-sm text-text-primary">{req.name}</div>
                            <div className="text-xs font-mono text-text-muted">{req.id}</div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="text-xs text-warning-amber">Bal: ₹{req.currentBalance}</div>
                            <div className="text-sm font-semibold text-success-green">+₹{req.requestedAmount}</div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {req.status === 'pending' ? (
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleApproveRequest(req.id)}
                                  className="w-8 h-8 flex items-center justify-center bg-success-green/20 hover:bg-success-green/30 text-success-green border border-success-green/30 rounded-lg transition-colors"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleRejectRequest(req.id)}
                                  className="w-8 h-8 flex items-center justify-center bg-red-400/20 hover:bg-red-400/30 text-red-400 border border-red-500/30 rounded-lg transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <StatusBadge status={req.status as 'approved'} />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Global Transactions Table */}
            <div className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden mt-8">
              <div className="p-6 border-b border-border-subtle">
                <h3 className="text-lg font-bold">Global Transaction Feed</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-bg/50">
                    <tr>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Student details
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Vendor
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Time
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle/50">
                    {recentTransactions.map((txn, index) => (
                      <tr key={index} className="hover:bg-surface-card/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-primary block">{txn.name}</span>
                          <span className="text-xs font-mono text-text-muted">
                            {txn.id}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-primary">
                            {txn.vendor}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-muted">
                            {txn.time}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-sm font-semibold font-mono text-text-primary">
                            ₹{txn.amount.toLocaleString('en-IN')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
