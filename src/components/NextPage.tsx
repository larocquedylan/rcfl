import Link from 'next/link';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface NextPageProps {
  prevPage?: string;
  nextPage?: string;
}

const NextPage: React.FC<NextPageProps> = ({ prevPage, nextPage }) => {
  if (prevPage || nextPage === '/') {
  }
  return (
    <div className='flex flex-row justify-between w-full mx-4 mb-8'>
      <div className='flex'>
        {prevPage && (
          <Link href={prevPage}>
            <div className='flex flex-row items-center justify-between p-4 align-middle border border-blue-500 rounded-md min-w-fit border-spacing-1 hover:bg-blue-100'>
              <ArrowLeftIcon className='align-middle' fontWeight='600' /> {'  '}
              <p className='pl-4'>{prevPage === '/' ? '/home' : prevPage}</p>
            </div>
          </Link>
        )}
      </div>
      <div className='flex'>
        {nextPage && (
          <Link href={nextPage}>
            <div className='flex flex-row items-center justify-between p-4 align-middle border border-blue-500 rounded-md min-w-fit border-spacing-1 hover:bg-blue-100'>
              <p className='pr-4'>{nextPage === '/' ? '/home' : nextPage} </p>{' '}
              <ArrowRightIcon className='align-middle' fontWeight='600' />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NextPage;
