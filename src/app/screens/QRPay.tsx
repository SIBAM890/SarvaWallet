import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, X } from 'lucide-react';
import { VendorBadge } from '../components/VendorBadge';

export default function QRPay() {
  const navigate = useNavigate();
  const walletId = "SSU-2024-0742";

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Mobile Frame */}
      <div className="max-w-[390px] mx-auto min-h-screen bg-primary-bg relative flex flex-col">
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/student/dashboard')}
              className="p-2 hover:bg-surface-card/50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-muted" />
            </button>
            <h2 className="text-lg font-bold">Pay at Vendor</h2>
            <div className="w-9" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
          {/* QR Code Container */}
          <div className="bg-surface-card border border-border-subtle rounded-2xl p-8 shadow-[0_0_40px_rgba(79,126,255,0.2)] mb-6">
            <div className="bg-white p-6 rounded-xl mb-4">
              {/* QR Code SVG */}
              <svg viewBox="0 0 200 200" className="w-48 h-48">
                {/* Simple QR code pattern */}
                <rect width="200" height="200" fill="white" />
                {/* Corner markers */}
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="25" y="25" width="30" height="30" fill="black" />
                <rect x="130" y="10" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="145" y="25" width="30" height="30" fill="black" />
                <rect x="10" y="130" width="60" height="60" fill="none" stroke="black" strokeWidth="8" />
                <rect x="25" y="145" width="30" height="30" fill="black" />
                {/* Data pattern */}
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

            {/* Wallet ID */}
            <div className="text-center">
              <div className="text-xs text-text-muted mb-1">Wallet ID</div>
              <div
                className="text-lg font-semibold text-accent-teal"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {walletId}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-text-muted text-sm mb-6">
              Show this to pay at any SarvaWallet vendor.
            </p>

            {/* Vendor logos */}
            <div className="flex items-center justify-center gap-3">
              <VendorBadge name="Vishwa" size="sm" clickable />
              <div className="w-1 h-1 rounded-full bg-border-subtle" />
              <VendorBadge name="Murmuren" size="sm" clickable />
              <div className="w-1 h-1 rounded-full bg-border-subtle" />
              <VendorBadge name="Kaivalya" size="sm" clickable />
            </div>
          </div>

          {/* Cancel Button */}
          <button
            onClick={() => navigate('/student/dashboard')}
            className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}