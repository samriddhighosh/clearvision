import Card from "@/components/Card";
//import { SvgImage } from "@/components/SvgImage";
import SvgImage from "@/components/SvgImage";
import Footer from "@/components/Footer";
import Division from "@/components/Division";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <section className="items-center w-full px-52 py-20">
      <h1 className="heading text-[80px] mt-16 !leading-snug">Restoring Sight, Changing Lives</h1>
      <div className="flex gap-20 text-center my-10">
        <button className="button">Get Involved</button>
        <button className="button !bg-white">Learn More</button>
      </div>
    </section>
    <section className="items-center w-full">
      <div className="mb-24 px-36 py-14">
        <h1 className="heading text-[60px]">How we started</h1>
        <p className="des max-w-3xl text-[20px]">ClearVision Foundation is a global, youth-driven initiative dedicated to restoring sight and transforming lives. Through free medical eye care and groundbreaking research, we are tackling the challenges of preventable blindness.</p>
        <div className="flex gap-16 mt-8">
          <Card title="Non Profit" description="We bring essential eye care to underserved communities through free medical camps, vision screenings, and cataract surgeries—restoring sight and improving lives where it's needed most."/>
          <Card title="Research and Development" description="Developing Ion-Controlled Adaptive Lenses (ICAL), an innovative technology designed to create self-adjusting, one-size-fits-all eyewear."/>
          <Card title="Donate" description="Your support helps us provide life-changing eye care to those who need it most. Every donation goes directly toward funding cataract surgeries, hosting free eye camps, and advancing our research in adaptive lens technology."/>
        </div>
      </div>
      <div>
        <div className="flex text-center justify-center gap-20 bg-primary py-36">
          <h2 className="heading text-[60px]">&quot;Vision isn’t just about what we see—it’s about believing in a future where no one is left in the dark.&quot;- Person</h2>
        </div>
        <div className="px-36 py-20">
          <div className="flex items-center gap-12">
            <Card title="Fundraising" description="Every act of giving powers a pair of eyes to see the world anew.
From individuals to institutions, our supporters make vision possible.
With your help, we turn compassion into action—one dollar at a time.
"/>
            <SvgImage/>
            <Card/>
            {/* <p className="px-32 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
          </div>
          <div className="flex items-center gap-12">
            {/* <p className="px-20 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
            <Card/>
            <SvgImage/>
            <Card title="Planning" description="Behind every eye camp is careful coordination and deep care.
We bring together local leaders, healthcare professionals, and community volunteers.
Our mission only works when every hand, heart, and mind is aligned."/>
            
          </div>
          <div className="flex items-center gap-12">
            <Card title="Hosting Medical Camps" description="In remote villages and underserved areas, we set up clinics of hope.
Patients are screened, diagnosed, and supported—free of charge.
What begins as a check-up often ends with a life transformed.
"/>
            <SvgImage/>
            {/* <p className="px-28 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
            <Card/>
          </div>
          <div className="flex items-center gap-12">
            <Card/>
            <SvgImage/>
            <Card title="Surgeries & Follow-ups" description="For many, cataracts mean a life lived in shadows.
We partner with local hospitals to restore sight—completely free of cost.
Our care doesn’t stop at surgery. We ensure healing continues with follow-ups and support.

"/>
            {/* <p className="px-28 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
            
          </div>
        </div>
      </div>
    </section>
    <section className="px-36 py-14 items-center w-full">
      <div className="flex items-center gap-12 mb-12">
        <div className="w-7/12">
          <h1 className="heading text-[64px]"> All lenses fits all</h1>
          <p className="des">Research</p>
        </div>
        <Image src="/happy-doctor.png" alt="Eyecare-Image" width={600} height={620} />
      </div>
      <div className="flex gap-12 py-20">
        <Division title="Volunteers" description="Our volunteers are the heartbeat of every mission—bringing light, care, and compassion to those in need.
"/>
        <Division title="Our Mission" description="Through innovation and outreach, we bring sight-saving solutions to underserved communities."/>
        <Division title="Millions are at risk" description="Every dollar, every surgery, every camp brings us one step closer to a world where no one loses vision due to lack of care." className="!border-r-0"/>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-7/12">
          <h1 className="heading text-[68px] pb-5">Help us make this dream a reality</h1>
          <button className="button">Donate Today!</button>
        </div>
        <Image src="/eyeCare.png" alt="Eyecare-Image" width={500} height={460} />
      </div>
    </section>
    <section>
      <Footer/>
    </section>
   </div>
  );
}
