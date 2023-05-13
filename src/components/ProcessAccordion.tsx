'use client';

import React, { ForwardRefExoticComponent } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const ProcessAccordion = () => (
  <Accordion.Root type='single' collapsible>
    <AccordionItem value='step1' title='Step 1: Initial Interest'>
      You&apos;ve heard about our leadership forum and you&apos;re intrigued.
      You&apos;ve visited our website, and you now understand about 70% of what
      we&apos;re all about. You&apos;re ready for the next step.
    </AccordionItem>

    <AccordionItem value='step2' title='Step 2: Get to Know Us'>
      Let&apos;s connect on a deeper level. Schedule an unstructured interview
      with us through our{' '}
      <a
        href='https://calendly.com/rclf'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold'
      >
        Calendly link
      </a>
      . It&apos;s a casual coffee chat, a chance for us to learn about you, your
      business, and what you&apos;re looking to gain from our program.
    </AccordionItem>

    <AccordionItem value='step3' title='Step 3: Apply'>
      Feeling inspired and ready to take the next step? Fill out our application
      form{' '}
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScp9yVWKb8SShYUWskTzCu2Gv68mZ_HfqMC8G6gNT3SKpeV-Q/viewform?vc=0&c=0&w=1&flr=0'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold'
      >
        Here
      </a>
      . This is your formal commitment to our community. To solidify your
      commitment, we ask for a $200 deposit upon completion of your application.
    </AccordionItem>

    <AccordionItem value='step4' title='Step 4: Curation'>
      Once your application is in, our team will get to work. We&apos;ll review
      your profile, consider your business needs, and start the matching
      process. We aim to place you in a suitable group within 90 days. If we
      can&apos;t find a fit within six months, we&apos;ll refund your deposit.
    </AccordionItem>

    <AccordionItem value='step5' title='Step 5: Acceptance'>
      If we find a pre-existing group that fits your profile, we&apos;ll
      introduce your profile to current members. They&apos;ll have a chance to
      vote on your admission. If the majority votes you in, you&apos;re part of
      the team. If a suitable existing group isn&apos;t available, we&apos;ll
      work on forming a new one and the 6-month period will continue. If we
      can&apos;t find a fit within six months, we&apos;ll refund your deposit.
    </AccordionItem>

    <AccordionItem value='step6' title='Step 6: Placement'>
      Once your group is ready, it&apos;s time to join in. Yo&apos;ll meet your
      fellow group members, start collaborating, and begin reaping the benefits
      of our dynamic community.
    </AccordionItem>

    <AccordionItem value='step7' title='Step 7: Collaborate'>
      Now that you&apos;re part of a group, it&apos;s time to roll up your
      sleeves and get to work. Remember, this is a collaborative journey.
      We&apos;ll check in with you after your first and third meeting to ensure
      that you&apos;re getting the value you expect from the program.
    </AccordionItem>

    {/* Repeat for other steps */}
  </Accordion.Root>
);

type AccordionItemProps = {
  value: string;
  title: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  title,
  children,
}) => (
  <Accordion.Item value={value} className='my-2'>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>{children}</AccordionContent>
  </Accordion.Item>
);

type AccordionTriggerProps = {
  children: React.ReactNode;
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => (
  <Accordion.Header className='flex items-center justify-between p-3 rounded-t-md'>
    <Accordion.Trigger className='text-lg font-semibold cursor-pointer'>
      {children}
    </Accordion.Trigger>
    <ChevronDownIcon />
  </Accordion.Header>
);

type AccordionContentProps = {
  children: React.ReactNode;
};

const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => (
  <Accordion.Content className='p-3 rounded-b-md'>{children}</Accordion.Content>
);

export default ProcessAccordion;
