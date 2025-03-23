import React from 'react'

const Division = ({title,description, button, icon, className}:{title:string, description:string, button?:string, className?:string}) => {
  return (
    <div className={`py-6 items-start text-left w-1/2 border-r-2 ${className}`}>
       {
        icon && {icon}
       }
        <h2 className='heading text-[32px] !font-openSans font-bold'>{title}</h2>
        <p className='des text-neutral-600'>{description}</p>
        {button &&<button className='pt-2'>{button}</button>}
    </div> 
  )
}

export default Division