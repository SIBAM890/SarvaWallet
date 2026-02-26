import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, X, ScanLine } from 'lucide-react';
import { VendorBadge } from '../components/VendorBadge';

export default function QRPay() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);

  // Simulate scanning a vendor code after 3 seconds
  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => {
        setScanning(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [scanning]);

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
            <h2 className="text-lg font-bold">Scan to Pay</h2>
            <div className="w-9" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">

          {/* Scanner Viewfinder */}
          <div className="relative w-full max-w-sm aspect-square bg-black/40 rounded-3xl overflow-hidden mb-8 border border-border-subtle shadow-inner flex items-center justify-center">
            {scanning ? (
              <>
                <div className="absolute top-0 left-0 w-full h-full p-8">
                  <div className="w-full h-full border-2 border-dashed border-white/20 rounded-xl relative">
                    {/* Corners */}
                    <div className="absolute -top-[2px] -left-[2px] w-8 h-8 border-t-4 border-l-4 border-accent-teal rounded-tl-xl" />
                    <div className="absolute -top-[2px] -right-[2px] w-8 h-8 border-t-4 border-r-4 border-accent-teal rounded-tr-xl" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-8 h-8 border-b-4 border-l-4 border-accent-teal rounded-bl-xl" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-8 h-8 border-b-4 border-r-4 border-accent-teal rounded-br-xl" />

                    {/* Laser line animation */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent-teal shadow-[0_0_15px_rgba(46,207,180,1)] opacity-70 animate-pulse" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <div className="inline-flex items-center gap-2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                    <ScanLine className="w-3 h-3 animate-spin" />
                    Scanning...
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center p-6 flex flex-col items-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-success-green/20 flex items-center justify-center mb-4">
                  <ScanLine className="w-8 h-8 text-success-green" />
                </div>
                <h3 className="text-lg font-bold mb-1">Vishwa Detected</h3>
                <p className="text-sm text-text-muted mb-6">Vendor ID: VSH-001</p>
                <button
                  onClick={() => navigate('/student/dashboard')}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(79,126,255,0.3)] transition-all"
                >
                  Pay ₹120
                </button>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-text-muted text-sm mb-6">
              Point your camera at a Vendor's QR code.
            </p>

            {/* Vendor logos */}
            <div className="flex items-center justify-center gap-3">
              <VendorBadge name="Vishwa" size="sm" />
              <div className="w-1 h-1 rounded-full bg-border-subtle" />
              <VendorBadge name="Murmuren" size="sm" />
              <div className="w-1 h-1 rounded-full bg-border-subtle" />
              <VendorBadge name="Kaivalya" size="sm" />
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