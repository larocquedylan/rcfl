import Navbar from '@/components/NavBar';
import NextPage from '@/components/NextPage';
import React from 'react';

interface WhyRclfProps {}

const WhyRclf: React.FC<WhyRclfProps> = ({}) => {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between px-0 lg:px-16'>
        <div className='grid w-full max-w-5xl my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:py-4'>
            <h2 className='mb-3 text-2xl font-semibold'>
              Discover the RCLF Difference
            </h2>
            <p className='text-sm lg:text-base'>
              RCLF is the leadership forum that prioritizes accessibility,
              affordability, and giving back. We offer streamlined leadership
              support at just $200 per month, and we donate 20% of our revenues
              to support our community.
            </p>
            <h3 className='mt-4 text-xl font-semibold'>
              Our Unique Operating Principles:
            </h3>
            <ul className='mt-2 space-y-1 text-sm list-disc list-inside lg:text-base'>
              <li>
                <b>Interactive: </b> Conventional leadership forums restrict
                dialogue to experience sharing and questioning. Our approach
                encourages open dialogue and the exchange of advice during
                meetings.
              </li>
              <li>
                <b>Relatable: </b> We structure our groups around age to ensure
                relatable and meaningful conversations. All members are within
                five years of the average group age.
              </li>
              <li>
                <b>Intimate: </b> We limit our groups to 6-8 members to allow
                for deeper engagement and stronger relationships.
              </li>
              <li>
                <b>Efficient: </b> Our half-day meetings every 4-6 weeks are
                designed to strike the perfect balance between energy (time)
                efficiency and efficacy.
              </li>
              <li>
                <b>Affordable: </b> We offer a forum for ~10% of the cost of
                comparable leadership groups in Edmonton.
              </li>
              <li>
                <b>Accessible: </b> Our forums are open to leaders of all levels
                and industries. 
              </li>
              <li>
                <b>Local: </b> Our forums are Edmonton based, you can guarantee
                that the feedback you receive and share is benefiting your local
                community and building a better Edmonton
              </li>
            </ul>
          </div>
        </div>
        <hr className='mt-6 border-t border-gray-200' />
        <div className='flex justify-between w-full'>
          <NextPage prevPage='/why' nextPage='/process' />
        </div>
      </main>
    </div>
  );
};

export default WhyRclf;
