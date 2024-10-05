import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-w-full min-h-screen bg-navy text-white'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
