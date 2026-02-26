import React from 'react';
import { useNavigate } from 'react-router';
import { AdminKPICard } from '../components/AdminKPICard';
import { ActionButton } from '../components/ActionButton';
import { StatusBadge } from '../components/StatusBadge';
import { Home, Users, Store, FileBarChart, Settings, ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function FinanceAdminDashboard() {
  const navigate = useNavigate();

  const spendData = [
    { name: 'Vishwa', value: 45200, fill: '#4F7EFF' },
    { name: 'Murmuren', value: 32800, fill: '#3DDC97' },
    { name: 'Kaivalya', value: 28400, fill: '#F5A623' },
  ];

  const pendingApprovals = [
    { id: 'SSU-2024-0742', name: 'Arjun Sharma', totalSpend: 3420, cycle: 'Cycle 1' },
    { id: 'SSU-2024-0583', name: 'Priya Mehta', totalSpend: 2850, cycle: 'Cycle 1' },
    { id: 'SSU-2024-0219', name: 'Rahul Kumar', totalSpend: 4120, cycle: 'Cycle 1' },
  ];

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
                title="Pending Deductions"
                value="₹42.8K"
                subtitle="128 students"
              />
              <AdminKPICard
                title="Vendor Settlements Due"
                value="₹87.3K"
                trend="neutral"
                trendValue="3 vendors"
              />
            </div>

            {/* Chart */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-6">Monthly Spend by Vendor</h3>
              <ResponsiveContainer width="100%" height={300}>
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

            {/* Student Deduction Approvals Table */}
            <div className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h3 className="text-lg font-bold">Pending Deduction Approvals</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-bg/50">
                    <tr>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Student ID
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Name
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Cycle
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Total Spend
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle/50">
                    {pendingApprovals.map((student) => (
                      <tr key={student.id} className="hover:bg-surface-card/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm font-mono text-text-primary">
                            {student.id}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-primary">
                            {student.name}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-text-muted">
                            {student.cycle}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-sm font-semibold font-mono text-text-primary">
                            ₹{student.totalSpend.toLocaleString('en-IN')}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => navigate(`/admin/deduction/${student.id}`)}
                              className="px-3 py-1.5 text-xs font-medium bg-success-green/20 hover:bg-success-green/30 text-success-green border border-success-green/30 rounded-lg transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              className="px-3 py-1.5 text-xs font-medium bg-warning-amber/20 hover:bg-warning-amber/30 text-warning-amber border border-warning-amber/30 rounded-lg transition-colors"
                            >
                              Hold
                            </button>
                          </div>
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
