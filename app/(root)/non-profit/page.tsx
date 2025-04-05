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
          <Division title="Free Medical Eye Camps" description="One of our flagship initiatives involves hosting free eye camps in underserved regions. These camps provide comprehensive vision screenings to local communities, often for the first time in their lives. Patients are assessed for refractive errors, eye infections, and more serious conditions like cataracts. Those diagnosed with cataracts are connected to fully-funded surgeries conducted in partnership with local hospitals. Our outreach ambassadors coordinate directly with medical professionals on the ground, while our logistics team manages every operational detail—from equipment sourcing to patient scheduling. The success of these camps lies in our decentralized model, which leverages our international team’s presence to organize parallel operations in different regions. These events are not one-off projects—they are the beginning of long-term health partnerships with the communities we serve.
"/>
          <Division title="Eyewear Education" description="We believe that awareness is the first step toward prevention. In many communities, lack of knowledge about basic eye care leads to lifelong complications that could’ve been avoided. That’s why ClearVision places a strong emphasis on education. Our Eyewear Education program works to raise awareness about eye hygiene, vision loss prevention, and the importance of regular eye checkups. We create educational materials in collaboration with healthcare experts and translate them into local languages to maximize impact. These resources are distributed through social media, school sessions, local workshops, and during our medical camps. By demystifying eyecare and empowering individuals with knowledge, we aim to reduce the global burden of preventable blindness at its roots.
"/>
          <Division title="Article Publishing Program" description="In addition to on-the-ground impact, ClearVision is building a strong base of publicly accessible information through its Article Publishing Program. Members of our team collaborate with eyecare specialists to write high-quality articles that cover a wide range of topics—from vision science and emerging treatments to everyday tips for maintaining eye health. These articles are not only medically accurate but are also written with clarity and accessibility in mind, ensuring that they’re useful for the general public. The program also provides a platform for young professionals and writers to contribute to a meaningful cause, while building an archive of resources that can be referenced by educators, NGOs, and healthcare workers worldwide. As we grow, this program will expand to include multilingual publishing, podcast episodes, and collaborative research pieces with global institutions.
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