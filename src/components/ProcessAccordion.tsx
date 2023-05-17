'use client';

import React, { ForwardRefExoticComponent } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const ProcessAccordion = () => (
  <Accordion.Root
    type='multiple'
    defaultValue={['step1', 'step2', 'step3', 'step4', 'step5']}
  >
    <AccordionItem value='step1' title='Step 1: Initial Interest'>
      Explore our website and gain an understanding of what we offer.
    </AccordionItem>

    <AccordionItem value='step2' title='Step 2: Get to Know Us'>
      Schedule an unstructured interview with our{' '}
      <a
        href='https://calendly.com/rclf'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold text-blue-500'
      >
        Calendly link
      </a>
      . It&apos;s a casual coffee chat, a chance for us to learn about you, your
      business, and what you&apos;re looking to gain from our program.
    </AccordionItem>

    <AccordionItem value='step3' title='Step 3: Apply'>
      Fill out our application form{' '}
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLScp9yVWKb8SShYUWskTzCu2Gv68mZ_HfqMC8G6gNT3SKpeV-Q/viewform?vc=0&c=0&w=1&flr=0'
        target='_blank'
        rel='noopener noreferrer'
        className='font-bold text-blue-500'
      >
        here
      </a>{' '}
      and provide a $200 deposit to formalize your commitment.
    </AccordionItem>

    <AccordionItem value='step4' title='Step 4: Curation'>
      Our team will review your profile, match you with a suitable group, and
      aim to place you within 90 days.{' '}
      <span className='font-semibold'>
        If no fit is found within six months, your deposit will be refunded.
      </span>
    </AccordionItem>

    <AccordionItem value='step5' title='Step 5: Acceptance'>
      Your profile will be introduced to current members for a vote. If
      accepted, you&apos;ll join the group and start collaborating with fellow
      members.
    </AccordionItem>
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
  <Accordion.Header className='flex items-center justify-between rounded-t-md'>
    <Accordion.Trigger className='font-semibold cursor-pointer text-md hover:text-slate-500'>
      {children}
    </Accordion.Trigger>
    <ChevronDownIcon />
  </Accordion.Header>
);

type AccordionContentProps = {
  children: React.ReactNode;
};

const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => (
  <Accordion.Content className='p-3 text-sm rounded-b-md'>
    {children}
  </Accordion.Content>
);

export default ProcessAccordion;
