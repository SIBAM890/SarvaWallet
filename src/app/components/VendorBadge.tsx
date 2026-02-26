import React from 'react';
import { useNavigate } from 'react-router';

interface VendorBadgeProps {
  name: 'Vishwa' | 'Murmuren' | 'Kaivalya';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
}

const vendorColors = {
  Vishwa: '#4F7EFF',
  Murmuren: '#2ECFB4',
  Kaivalya: '#F5A623',
};

export function VendorBadge({ name, size = 'md', clickable = false }: VendorBadgeProps) {
  const navigate = useNavigate();
  const color = vendorColors[name];

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const handleClick = () => {
    if (clickable) {
      navigate(`/vendor/${name}`);
    }
  };

  const Component = clickable ? 'button' : 'div';

  return (
    <Component
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full border ${sizeClasses[size]} ${clickable ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      style={{
        backgroundColor: `${color}20`,
        borderColor: `${color}50`,
        color: color
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="font-medium">{name}</span>
    </Component>
  );
}