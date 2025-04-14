import Division from '@/components/Division'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="items-center py-40 px-36">
        <p className='tagline max-w-36'>Home</p>
        <h2 className='heading text-[60px]'>Our Non Profit</h2>
        <p className='des max-w-4xl text-[20px]'>Blindness affects millions worldwide, yet 80% of vision loss is preventable. In addition, only 36% of people who need corrective eyewear actually have a suitable pair of eyeglasses. This means that around 800 million people do not have access to this. ClearVision Foundation is committed to bridging this gap by hosting free medical eye-care camps and fully funded cataract surgeries.
        </p>
      </div>
      <div className='flex px-36 pb-20 gap-20'>
        <div className='pb-20'>
          <h2 className='heading text-[48px]'>Changing Eye Care All Over The World</h2>
          <p className='max-w-4xl'>Blindness affects millions worldwide, yet 80% of vision loss is preventable. In addition, only 36% of people who need corrective eyewear actually have a suitable pair of eyeglasses. This means that around 800 million people do not have access to this. ClearVision Foundation is committed to bridging this gap by hosting free medical eye-care camps and fully funded cataract surgeries.
          </p>
        </div>
        <div>
          <Image src="/happy_thumbsup.png" alt="Happy older patient smiling with a thumbs up" width={600} height={500} />
        </div>
      </div>
      <div className="flex text-center justify-center gap-20 bg-primary py-36">
          <h2 className="heading text-[60px]">&quot;Sight is what you see with your eyes, vision is what you see with your mind&quot;- Person</h2>
        </div>
      <div className="flex gap-8 px-24 py-20">
          <Division title="Free Medical Eye Camps" description="We host free eye camps in underserved areas to provide vision screenings for those who’ve never had access before. Patients are checked for common vision issues and serious conditions like cataracts. If cataracts are found, we connect them to fully-funded surgeries with local hospitals. Our team handles everything—from setting up equipment to organizing patient visits. These camps aren’t just one-time events—they’re the start of lasting healthcare support for each community."/>
          <Division title="Eyewear Education" description="Many people lose their vision simply because they don’t know how to take care of their eyes. Our Eyewear Education program spreads awareness about eye hygiene, regular checkups, and how to prevent vision loss. We create simple, trusted resources with healthcare experts and share them through schools, social media, workshops, and our camps—always in local languages. By teaching people how to protect their vision, we’re stopping blindness before it starts.
"/>
          <Division title="Article Publishing Program" description="We share reliable, easy-to-understand articles about eye health, treatments, and daily care tips. Written with help from medical professionals, these articles are designed for everyone—not just experts. The program also gives young writers a chance to contribute to global awareness. As we grow, we plan to publish in more languages, launch podcasts, and work with partners around the world to keep spreading knowledge.
" className='!border-r-0'/>
        </div>
      <div className="flex items-center gap-20 justify-center py-10 px-36">
        <Image src="/vision.png" alt="Vision Picture" width={600} height={560} />
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