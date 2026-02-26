import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { InputField } from '../components/InputField';
import { ActionButton } from '../components/ActionButton';
import { Wallet } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to student dashboard
    navigate('/student/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2D1F4A 1px, transparent 1px),
            linear-gradient(to bottom, #2D1F4A 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gradient orb background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

      {/* Login Card */}
      <div className="relative w-full max-w-md mx-4">
        <div className="bg-surface-card/70 backdrop-blur-xl border border-border-subtle rounded-2xl p-8 shadow-[0_0_60px_rgba(79,126,255,0.2)]">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/20 rounded-2xl border border-brand-blue/30 mb-4">
              <Wallet className="w-8 h-8 text-accent-teal" />
            </div>
            <h1 className="text-2xl mb-2">SarvaWallet</h1>
            <p className="text-text-muted text-sm">Sri Sri University</p>
          </div>

          {/* Login Form */}
          <div className="space-y-4 mb-6">
            <InputField
              label="Student ID"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <ActionButton variant="primary" size="lg" fullWidth onClick={handleLogin}>
            Enter SarvaWallet
          </ActionButton>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-border-subtle">
            <p className="text-xs text-text-muted">
              Sri Sri University · Secure Campus Payments
            </p>
          </div>
        </div>

        {/* Quick Access Buttons for Demo */}
        <div className="mt-6 text-center space-y-2">
          <button
            onClick={() => navigate('/vendor/Vishwa')}
            className="text-xs text-text-muted hover:text-accent-teal transition-colors"
          >
            Demo: Vendor Dashboard
          </button>
          <span className="text-text-muted mx-2">|</span>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="text-xs text-text-muted hover:text-accent-teal transition-colors"
          >
            Demo: Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
