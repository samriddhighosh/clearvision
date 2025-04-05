import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>

    
        <div>
            <h2 className='heading text-[72px]'>Events</h2>
            <p>Lorem Ipsum</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='rounded-2xl border-2'>
                <Image src="" alt="event-image" />
                <h3>Event Name</h3>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    </div>
  )
}

export default page