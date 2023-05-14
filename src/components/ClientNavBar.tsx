'use client';

import { useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
interface ClientNavbarProps {
  children: React.ReactNode;
}

const ClientNavBar: React.FC<ClientNavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='p-2 text-gray-600 dark:text-gray-200 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerMenuIcon />
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      {isOpen && children}
    </>
  );
};

export default ClientNavBar;
