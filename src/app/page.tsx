import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import NextPage from '@/components/NextPage';
import Image from 'next/image';
import skyline from '../../public/Dyrie_photo_of_edmontons_walterdale_bridge_in_2050_in_the_eveni_8cd8bc40-608b-41df-9ab3-631bb9e660e4 (1).png';

export default function Home() {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 lg:px-16 md:overflow-auto'>
        <div className='grid w-full max-w-5xl my-4 md:my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left md:overflow-auto'>
          <div className='px-4 py-0 md:px-5 md:overflow-auto'>
            <Image
              src={skyline}
              width={1500}
              height={100}
              alt='skyline'
              className='mx-auto mb-3 rounded-xl'
            />
            <h2 className='mb-3 text-xl font-semibold lg:text-2xl'>
              Empower Your Leadership Journey with RCLF
            </h2>
            <p className='mt-4 text-sm lg:text-base'>
              Introducing Edmonton&apos;s Peer Forum for Ambitious
              Professionals, RCLF. Established in 2020, we offer an affordable,
              local alternative to traditional leadership peer forums. Designed
              for CEOs, entrepreneurs, and leaders at all levels, RCLF&apos;s
              membership fee is just $200 per month.
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
              Join RCLF today and invest in yourself, your company, and
              Edmonton. Experience the difference local leadership support makes
              in your professional journey. Share wins and losses, brainstorm,
              and ideate together to become more effective leaders.
            </p>
            <CallToAction />
          </div>
        </div>
        <hr className='mt-6 border-t border-gray-200' />
        <div className='flex justify-between w-full'>
          <NextPage prevPage='/' nextPage='/why' />
        </div>
        <Footer />
      </main>
    </div>
  );
}
