import Link from 'next/link';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface NextPageProps {
  prevPage?: string;
  nextPage?: string;
}

const NextPage: React.FC<NextPageProps> = ({ prevPage, nextPage }) => {
  return (
    <div className='flex flex-row justify-between w-full mx-12 mb-8'>
      <div className='flex flex-row justify-between p-4 align-middle bg-blue-500 rounded-md hover:bg-blue-100'>
        {prevPage && (
          <Link href={prevPage}>
            <ArrowLeftIcon className='align-middle' /> {'  '}
          </Link>
        )}
      </div>

      <div className='flex flex-row justify-between p-4 align-middle bg-blue-500 rounded-md hover:bg-blue-100'>
        {nextPage && (
          <Link href={nextPage}>
            {' '}
            <ArrowRightIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NextPage;
