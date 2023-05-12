import Link from 'next/link';
import ClientNavBar from './ClientNavBar';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 h-screen ml-0 bg-gradient-to-t from-blue via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
      <div className='p-0 pt-2'>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='./svg/grayscale.svg'
          alt='rclf Logo'
          width={225}
          height={200}
          priority
        />
        <Link href='/'>
          <h1 className='p-0 text-xl font-semibold md:p-4 md:text-md '>
            River City Leadership Forum
          </h1>
        </Link>
      </div>
      <div className='flex-col hidden gap-2 md:flex'>
        <Link href='/why'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            1. Why a leadership group?
          </p>
        </Link>
        <Link href='/rclf'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            2. Why RCLF as the group?
          </p>
        </Link>
        <Link href='/process'>
          <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
            3. Our process?
          </p>
        </Link>
      </div>
      <div className='md:hidden'>
        <ClientNavBar>
          <div className='flex flex-col gap-2'>
            <Link href='/why'>
              <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
                1. Why a leadership group?
              </p>
            </Link>
            <Link href='/rclf'>
              <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
                2. Why RCLF as the group?
              </p>
            </Link>
            <Link href='/process'>
              <p className='px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800'>
                3. Our process?
              </p>
            </Link>
          </div>
        </ClientNavBar>
      </div>
    </nav>
  );
}
