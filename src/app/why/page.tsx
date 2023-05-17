import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import NextPage from '@/components/NextPage';
import React from 'react';
import Image from 'next/image';
import skyline from '../../../public/Dyrie_A_beautiful_and_detailed_photo_of_the_Edmonton_skyline_at_7ed491ad-faed-404f-83b2-e0aa7b0c93c2.png';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 lg:px-16'>
        <div className='grid w-full max-w-5xl my-4 md:my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:overflow-auto'>
            <Image
              src={skyline}
              width={1500}
              height={100}
              alt='skyline'
              className='mx-auto mb-6 rounded-xl'
            />
            <h2 className='mb-3 text-2xl font-semibold'>
              Develop Your Leadership Potential with Our Forum
            </h2>
            <p className='mt-4 text-sm lg:text-base'>
              A leadership forum is a peer group where leaders from different
              backgrounds discuss issues and opportunities they face monthly.
            </p>
            <p className='mt-4 text-sm lg:text-base'>
              Numerous studies have highlighted the value of leadership forums
              in enhancing leader&apos;s effectiveness. Some key findings
              include:
            </p>
            <ul className='mt-4 space-y-1 text-sm list-disc list-inside lg:text-base'>
              <li>
                <b>Improved Company Performance: </b> Participating CEOs in peer
                advisory groups, according to a study by Vistage, experienced an
                average annual growth rate of 7.1%, surpassing the average
                growth rate of 2.2% for all US companies.
              </li>
              <li>
                <b>Enhanced Decision-Making:</b> In their book &quot;The Power
                of Peers,&quot; authors Leon Shapiro and Leo Bottary highlight
                how leaders can leverage collective wisdom within a peer group
                to improve their decision-making and inform actions.
              </li>
              <li>
                <b>Increased Accountability and Focus:</b> Harvard Business
                Review confirms that peer groups boost accountability and focus
                among leaders, helping stay on track and committed to
                objectives.
              </li>
            </ul>

            <p className='mt-6 text-sm lg:text-base'>
              By joining a forum, you can leverage collective wisdom, outperform
              competitors, develop leadership skills, and stay focused on your
              goals.
            </p>

            <CallToAction />
          </div>
        </div>
        <hr className='mt-6 border-t border-gray-200' />
        <div className='flex justify-between w-full'>
          <NextPage prevPage='/' nextPage='/rclf' />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;
