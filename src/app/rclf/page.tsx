import Navbar from '@/components/NavBar';
import React from 'react';

interface WhyRclfProps {}

const WhyRclf: React.FC<WhyRclfProps> = ({}) => {
  return (
    <div className='flex justify-center m-2 md:m-12'>
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
            {/* <ul className='mt-2 space-y-1 text-sm list-disc list-inside lg:text-base'>
              <li>
                <b>Empowered Interaction:</b> We break from conventional
                leadership forums that restrict dialogue to experience sharing
                and questioning. Our approach encourages open dialogue and the
                exchange of advice during meetings. This might seem
                unconventional, but it's supported by research. A study
                published in the Journal of Applied Psychology found that
                empowering leadership behaviors, such as encouraging open
                dialogue and advice exchange, can significantly enhance team
                performance and job satisfaction.
              </li>
              <li>
                <b>Age-Bounded Groups:</b> To ensure relatable and meaningful
                conversations, we've innovatively structured our groups around
                age. All members are within five years of the average group age.
                This promotes understanding, shared growth, and leads to more
                creativity and innovation. A study from the Journal of
                Organizational Behavior found that age diversity can lead to
                more of these benefits.
              </li>
              <li>
                <b>Intimate Group Sizes:</b> Large, impersonal groups can hinder
                effective communication and the development of strong
                relationships. At RCLF, we limit our groups to 6-8 members. This
                intimate setting allows for deeper engagement, personalized
                attention, and stronger relationships. In fact, research
                published in the Journal of Experimental Social Psychology
                suggests that smaller groups are more likely to foster feelings
                of belonging and commitment.
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
            </ul> */}
            <ul className='mt-2 space-y-1 text-sm list-disc list-inside lg:text-base'>
              <li>
                <b>Empowered Interaction:</b>
                <sup className='text-xs'>
                  <a href='#ref1'>[1]</a>
                </sup>{' '}
                We break from conventional leadership forums that restrict
                dialogue to experience sharing and questioning. Our approach
                encourages open dialogue and the exchange of advice during
                meetings. This might seem unconventional, but it's supported by
                research.
              </li>
              <li>
                <b>Age-Bounded Groups:</b>
                <sup className='text-xs'>
                  <a href='#ref2'>[2]</a>
                </sup>{' '}
                To ensure relatable and meaningful conversations, we've
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
            <div className='mt-4 space-y-2 text-xs'>
              <p id='ref1'>
                [1]{' '}
                <a href='http://link-to-study-1.com'>
                  "Title of the study from the Journal of Applied Psychology"
                </a>
              </p>
              <p id='ref2'>
                [2]{' '}
                <a href='http://link-to-study-2.com'>
                  "Title of the study from the Journal of Organizational
                  Behavior"
                </a>
              </p>
              <p id='ref3'>
                [3]{' '}
                <a href='https://doi.org/10.1080/10463280440000062'>
                  "Intimate Group Sizes" Postmes, T., Haslam, S. A., & Swaab, R.
                  I. (2005). Social Influence in Small Groups: An Interactive
                  Model of Social Identity Formation. European Review of Social
                  Psychology, 16(1), 1–42
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhyRclf;
