import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
      {title && <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
};
