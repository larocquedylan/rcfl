'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const Navbar = () => {
  const [isSmallScreen, setSmallScreen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    {
      href: '/why',
      name: 'Why a Forum?',
    },
    {
      href: '/rclf',
      name: 'Why RCLF?',
    },
    {
      href: '/process',
      name: 'Application Process',
    },
  ];

  useEffect(() => {
    // Check window width when component mounts
    if (window.innerWidth <= 600) {
      setSmallScreen(true);
    }

    // Add a resize listener to update state when window size changes
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='sticky top-0 z-50 flex flex-row justify-between ml-0 md:justify-start min-w-fit bg-gradient-to-t from-blue via-white dark:from-black dark:via-black lg:h-auto lg:w-auto lg:bg-none md:flex md:flex-col'>
      <div className='flex flex-row w-full rounded-md bg-edmonton 0 md:flex-col md:p-0 border-cyan-50 md:bg-transparent '>
        <Image
          className=' relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert lg:mx-auto'
          src='./svg/grayscale.svg'
          alt='rclf Logo'
          width={isSmallScreen ? 100 : 175}
          height={isSmallScreen ? 80 : 150}
          priority
        />

        <Link href='/' className='flex justify-center m-auto align-middle'>
          <h1 className='flex justify-center w-full m-auto text-lg font-semibold align-middle sm:text-lg md:px-4 hover:text-slate-500'>
            River City Leaders Forum
          </h1>
        </Link>
      </div>
      <hr className='my-2 border-t border-gray-200' />

      <div className='flex-col hidden gap-2 md:flex'>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <p
              className={`px-4 py-2 rounded hover:text-edmonton hover:bg-gray-200 dark:hover:bg-gray-800 ${
                pathname.startsWith(link.href)
                  ? 'font-semibold text-blue-500'
                  : ''
              }`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
