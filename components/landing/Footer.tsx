import Image from 'next/image';

function Footer() {
  return (
    <header className='w-full flex px-28 py-12'>
      <Image src='/logo.png' width={40} height={40} alt='로고' />
      <div className='text-[28px] font-semibold'>
        Screeny
        <span className='text-carrot'>.</span>
      </div>
    </header>
  );
}

export default Footer;
