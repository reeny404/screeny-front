import Image from 'next/image';

function Section2() {
  return (
    <section className='py-16'>
      <div className='grid grid-flow-col grid-cols-2 bg-darknavy rounded'>
        <div className=''>
          <span className='text-green-400 font-semibold text-sm'>SCREENY</span>
          <h2 className='text-3xl font-semibold leading-normal tracking-tighter'>
            디자인 레퍼런스를
            <br /> 찾는 시간을 단축시키기 위해,
            <br /> 내가 찾는 화면을 정확하게
            <br /> 한곳에 모아서 보여주기 위해.
          </h2>
          <span>이제는 한 곳에서 편리하고 빠르게 레퍼런스를 찾아보세요!</span>
        </div>
        <div className='relative w-full h-full'>
          <Image
            src='/landing/vault.png'
            alt='search-card-example'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
