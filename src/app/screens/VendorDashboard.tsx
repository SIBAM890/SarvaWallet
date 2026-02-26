import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, QrCode, TrendingUp } from 'lucide-react';
import { ActionButton } from '../components/ActionButton';
import { StatusBadge } from '../components/StatusBadge';

export default function VendorDashboard() {
  const navigate = useNavigate();
  const { vendorName } = useParams<{ vendorName: string }>();

  const vendorColors: { [key: string]: string } = {
    Vishwa: '#4F7EFF',
    Murmuren: '#3DDC97',
    Kaivalya: '#F5A623',
  };

  const vendorColor = vendorColors[vendorName || 'Vishwa'];

  const recentPayments = [
    { studentId: 'SSU-2024-0742', name: 'Arjun Sharma', amount: 320, time: '2:45 PM' },
    { studentId: 'SSU-2024-0583', name: 'Priya Mehta', amount: 180, time: '2:20 PM' },
    { studentId: 'SSU-2024-0219', name: 'Rahul Kumar', amount: 250, time: '1:50 PM' },
    { studentId: 'SSU-2024-0891', name: 'Sneha Reddy', amount: 420, time: '1:15 PM' },
    { studentId: 'SSU-2024-0456', name: 'Vikram Singh', amount: 150, time: '12:40 PM' },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Mobile Frame */}
      <div className="max-w-[390px] mx-auto min-h-screen bg-primary-bg">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-surface-card/50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-muted" />
            </button>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: vendorColor }}
              />
              <h2 className="text-lg font-bold">{vendorName}</h2>
              <span className="text-text-muted">·</span>
              <span className="text-sm text-text-muted">Vendor Portal</span>
            </div>
            <div className="w-9" />
          </div>

          {/* Vendor QR Code Container */}
          <div className="bg-surface-card border border-border-subtle rounded-2xl p-8 mb-6 flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl mb-4">
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                <rect width="200" height="200" fill="white" />
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="25" y="25" width="30" height="30" fill="black" />
                <rect x="130" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="145" y="25" width="30" height="30" fill="black" />
                <rect x="10" y="130" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="25" y="145" width="30" height="30" fill="black" />
                <rect x="90" y="20" width="10" height="10" fill="black" />
                <rect x="110" y="20" width="10" height="10" fill="black" />
                <rect x="80" y="40" width="10" height="10" fill="black" />
                <rect x="100" y="40" width="10" height="10" fill="black" />
                <rect x="90" y="60" width="10" height="10" fill="black" />
                <rect x="20" y="90" width="10" height="10" fill="black" />
                <rect x="40" y="90" width="10" height="10" fill="black" />
                <rect x="60" y="90" width="10" height="10" fill="black" />
                <rect x="80" y="80" width="10" height="10" fill="black" />
                <rect x="100" y="90" width="10" height="10" fill="black" />
                <rect x="120" y="80" width="10" height="10" fill="black" />
                <rect x="140" y="90" width="10" height="10" fill="black" />
                <rect x="160" y="80" width="10" height="10" fill="black" />
                <rect x="180" y="90" width="10" height="10" fill="black" />
                <rect x="90" y="110" width="10" height="10" fill="black" />
                <rect x="110" y="110" width="10" height="10" fill="black" />
                <rect x="130" y="120" width="10" height="10" fill="black" />
                <rect x="150" y="110" width="10" height="10" fill="black" />
                <rect x="170" y="120" width="10" height="10" fill="black" />
                <rect x="80" y="140" width="10" height="10" fill="black" />
                <rect x="100" y="150" width="10" height="10" fill="black" />
                <rect x="120" y="140" width="10" height="10" fill="black" />
                <rect x="140" y="150" width="10" height="10" fill="black" />
                <rect x="160" y="140" width="10" height="10" fill="black" />
                <rect x="180" y="150" width="10" height="10" fill="black" />
                <rect x="90" y="170" width="10" height="10" fill="black" />
                <rect x="110" y="180" width="10" height="10" fill="black" />
                <rect x="130" y="170" width="10" height="10" fill="black" />
              </svg>
            </div>

            <div className="text-center">
              <div className="text-sm font-semibold mb-1" style={{ color: vendorColor }}>
                Scan to Pay {vendorName}
              </div>
              <div className="text-xs text-text-muted">
                Students can scan this from their app
              </div>
            </div>
          </div>

          {/* Settlement Status */}
          <div className="mt-6 flex items-center justify-between p-4 bg-surface-card/50 border border-border-subtle rounded-xl">
            <div>
              <div className="text-xs text-text-muted mb-1">Settlement Status</div>
              <div className="text-lg font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                ₹18,200
              </div>
            </div>
            <StatusBadge status="pending" label="Pending" />
          </div>

          {/* Recent Payments */}
          <div className="mt-8">
            <h3 className="text-sm text-text-muted uppercase tracking-wide mb-4">
              Recent Incoming Payments
            </h3>
            <div className="bg-surface-card/50 backdrop-blur-sm border border-border-subtle rounded-xl divide-y divide-border-subtle/50">
              {recentPayments.map((payment, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/admin/deduction/${payment.studentId}`)}
                  className="w-full p-4 hover:bg-surface-card/30 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-text-primary mb-0.5">
                        {payment.name}
                      </div>
                      <div
                        className="text-xs text-text-muted"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {payment.studentId}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-sm font-semibold mb-0.5"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          color: vendorColor
                        }}
                      >
                        +₹{payment.amount}
                      </div>
                      <div className="text-xs text-text-muted">
                        {payment.time}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}