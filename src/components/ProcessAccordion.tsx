import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const ProcessAccordion = () => (
  <Accordion.Root type='single' collapsible>
    <AccordionItem value='step1' title='Step 1: Initial Interest'>
      You've heard about our leadership forum and you're intrigued. You've
      visited our website, and you now understand about 70% of what we're all
      about. You're ready for the next step.
    </AccordionItem>

    <AccordionItem value='step2' title='Step 2: Get to Know Us'>
      Let's connect on a deeper level. Schedule an unstructured interview with
      us through our Calendly link. It's a casual coffee chat, a chance for us
      to learn about you, your business, and what you're looking to gain from
      our program.
    </AccordionItem>

    <AccordionItem value='step3' title='Step 3: Apply'>
      Feeling inspired and ready to take the next step? Fill out our application
      form. This is your formal commitment to our community. To solidify your
      commitment, we ask for a $200 deposit upon completion of your application.
    </AccordionItem>

    {/* Repeat for other steps */}
  </Accordion.Root>
);

const AccordionItem = ({ value, title, children }) => (
  <Accordion.Item value={value} className='my-2'>
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>{children}</AccordionContent>
  </Accordion.Item>
);

const AccordionTrigger = ({ children }) => (
  <Accordion.Header className='flex items-center justify-between p-3 bg-gray-200 cursor-pointer rounded-t-md'>
    <Accordion.Trigger className='text-lg font-semibold'>
      {children}
    </Accordion.Trigger>
    <ChevronDownIcon />
  </Accordion.Header>
);

const AccordionContent = ({ children }) => (
  <Accordion.Content className='p-3 bg-gray-100 rounded-b-md'>
    {children}
  </Accordion.Content>
);

export default ProcessAccordion;
