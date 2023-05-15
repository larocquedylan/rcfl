'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ClientNavBar from './ClientNavBar';
import Image from 'next/image';

export default function Navbar() {
  const [isSmallScreen, setSmallScreen] = useState(false);

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
    <nav className='static top-0 z-50 flex flex-row justify-between ml-0 md:justify-start min-w-fit bg-gradient-to-t from-blue via-white dark:from-black dark:via-black lg:sticky lg:h-auto lg:w-auto lg:bg-none md:flex md:flex-col'>
      <div className='flex flex-row md:flex-col md:p-0 basis-7/8'>
        {isSmallScreen ? (
          <Image
            className='pl-0 sm:pl-4 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='./svg/grayscale.svg'
            alt='rclf Logo'
            width={70}
            height={70}
            priority
          />
        ) : (
          <Image
            className='pl-0 md:pl-4 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='./svg/grayscale.svg'
            alt='rclf Logo'
            width={250}
            height={200}
            priority
          />
        )}

        <Link href='/' className='flex justify-center m-auto align-middle'>
          <h1 className='w-full text-lg font-semibold sm:text-lg md:p-4 '>
            River City Leadership Forum
          </h1>
        </Link>
      </div>
      <div className='flex-col hidden gap-2 md:flex'>
        <Link href='/why'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            Why a Forum?
          </p>
        </Link>
        <Link href='/rclf'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            Why RCLF Forum?
          </p>
        </Link>
        <Link href='/process'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            Application Process
          </p>
        </Link>
      </div>
    </nav>
  );
}
