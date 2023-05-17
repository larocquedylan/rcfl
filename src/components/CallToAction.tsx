import React from 'react';

interface CallToActionProps {}

const CallToAction: React.FC<CallToActionProps> = ({}) => {
  return (
    <p className='mt-4 text-sm font-semibold lg:text-base'>
      If you are interested in learning more about RCLF and how our leadership
      forum can benefit you,
      <a
        href='https://calendly.com/rclf'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold text-blue-500 hover:text-edmonton'
      >
        {' '}
        book a coffee with us!{' '}
      </a>
      Or, jump straight to our application form and apply{' '}
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScp9yVWKb8SShYUWskTzCu2Gv68mZ_HfqMC8G6gNT3SKpeV-Q/viewform?vc=0&c=0&w=1&flr=0'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold text-blue-500 hover:text-edmonton'
      >
        here.
      </a>
    </p>
  );
};

export default CallToAction;
