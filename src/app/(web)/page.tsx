import HeadBlock from '@/widgets(web)/HeadBlock';
// import Feature1 from '@/widgets(web)/Feature1';
import Feature2 from '@/widgets(web)/Feature2';
// import Testimonial from '@/widgets(web)/Testimonial';
// import Newsletter from '@/widgets(web)/Newsletter';
import Pricing1 from '@/widgets(web)/Pricing1';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col pt-40 text-black'>
      <HeadBlock />
      {/* <Feature1 /> */}
      <Feature2 />
      {/* <Testimonial /> */}
      <Pricing1 />
      {/* <Newsletter /> */}
    </main>
  );
}
