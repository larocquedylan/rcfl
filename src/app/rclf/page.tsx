import CallToAction from '@/components/CallToAction';
import React from 'react';
import skyline from '../../../public/Dyrie_A_beautiful_and_detailed_photo_of_the_Edmonton_skyline_at_1fc95ffc-5bf1-42a2-b88e-69c83db38bdc.png';
import Image from 'next/image';
import Layout from '@/components/Layout';

interface WhyRclfProps {}

const WhyRclf: React.FC<WhyRclfProps> = ({}) => {
  return (
    <Layout
      title='Why RCLF?'
      image={skyline}
      prevPage='/why'
      nextPage='/process'
    >
      <p className='text-sm lg:text-base'>
        RCLF is the Edmonton leadership forum that provides accessibility,
        affordability, and community support.
      </p>
      <h3 className='mt-4 text-xl font-semibold'>Our Operating Principles:</h3>
      <ul className='mt-2 space-y-1 text-sm list-disc list-inside lg:text-base'>
        <li>
          <b>Interactive, Relatable, and Intimate: </b> Our forums promote open
          dialogue and advice exchange, setting us apart from conventional
          formats. Additionally, we structure groups based on age proximity,
          ensuring relatable conversations among peers. With smaller groups of
          6-8 members, we prioritize deeper engagement and foster stronger
          relationships. Our half-day meetings every 4-6 weeks ensures efficacy
          while protecting your time.
        </li>
        <li>
          <b>Affordable and Accessible: </b> At just 10% of the cost of
          comparable leadership groups in Edmonton, we make leadership support
          affordable for ambitious professionals across all levels and
          industries.
        </li>
        <li>
          <b>Local Impact: </b> By participating in our forums, you actively
          contribute to building a better Edmonton. The feedback you receive and
          share directly benefits the entire city.
        </li>
      </ul>
      <p className='mt-4 text-sm lg:text-base'>
        RCLF emphazies <i>Confidentiality</i> and <i>Commitment</i> from all
        members. We maintain strict confidentiality standards, and any breach
        results in immediate removal from the group. Additionally, members who
        miss more than 1.5 meetings are subject to a group vote regarding their
        continued participation. The chairperson responsibility rotates among
        members, ensuring everyone contributes to providing the facility and
        facilitating sessions.
      </p>
      <CallToAction />
    </Layout>
  );
};

export default WhyRclf;
