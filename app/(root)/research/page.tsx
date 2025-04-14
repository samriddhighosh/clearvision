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
    <div className='flex py-32 px-32 gap-20'>
      <div className='w-1/2'>
          <h1 className='heading text-[52px]'>The New generation</h1>
          <p className='mx-auto text-[20px]'>At Clearvision, we are pioneering a future where innovative vision solutions are available to everyone. While this project is still under active development, our mission is to transform cutting-edge research into real-world impact—ensuring equitable access to advanced eye care, no matter where someone lives or what they can afford.</p>
      </div>
      <div className='w-1/2 text-[19px] font-semibold py-8 px-10 bg-primary rounded-lg'>
        <p className='pb-8'>~  Lenses that adjust their focus using liquid crystal or fluid-based systems.</p>
        <p  className='pb-8'>~  Built-in sensors adapt the lens in real time to reduce eye strain.</p>
        <p>~  Aimed at replacing traditional glasses, especially for underserved areas.</p>
      </div>
    </div>
    <div className="flex gap-12 m-20 px-12">
          <Card title="Physics" description="Advancing microfluidics, electrowetting, and smart lens materials.
"/>
          <Card title="Biology" description=" Studying biocompatibility and optimizing vision correction mechanisms.
"/>
          <Card title="Computer Science" description="Implementing AI-driven optimization for real-time lens adaptation to make lenses as efficient as possible.
"/>
    </div>
    <div className='flex items-center gap-28 px-36 py-10 '>
        <div>
          <h1 className="heading text-[56px]">Want to learn More?</h1>
          <p className='text-[20px]'>Check out our recent projects in-depth</p>
          <button className='text-primary font-bold text-[20px] pt-8'>Donate Today</button>
        </div>
        <Image src="/hero_home.png" alt="Doctor looking into a baby's eyes" width={400} height={500} />
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