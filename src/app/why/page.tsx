import Navbar from '@/components/NavBar';
import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div className='flex justify-center m-2 md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 md:px-16'>
        <div className='grid w-full max-w-5xl my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:py-4'>
            <h2 className='mb-3 text-2xl font-semibold'>
              Unlock Your Leadership Potential with Our Leadership Forum
            </h2>
            <p className='text-sm lg:text-base'>
              A Powerful Network for Today's Leaders
            </p>
            <p className='mt-6 text-sm lg:text-base'>
              In today's fast-paced business environment, leaders face an array
              of challenges, including managing change, driving innovation, and
              fostering a healthy organizational culture. These responsibilities
              can be overwhelming, especially when faced alone. A leadership
              forum offers a supportive network of like-minded professionals,
              enabling leaders to navigate complex situations more effectively.
            </p>
            <h3 className='mt-4 text-xl font-semibold'>
              Data and Studies: The Power of Leadership Forums
            </h3>
            <p className='mt-6 text-sm lg:text-base'>
              Numerous studies have highlighted the value of leadership forums
              in enhancing leaders' effectiveness. Some key findings include:
            </p>
            <ul className='mt-4 text-sm list-disc list-inside lg:text-base'>
              <li>
                Improved Company Performance: A study conducted by Vistage, a
                leading CEO peer advisory organization, discovered that
                companies led by CEOs who participated in peer advisory groups
                outperformed their counterparts in terms of growth. The study
                found that these companies experienced an average annual growth
                rate of 7.1%, while the average growth rate for all US companies
                was only 2.2%.
              </li>
              <li>
                Enhanced Decision-Making: In their book "The Power of Peers,"
                authors Leon Shapiro and Leo Bottary discuss the concept of
                "peer advantage" and how it can benefit leaders. They argue that
                participating in a peer group can improve leaders'
                decision-making abilities, as they can draw from the collective
                wisdom of the group to make more informed choices.
              </li>
              <li>
                Increased Accountability and Focus: According to a study
                published in the Harvard Business Review, peer groups can boost
                accountability and focus among leaders. When leaders regularly
                discuss their goals and challenges with a trusted network, they
                are more likely to stay on track and commit to their objectives.
              </li>
              <li>
                Personal and Professional Growth: Leadership forums can also
                foster personal and professional growth. A study by the Center
                for Creative Leadership found that leaders who participated in
                peer coaching programs experienced significant improvements in
                their leadership skills, including self-awareness, emotional
                intelligence, and communication.
              </li>
            </ul>
            <h3 className='mt-4 text-xl font-semibold'>
              The Value of a Leadership Forum
            </h3>
            <p className='mt-6 text-sm lg:text-base'>
              The evidence is clear: leadership forums can play a pivotal role
              in enhancing leaders' effectiveness. By participating in a forum,
              leaders can:
            </p>
            <ul className='mt-4 text-sm list-disc list-inside lg:text-base'>
              <li>
                Make better decisions by leveraging the collective wisdom of
                their peers
              </li>
              <li>Drive company growth and outperform their competition</li>
              <li>
                Develop crucial leadership skills, including emotional
                intelligence and communication
              </li>
              <li>
                Stay accountable to their goals and maintain focus on their
                objectives
              </li>
            </ul>
            <p className='mt-4 text-sm lg:text-base'>
              By joining a leadership forum, leaders can invest in themselves
              and their organizations, ultimately leading to more successful
              outcomes and a greater positive impact on the world.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
