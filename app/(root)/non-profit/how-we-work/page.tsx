import Division from '@/components/Division'
import React from 'react'

const HowWeWork = () => {
  return (
    <div>
        <div className='px-24 py-40'>
            <p className='tagline max-w-36'>How We Work</p>
            <h1 className='heading text-[70px] !max-w-3xl'>Changing vision all over the world by 2030</h1>
        </div>
        <div className="flex gap-8 px-24 pt-44">
          <Division title="5,000+ individuals" description="We aim to host 20+ free medical eye camps annually, reaching over 5,000 individuals in need."/>
          <Division title="500+ cataract surgeries" description="Our goal is to fund 500+ cataract surgeries each year, restoring sight to those suffering from preventable blindness.
"/>
          <Division title="2,000+ free prescription glasses" description="We are committed to distributing 2,000+ free prescription glasses to underserved communities, ensuring that financial barriers do not stand in the way of clear vision." className='!border-r-0'/>
        </div>
    </div>
  )
}

export default HowWeWork