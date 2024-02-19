import React, { ReactEventHandler } from 'react';
import './myButton.css'

interface MyButtonProps {
  label: string;
  onClick: ReactEventHandler;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default MyButton;
