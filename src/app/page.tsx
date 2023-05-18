import CallToAction from '@/components/CallToAction';
import skyline from '../../public/Dyrie_photo_of_edmontons_walterdale_bridge_in_2050_in_the_eveni_8cd8bc40-608b-41df-9ab3-631bb9e660e4 (1).png';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout
      title='Empower Your Leadership Journey with RCLF'
      image={skyline}
      prevPage='/'
      nextPage='/why'
    >
      <p className='mt-4 text-sm lg:text-base'>
        Introducing Edmonton&apos;s peer forum for ambitious professionals,
        RCLF. Established in 2020, we offer an affordable, local alternative to
        traditional leadership peer forums. Designed for CEOs, entrepreneurs,
        and leaders at all levels, RCLF&apos;s membership fee is just $200 per
        month.
      </p>
      <p className='mt-4 text-sm lg:text-base'>
        Here&apos;s what you can expect from RCLF:
      </p>
      <ul className='mt-4 text-sm list-disc list-inside lg:text-base'>
        <li>Engage with a curated group of local leaders</li>
        <li>Access templates and agendas for effective meetings</li>
        <li>Receive facilitation for your first three sessions</li>
        <li>Benefit from quarterly facilitator audits</li>
        <li>Support the community with 20% of RCLF&apos;s earnings</li>
      </ul>
      <p className='mt-4 text-sm lg:text-base'>
        Join RCLF today and invest in yourself, your company, and Edmonton.
        Experience the difference local leadership support makes in your
        professional journey. Share wins and losses, brainstorm, and ideate
        together to become more effective leaders.
      </p>
      <CallToAction />
    </Layout>
  );
}
