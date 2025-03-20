import Division from '@/components/Division'
import React from 'react'

const page = () => {
  return (
    <div className='px-36'>
      <div className="items-center w-full py-20">
        <h2 className='heading text-[60px]'>Our Non Profit</h2>
        <p className='des'>Lorem Ipsum</p>
      </div>
      <div className='pb-20'>
        <h2 className='heading text-[40px]'>Changing Eye Care All Over The World</h2>
        <p className='max-w-4xl'>Blindness affects millions worldwide, yet 80% of vision loss is preventable. In addition, only 36% of people who need corrective eyewear actually have a suitable pair of eyeglasses. This means that around 800 million people do not have access to this. ClearVision Foundation is committed to bridging this gap by hosting free medical eye-care camps and fully funded cataract surgeries.
        </p>
      </div>
      <div>
        <h2 className='heading'>Quote</h2>
      </div>
      <div className="flex gap-8">
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description" className='border-r-0'/>
        </div>
      <div className="flex items-center gap-20 justify-center py-10">
        <p className="py-44 px-60 bg-gray-300"></p>
        <div>
          <h1 className="heading text-[36px]">Outreach Ambassadors:
          </h1>
          <p className='m'>Our Global Outreach Ambassadors are the backbone of our initiatives. They organize local medical camps, engage with hospitals, and mobilize volunteers to make a real impact in their communities.
          </p>
          <button className="button mt-14">Apply Now!</button>
        </div>
        
      </div>
    </div>
  )
}

export default page