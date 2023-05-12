import React from 'react';
import dynamic from 'next/dynamic';

const ProcessAccordion = dynamic(
  () => import('../../components/ProcessAccordion'),
  {
    ssr: false, // This will load the component client-side
  }
);

const ProcessPage = () => (
  <div className='container p-4 mx-auto'>
    <h1 className='mb-4 text-2xl font-bold'>Our Process</h1>
    <ProcessAccordion />
  </div>
);

export default ProcessPage;
