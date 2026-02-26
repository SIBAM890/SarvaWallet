import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, CheckCircle2, User } from 'lucide-react';
import { ActionButton } from '../components/ActionButton';
import { StatusBadge } from '../components/StatusBadge';
import { VendorBadge } from '../components/VendorBadge';

export default function DeductionConfirmation() {
  const navigate = useNavigate();
  const { studentId } = useParams<{ studentId: string }>();
  const [status, setStatus] = useState<'pending' | 'approved' | 'flagged'>('pending');

  const studentData = {
    id: studentId || 'SSU-2024-0742',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@srisriuniversity.edu.in',
    cycle: 'Cycle 1 of 3 (Apr–May 2026)',
  };

  const spendSummary = [
    { vendor: 'Vishwa' as const, amount: 1820, transactions: 12 },
    { vendor: 'Murmuren' as const, amount: 980, transactions: 8 },
    { vendor: 'Kaivalya' as const, amount: 620, transactions: 5 },
  ];

  const totalAmount = spendSummary.reduce((sum, item) => sum + item.amount, 0);

  const handleApprove = () => {
    setStatus('approved');
  };

  const handleFlag = () => {
    setStatus('flagged');
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Desktop Frame */}
      <div className="max-w-4xl mx-auto min-h-screen p-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Dashboard</span>
          </button>
          <h1 className="text-3xl font-bold mb-2">Monthly Deduction Review</h1>
          <p className="text-text-muted">
            Review and approve student wallet deductions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Student Info */}
          <div className="col-span-2 space-y-6">
            {/* Student Details Card */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                    AS
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1">{studentData.name}</h2>
                    <div className="text-sm text-text-muted font-mono mb-1">
                      {studentData.id}
                    </div>
                    <div className="text-xs text-text-muted">
                      {studentData.email}
                    </div>
                  </div>
                </div>
                {status !== 'pending' && (
                  <StatusBadge status={status} />
                )}
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <div className="text-xs text-text-muted uppercase tracking-wide mb-2">
                  Billing Cycle
                </div>
                <div className="text-sm text-text-primary">
                  {studentData.cycle}
                </div>
              </div>
            </div>

            {/* Cycle Spend Summary */}
            <div className="bg-surface-card border border-border-subtle rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h3 className="text-lg font-bold">Cycle Spend Summary</h3>
              </div>

              <table className="w-full">
                <thead className="bg-primary-bg/50">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Vendor
                    </th>
                    <th className="text-center px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Transactions
                    </th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle/50">
                  {spendSummary.map((item) => (
                    <tr key={item.vendor} className="hover:bg-surface-card/30 transition-colors">
                      <td className="px-6 py-4">
                        <VendorBadge name={item.vendor} size="sm" clickable />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-text-muted">
                          {item.transactions}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-semibold font-mono text-text-primary">
                          ₹{item.amount.toLocaleString('en-IN')}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-primary-bg/50 font-semibold">
                    <td className="px-6 py-4 text-sm text-text-primary">
                      Total
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-text-muted">
                      {spendSummary.reduce((sum, item) => sum + item.transactions, 0)}
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-mono text-text-primary">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            {/* Deduction Amount Card */}
            <div className="bg-surface-card border border-border-subtle rounded-xl p-6">
              <div className="text-xs text-text-muted uppercase tracking-wide mb-2">
                Total to Deduct
              </div>
              <div
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                ₹{totalAmount.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-text-muted">
                From student account at cycle end
              </div>
            </div>

            {/* Action Buttons */}
            {status === 'pending' ? (
              <div className="space-y-3">
                <ActionButton
                  variant="success"
                  size="md"
                  fullWidth
                  onClick={handleApprove}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve Deduction</span>
                  </div>
                </ActionButton>

                <ActionButton
                  variant="warning"
                  size="md"
                  fullWidth
                  onClick={handleFlag}
                >
                  Flag for Review
                </ActionButton>
              </div>
            ) : (
              <div className="bg-surface-card/50 border border-border-subtle rounded-xl p-6 text-center">
                {status === 'approved' ? (
                  <>
                    <CheckCircle2 className="w-12 h-12 text-success-green mx-auto mb-3" />
                    <div className="text-lg font-bold text-success-green mb-2">
                      Approved ✓
                    </div>
                    <div className="text-sm text-text-muted mb-4">
                      Deduction has been approved and queued for processing
                    </div>
                    <ActionButton
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={() => navigate('/admin/dashboard')}
                    >
                      Back to Dashboard
                    </ActionButton>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-warning-amber/20 flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 text-warning-amber" />
                    </div>
                    <div className="text-lg font-bold text-warning-amber mb-2">
                      Flagged for Review
                    </div>
                    <div className="text-sm text-text-muted mb-4">
                      This case has been marked for manual review
                    </div>
                    <ActionButton
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={() => navigate('/admin/dashboard')}
                    >
                      Back to Dashboard
                    </ActionButton>
                  </>
                )}
              </div>
            )}

            {/* Info Box */}
            <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-4">
              <div className="text-xs text-text-muted mb-2">
                ℹ️ Deduction Policy
              </div>
              <div className="text-xs text-text-primary leading-relaxed">
                Deductions are processed at the end of each cycle. Students are notified 48 hours before processing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}