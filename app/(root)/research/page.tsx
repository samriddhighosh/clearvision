import Card from '@/components/Card'
import React from 'react'
import SvgImage from "@/components/SvgImage";

const page = () => {
  return (
    <section>
    <div className='justify-center items-center my-36'>
        <h1 className='mx-auto heading text-[56px] !text-center'> A future where vision correction is effortless</h1>
        <p className='mx-auto text-[18px] text-center max-w-2xl'> Imagine never needing to change prescriptions again. Our Ion-Controlled Adaptive Lenses (ICAL) adjust in real time, offering a universal solution to vision impairment.
        </p>
    </div>
    <div className='text-center'>
        <div className='w-96 h-80 bg-slate-500 mx-auto'/>
        <h1 className='mx-auto heading text-[52px] !text-center'>The New genration</h1>
        <p className='mx-auto text-[22px] text-center'>Lorem Ipsum</p>
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
        <p className="py-44 px-60 bg-gray-300"></p>
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