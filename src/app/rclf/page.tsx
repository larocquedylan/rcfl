import Navbar from '@/components/NavBar';
import React from 'react';

interface WhyRclfProps {}

const WhyRclf: React.FC<WhyRclfProps> = ({}) => {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 md:px-16'>
        <div className='grid w-full max-w-5xl my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:py-4'>
            <h2 className='mb-3 text-2xl font-semibold'>
              Discover the RCLF Difference
            </h2>
            <p className='text-sm lg:text-base'>
              At RCLF, we prioritize accessibility and affordability. By
              focusing on essential activities and excluding extraneous ones, we
              offer streamlined leadership support at just $200 per month.
            </p>
            <p className='mt-6 text-sm lg:text-base'>
              We believe in giving back. 20% of our revenues are directed
              towards supporting our community through specific actions, such as
              offering scholarships for promising young leaders and making
              donations to foster local initiatives.
            </p>
            <h3 className='mt-4 text-xl font-semibold'>
              Our Unique Operating Principles:
            </h3>
            <ul className='mt-2 space-y-1 text-sm list-disc list-inside lg:text-base'>
              <li>
                <b>Empowered Interaction:</b>
                <sup className='text-xs'>
                  <a href='#ref1'>[1]</a>
                </sup>{' '}
                We break from conventional leadership forums that restrict
                dialogue to experience sharing and questioning. Our approach
                encourages open dialogue and the exchange of advice during
                meetings. This might seem unconventional, but it&apos;s
                supported by research.
              </li>
              <li>
                <b>Age-Bounded Groups:</b>
                <sup className='text-xs'>
                  <a href='#ref2'>[2]</a>
                </sup>{' '}
                To ensure relatable and meaningful conversations, we&apos;ve
                innovatively structured our groups around age. All members are
                within five years of the average group age. This promotes
                understanding, shared growth, and leads to more creativity and
                innovation.
              </li>
              <li>
                <b>Intimate Group Sizes:</b>
                <sup className='text-xs'>
                  <a href='#ref3'>[3]</a>
                </sup>{' '}
                Large, impersonal groups can hinder effective communication and
                the development of strong relationships. At RCLF, we limit our
                groups to 6-8 members. This intimate setting allows for deeper
                engagement, personalized attention, and stronger relationships.
              </li>
              <li>
                <b>Efficient Meetings:</b> Time is a valuable resource,
                especially for ambitious professionals like you. We respect
                that. Our half-day meetings every 4-6 weeks are designed to
                strike the perfect balance between energy (time) efficiency and
                efficacy. We ensure a space where each member is given their
                fair due and can walk away with actionable insights, while also
                having frequency to maintain momentum and accountability.
              </li>
            </ul>
            <hr className='mt-6 border-t border-gray-200' />
            {/* <div className='mt-4 space-y-2 text-xs'>
              
             
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhyRclf;
