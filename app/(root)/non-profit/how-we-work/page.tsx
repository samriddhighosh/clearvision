import Division from '@/components/Division'
import React from 'react'

const HowWeWork = () => {
  return (
    <div>
        <div className='px-24 py-40'>
            <p className='tagline max-w-36'>How We Work</p>
            <h1 className='heading text-[70px] !max-w-3xl'>Changing vision all over the world by 2030</h1>
        </div>
        <div className="flex gap-8 pl-20 pt-44">
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description" className='border-r-0'/>
        </div>
    </div>
  )
}

export default HowWeWork