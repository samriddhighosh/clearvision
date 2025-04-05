import Division from '@/components/Division'
import React from 'react'

const page = () => {
  return (
    <div className='my-36'>
        <section className='px-28'>
            <p className='tagline max-w-36'>Ambassador</p>
            <h1 className='heading text-[64px]'>Welcome to the world of eye vision</h1>
            <p className='text-[18px]'>Ready to apply to change the future of our systems? Scroll down</p>
        </section>
        <div className="flex gap-8 pl-20 pt-20">
          <Division title="Research" description="description"/>
          <Division title="Logistics" description="description"/>
          <Division title="Outreach/Marketing" description="description" className='border-r-0'/>
        </div>
        <div>
          <iframe src="https://tally.so/r/w4OaVO"width="100%" 
        height="600px" 
        style={{ border: "none" }} 
        allow="fullscreen"  />
        </div>
    </div>
  )
}

export default page