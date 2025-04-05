import Card from '@/components/Card'
import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <section>
    <div className='mx-40 my-36'>
        <p className='tagline max-w-36'>Research</p>
        <h1 className='heading text-[68px] !max-w-3xl'> A future where vision correction is effortless</h1>
        <p className='text-[18px] max-w-2xl'> Our R&D team is working to revolutionize eyewear through adaptive lenses—a technology designed to eliminate the need for frequent prescriptions. These lenses automatically adjust their optical power based on the wearer’s needs, offering a long-term solution for vision correction.

        </p>
    </div>
    <Image src="/happy.png" alt="Happy Group Image" width={1500} height={900} />
    <div className='flex py-28 px-32 gap-20'>
      <div className='w-1/2'>
          <h1 className='heading text-[52px]'>The New generation</h1>
          <p className='mx-auto text-[20px]'>While this project is still under development, our goal is to bring it from research to real-world application, ensuring that everyone, regardless of location or financial means, has access to cutting-edge vision care.</p>
      </div>
      <div className='w-1/2 text-[20px] font-semibold pt-8'>
        <p className='pb-8'>~  Utilizing liquid crystal or fluid-based technology, these lenses alter their focal length in response to the wearer’s requirements.</p>
        <p  className='pb-8'>~  Integrated with a mechanism that detects visual strain, they dynamically adjust to optimize clarity.</p>
        <p>~  This innovation has the potential to replace traditional glasses and could drastically improve accessibility to vision correction, especially in remote and underserved areas.</p>
      </div>
    </div>
    <div className="flex gap-20 m-20">
          <Card title="Physics" description="description"/>
          <Card title="Biology" description="description"/>
          <Card title="Computer Science" description="description"/>
        </div>
    <div>
    <div className="">
        <Image src="/timeline.png" alt="Timeline for the website" width={1200} height={1200} />
    </div>
    <div className="flex items-center gap-20 justify-center py-10">
        <Image src="/hero_home.png" alt="Doctor looking into a baby's eyes" width={600} height={550} />
        <div>
          <h1 className="heading text-[68px] pb-5">Help us make this dream a reality</h1>
          <button className="button">Donate Today!</button>
        </div>
        
      </div>
    </div>
    </section>
  )
}

export default page