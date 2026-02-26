import React from 'react';
import { useNavigate } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';
import { ActionButton } from '../components/ActionButton';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-warning-amber/20 rounded-full mb-6">
          <AlertCircle className="w-12 h-12 text-warning-amber" />
        </div>
        
        {/* Message */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-text-primary mb-2">Page Not Found</p>
        <p className="text-text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Actions */}
        <div className="space-y-3">
          <ActionButton 
            variant="primary" 
            size="lg" 
            fullWidth
            onClick={() => navigate('/')}
          >
            <div className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              <span>Back to Login</span>
            </div>
          </ActionButton>
          
          <ActionButton 
            variant="secondary" 
            size="lg" 
            fullWidth
            onClick={() => navigate('/student/dashboard')}
          >
            Go to Student Dashboard
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
