import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import NextPage from '@/components/NextPage';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface LayoutProps {
  title: string;
  image: StaticImageData;
  prevPage: string;
  nextPage: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  image,
  prevPage,
  nextPage,
  children,
}) => {
  return (
    <div className='flex flex-col justify-center m-2 md:flex-row md:m-12'>
      <Navbar />
      <main className='flex flex-col items-center justify-between px-0 lg:px-16 md:overflow-auto'>
        <div className='grid w-full max-w-5xl my-4 md:my-8 md:text-left lg:mb-0 lg:grid-cols-1 lg:text-left'>
          <div className='px-4 py-0 md:px-5 md:overflow-auto'>
            <Image
              src={image}
              width={1500}
              height={100}
              alt='skyline'
              className='mx-auto mb-6 rounded-xl'
            />
            <h2 className='mb-4 text-2xl font-semibold'>{title}</h2>
            {children}
          </div>
        </div>
        <hr className='mt-6 border-t border-gray-200' />
        <div className='flex justify-between w-full'>
          <NextPage prevPage={prevPage} nextPage={nextPage} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
