import Division from '@/components/Division'
import React from 'react'

const HowWeWork = () => {
  return (
    <div>
        <section>
            <h1 className='heading text-[70px] mx-auto text-center py-40 leading-tight'>Changing vision all over the world by 2030</h1>
        </section>
        <div className="flex gap-8 pl-20 pt-44">
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description"/>
          <Division title="Non Profit" description="description" className='border-r-0'/>
        </div>
    </div>
  )
}

export default HowWeWork