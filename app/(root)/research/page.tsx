import Card from '@/components/Card'
import React from 'react'
import SvgImage from "@/components/SvgImage";
import Image from 'next/image';

const page = () => {
  return (
    <section>
    <div className='justify-center items-center my-36'>
        <h1 className='mx-auto heading text-[64px]'> A future where vision correction is effortless</h1>
        <p className='mx-auto text-[18px] max-w-2xl'> Imagine never needing to change prescriptions again. Our Ion-Controlled Adaptive Lenses (ICAL) adjust in real time, offering a universal solution to vision impairment.
        </p>
    </div>
    <Image src="/happy.png" alt="Happy Group Image" width={1500} height={900} />
    <div className='py-16 px-20'>
        
        <h1 className='heading text-[52px]'>The New genration</h1>
        <p className='mx-auto text-[22px]'>Lorem Ipsum</p>
    </div>
    <div className="flex gap-20 m-20">
          <Card title="Physics" description="description"/>
          <Card title="Biology" description="description"/>
          <Card title="Computer Science" description="description"/>
        </div>
    <div>
    <div className="">
        <div className="flex">
          <SvgImage style={{ transform: 'rotate(90deg)' }}/>
          <SvgImage style={{ transform: 'rotate(90deg)'}} className="mx-20"/>
          <SvgImage style={{ transform: 'rotate(90deg)' }}/>
          <SvgImage style={{ transform: 'rotate(90deg)' }} className="mx-20"/>
        </div>
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