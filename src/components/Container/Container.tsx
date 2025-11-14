import type { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export const Container = ({ children, sidebar }: ContainerProps) => {
  return (
    <div className="container">
      <div className="main-content">
        {children}
      </div>
      <div className="sidebar">
        {sidebar}
      </div>
    </div>
  );
};
