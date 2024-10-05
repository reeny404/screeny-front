import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-w-full min-h-screen bg-navy text-white'>
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
