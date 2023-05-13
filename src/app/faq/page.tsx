import Navbar from '@/components/NavBar';
import React from 'react';

interface FaqProps {}

const Faq: React.FC<FaqProps> = ({}) => {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 md:px-16'>
        <div className='grid w-full max-w-5xl my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:py-4'>
            <h2 className='mb-3 text-2xl font-semibold'>
              Frequently Asked Questions{' '}
            </h2>
            <h5 className='text-sm lg:text-base'>
              What does payment look like?{' '}
            </h5>
            <p className='mt-6 text-sm lg:text-base'>RCLF bills quarterly</p>
            <h5 className='mt-4 text-xl font-semibold'>
              What are the rules of engagement?{' '}
            </h5>
            <p className='mt-6 text-sm lg:text-base'>
              The rules are simple, failure to follow the rules will result in a
              vote of confidence from the group.
              <ul>
                <li>The group is confidential</li>
                <li>
                  Member&apos;s won&apos;t be placed in a group with suppliers,
                  competitors, customers, or close colleagues.
                </li>
                <li>
                  Member&apos;s cannot miss more than 1.5 meetings and if one
                  does, the group will vote on their status within the group -
                  consistency and reliability are paramount.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faq;
