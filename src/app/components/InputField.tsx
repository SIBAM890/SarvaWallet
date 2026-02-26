import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({ label, type = 'text', placeholder, value, onChange }: InputFieldProps) {
  return (
    <div className="w-full">
      <label className="block text-sm text-text-muted mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-surface-card/50 border border-border-subtle text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 backdrop-blur-sm transition-all"
      />
    </div>
  );
}
