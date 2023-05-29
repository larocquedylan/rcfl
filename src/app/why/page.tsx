import Layout from '@/components/Layout';
import skyline from '../../../public/Dyrie_A_beautiful_and_detailed_photo_of_the_Edmonton_skyline_at_7ed491ad-faed-404f-83b2-e0aa7b0c93c2.png';
import CallToAction from '@/components/CallToAction';
import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Layout
      title='Develop Your Leadership Potential with Our Forum'
      image={skyline}
      prevPage='/'
      nextPage='/rclf'
    >
      <p className='mt-4 text-sm lg:text-base'>
        A leadership forum is a peer group where leaders from different
        backgrounds discuss issues and opportunities they face monthly.
      </p>
      <p className='mt-4 text-sm lg:text-base'>
        Numerous studies have highlighted the value of leadership forums in
        enhancing leader&apos;s effectiveness. Some key findings include:
      </p>
      <ul className='mt-4 space-y-1 text-sm list-disc list-inside lg:text-base'>
        <li>
          <b>Improved Company Performance: </b> Participating CEOs in peer
          advisory groups, according to a study by Vistage, experienced an
          average annual growth rate of 7.1%, surpassing the average growth rate
          of 2.2% for all US companies.
        </li>
        <li>
          <b>Enhanced Decision-Making:</b> In their book &quot;The Power of
          Peers,&quot; authors Leon Shapiro and Leo Bottary highlight how
          leaders can leverage collective wisdom within a peer group to improve
          their decision-making and inform actions.
        </li>
        <li>
          <b>Increased Accountability and Focus:</b> Harvard Business Review
          confirms that peer groups boost accountability and focus among
          leaders, helping stay on track and committed to objectives.
        </li>
      </ul>

      <p className='mt-6 text-sm lg:text-base'>
        By joining a forum, you can leverage collective wisdom, outperform
        competitors, develop leadership skills, and stay focused on your goals.
      </p>

      <CallToAction />
    </Layout>
  );
};

export default About;
