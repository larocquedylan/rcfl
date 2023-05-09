'use client';

import { useState } from 'react';

export default function ClientNavbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='p-2 text-gray-600 dark:text-gray-200 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      {isOpen && children}
    </>
  );
}
