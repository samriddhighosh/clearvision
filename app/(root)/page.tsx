import Card from "@/components/Card";
//import { SvgImage } from "@/components/SvgImage";
import SvgImage from "@/components/SvgImage";
import Footer from "@/components/Footer";
import Division from "@/components/Division";

export default function Home() {
  return (
   <div>
    <section className="items-center w-full px-52 py-20">
      <h1 className="heading pb-10 text-[72px]">Restoring Sight, Changing Lives</h1>
      <div className="flex gap-20 text-center">
        <button className="button">Get Involved</button>
        <button className="button !bg-white">Learn More</button>
      </div>
    </section>
    <section className="items-center w-full px-36 py-20">
      <div className="mb-24">
        <h1 className="heading text-[60px]">How we started</h1>
        <p className="des max-w-3xl">ClearVision Foundation is a global, youth-driven initiative dedicated to restoring sight and transforming lives. Through free medical eye care and groundbreaking research, we are tackling the challenges of preventable blindness.</p>
        <div className="flex gap-20">
          <Card title="Non Profit" description="Bringing essential eye care to underserved communities by hosting free medical camps and facilitating cataract surgeries."/>
          <Card title="Research and Development" description="Developing Ion-Controlled Adaptive Lenses (ICAL), an innovative technology designed to create self-adjusting, one-size-fits-all eyewear."/>
          <Card title="Non Profit" description="description"/>
        </div>
      </div>
      <div className="mb-24">
        <div className="flex items-center justify-start gap-20 mb-24 ">
          <h2 className="heading text-[60px] w-7/12">&quot;Quote&quot;</h2>
          <p className="py-20 px-40 bg-gray-300"></p>
        </div>
        <div>
          <div className="flex items-center gap-12">
            <Card title="Fundraising" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <SvgImage/>
            <Card/>
            {/* <p className="px-32 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
          </div>
          <div className="flex items-center gap-12">
            {/* <p className="px-20 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
            <Card/>
            <SvgImage/>
            <Card title="Fundraising" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            
          </div>
          <div className="flex items-center gap-12">
            <Card title="Fundraising" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <SvgImage/>
            {/* <p className="px-28 py-40 bg-blue-200 rounded-2xl w-1/2"></p> */}
            <Card/>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-12 mb-12">
        <div className="w-7/12">
          <h1 className="heading text-[64px]"> All lenses fits all</h1>
          <p className="des">Research</p>
        </div>
        <p className="py-20 px-40 bg-gray-300"></p>
      </div>
      <div className="flex items-center gap-20 mb-10">
        <Division title="Volunteers" description="working towards accessible vision care.
"/>
        <Division title="PlaceHolder" description="This is the description"/>
        <Division title=" Millions are at risk" description="of preventable blindness—we are here to change that." className="!border-r-0"/>
      </div>
      
      <div className="flex items-center gap-12">
        <div className="w-7/12">
          <h1 className="heading text-[68px] pb-5">Help us make this dream a reality</h1>
          <button className="button">Donate Today!</button>
        </div>
        <p className="py-20 px-36 bg-gray-300"></p>
      </div>
    </section>
    <section>
      <Footer/>
    </section>
   </div>
  );
}
