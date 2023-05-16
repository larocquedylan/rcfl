import React from 'react';

interface CallToActionProps {}

const CallToAction: React.FC<CallToActionProps> = ({}) => {
  return (
    <p className='mt-4 text-sm font-semibold lg:text-base'>
      If you are interested in learning more about RCLF,{' '}
      <a
        href='https://calendly.com/rclf'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold text-blue-500'
      >
        {' '}
        Book a call with us!
      </a>{' '}
      We would be happy to provide some value, answer questions, and help
      determine if RCLF is a good fit for you.
    </p>
  );
};

export default CallToAction;
