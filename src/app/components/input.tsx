// components/Input.tsx
'use client'
import React from 'react';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      name="searching"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;