import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-20 px-16 py-10'>
        <div>
            <h2 className='text-2xl font-semibold'>Contact Us</h2>
            <div className='flex gap-10'>

            </div>

        </div>
        <div className='flex gap-10'>
            <div className='flex flex-col'>
                <Link href="/web_design">
                <span>Research</span>
                </Link>
                <Link href="/about">
                <span>Non Profit</span>
                </Link>
                <Link href="/submissions">
                <span>Our Team</span>
                </Link>
            </div>
            <div className='flex flex-col'>
                <Link href="/web_design" className='max-w-2xl'>
                <span>Research</span>
                </Link>
                <Link href="/about">
                <span>Non Profit</span>
                </Link>
                <Link href="/submissions">
                <span>Our Team</span>
                </Link>
            </div>
            <div className='flex flex-col'>
                <Link href="/web_design" className='max-w-2xl'>
                <span>Research</span>
                </Link>
                <Link href="/about">
                <span>Non Profit</span>
                </Link>
                <Link href="/submissions">
                <span>Our Team</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer