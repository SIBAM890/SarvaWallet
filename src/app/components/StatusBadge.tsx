import React from 'react';
import { CheckCircle2, Clock, AlertCircle, Flag } from 'lucide-react';

interface StatusBadgeProps {
  status: 'active' | 'pending' | 'settled' | 'flagged' | 'approved';
  label?: string;
}

const statusConfig = {
  active: {
    color: '#3DDC97',
    bgColor: 'rgba(61, 220, 151, 0.15)',
    borderColor: 'rgba(61, 220, 151, 0.3)',
    icon: CheckCircle2,
    defaultLabel: 'Active'
  },
  pending: {
    color: '#F5A623',
    bgColor: 'rgba(245, 166, 35, 0.15)',
    borderColor: 'rgba(245, 166, 35, 0.3)',
    icon: Clock,
    defaultLabel: 'Pending'
  },
  settled: {
    color: '#3DDC97',
    bgColor: 'rgba(61, 220, 151, 0.15)',
    borderColor: 'rgba(61, 220, 151, 0.3)',
    icon: CheckCircle2,
    defaultLabel: 'Settled ✓'
  },
  flagged: {
    color: '#d4183d',
    bgColor: 'rgba(212, 24, 61, 0.15)',
    borderColor: 'rgba(212, 24, 61, 0.3)',
    icon: Flag,
    defaultLabel: 'Flagged'
  },
  approved: {
    color: '#3DDC97',
    bgColor: 'rgba(61, 220, 151, 0.15)',
    borderColor: 'rgba(61, 220, 151, 0.3)',
    icon: CheckCircle2,
    defaultLabel: 'Approved ✓'
  }
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;
  const displayLabel = label || config.defaultLabel;
  
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border text-sm font-medium"
      style={{
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
        color: config.color
      }}
    >
      <Icon className="w-4 h-4" />
      <span>{displayLabel}</span>
    </div>
  );
}
