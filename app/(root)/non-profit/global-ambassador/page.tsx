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
          <Division title="Expand Our Reach" description="Ambassadors will actively promote ClearVision’s initiatives across social media, school communities, and youth networks—helping us connect with a global audience passionate about eye care innovation.
"/>
          <Division title="Support Events & Campaigns" description="You’ll play a key role in organizing and spreading the word about virtual events, workshops, and awareness campaigns. This includes designing materials, coordinating with participants, and boosting engagement."/>
          <Division title="Build Strategic Partnerships" description="Assist in identifying and reaching out to potential collaborators—schools, youth orgs, influencers, and more—who align with ClearVision’s mission and can help amplify our impact." className='border-r-0'/>
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