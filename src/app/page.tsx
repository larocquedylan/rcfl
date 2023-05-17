import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import NextPage from '@/components/NextPage';

export default function Home() {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between min-h-screen px-0 lg:px-16 md:overflow-auto'>
        <div className='grid w-full max-w-5xl my-4 md:my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left md:overflow-auto'>
          <div className='px-4 py-0 md:px-5 md:overflow-auto'>
            <h2 className='mb-3 text-xl font-semibold lg:text-2xl'>
              Empower Your Leadership Journey with RCLF
            </h2>
            <p className='text-sm lg:text-base'>
              An Edmonton Peer Forum for Ambitious Professionals
            </p>
            <p className='mt-4 text-sm lg:text-base'>
              Navigating the world of leadership can be a thrilling yet
              challenging experience, and connecting with a like-minded
              community can make all the difference. Established in 2020, RCLF
              has evolved through trial and error to create an optimized format
              that values your time. RCLF is here to provide an accessible and
              Edmonton focused alternative to traditional high-priced leadership
              peer forums, designed for CEOs, entrepreneurs, and leaders at all
              levels.
            </p>

            <p className='mt-4 text-sm lg:text-base'>
              With a membership fee of just $200 per month, RCLF offers an
              affordable, high-value experience tailored for ambitious
              professionals from diverse backgrounds. Here&apos;s what you can
              expect:
            </p>
            <ul className='mt-4 text-sm list-disc list-inside lg:text-base'>
              <li>
                A carefully curated group of local leaders to engage with and
                learn from, based on your unique experiences
              </li>
              <li>
                Templates and agenda outlines for effective and organized
                meetings
              </li>
              <li>
                Facilitation of your first three sessions to kickstart your RCLF
                journey
              </li>
              <li>
                Quarterly facilitator audits to maintain best practices and
                improve your experience
              </li>
              <li>
                A commitment to give back 20% of our earnings to the community
              </li>
            </ul>
            <p className='mt-4 text-sm lg:text-base'>
              RCLF is more than just a peer forum; it is an investment in
              yourself, your company, and your community. Join us today and
              experience the difference that local, accessible leadership
              support can make in your professional journey. Together,
              we&apos;ll share our wins and losses, brainstorm, and ideate to
              become more effective leaders, ultimately benefitting our
              companies and communities.
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
