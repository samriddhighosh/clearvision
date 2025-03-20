import { Navbar } from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default layout