import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/NavBar';
import NextPage from '@/components/NextPage';

const ProcessAccordion = dynamic(
  () => import('../../components/ProcessAccordion'),
  {
    ssr: false,
  }
);

const ProcessPage = () => (
  <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
    <Navbar />
    <main className='flex flex-col items-center justify-between w-full min-h-screen px-0 lg:px-16'>
      <div className='grid w-full max-w-5xl my-4 md:my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
        <div className='px-4 py-0 md:px-5 md:py-4'>
          <h2 className='mb-3 text-2xl font-semibold'>Your RCLF journey</h2>
          <ProcessAccordion />
        </div>
      </div>
      <hr className='mt-6 border-t border-gray-200' />
      <div className='flex justify-between w-full'>
        <NextPage prevPage='/rclf' nextPage='/' />
      </div>
    </main>
  </div>
);

export default ProcessPage;
