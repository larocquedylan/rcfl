import React from 'react';
import { BsTelephone, BsEnvelope } from 'react-icons/bs';

interface ComponentNameProps {}

const ComponentName: React.FC<ComponentNameProps> = ({}) => (
  <>
    <hr className='mt-6 border-t border-gray-200' />

    <footer className='flex flex-col items-center justify-between w-full mx-4 mb-2 md:flex-row lg:w-1/2'>
      <a
        href='tel:780-691-5704'
        target='_blank'
        className='flex items-center p-1 ml-4 transition-colors duration-300 rounded-md hover:text-blue-500 hover:border-blue-900'
      >
        <BsTelephone />
        <p className='pl-4 my-2 text-sm'>1 (780) 691-5704</p>
      </a>
      <a
        href='mailto:justin.l@rocadvisors.ca'
        target='_blank'
        className='flex items-center p-1 mr-4 transition-colors duration-300 borderrounded-md hover:text-blue-500 hover:border-blue-900'
      >
        <BsEnvelope />
        <p className='pl-4 my-2 text-sm'>justin.l@rclf.ca</p>
      </a>
    </footer>
  </>
);

export default ComponentName;
