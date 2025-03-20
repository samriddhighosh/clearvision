import Card from '@/components/Card'
import React from 'react'

const page = () => {
  return (
    <div className='px-28'>
        <div className="flex items-center gap-20 justify-left py-10">
        <p className="py-40 px-56 bg-gray-300"></p>
        <div>
          <h1 className="heading text-[56px]">Meet ...</h1>
          <p className='des'>lorem ipsum</p>
          <button className="button !bg-white">Meet Her</button>
        </div>
        
      </div>
      <h2 className='heading text-[36px] text-center mx-auto'>Quote</h2>
      <div className="flex items-center gap-20 justify-left py-10">
        <p className="py-40 px-56 bg-gray-300"></p>
        <div>
          <h1 className="heading text-[56px]">Meet ...</h1>
          <p className='des'>lorem ipsum</p>
          <button className="button !bg-white">Meet Her</button>
        </div>
        
      </div>
      <div>
        <h1 className='heading text-[56px]'>Board of Directors</h1>
        <div className='flex gap-14 mt-14'>
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        </div>
        <div className='flex gap-14 mt-14'>
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        </div>
        <div className='flex gap-14 mt-14'>
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
            <Card title='name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        </div>
      </div>
    </div>
  )
}

export default page