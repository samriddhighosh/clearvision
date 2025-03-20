import React from 'react'

const Division = ({title,description,img, button, className}:{title?:string, description?:string, button?:string, className?:string}) => {
  return (
    <div className={`py-6 items-start text-left w-1/2 border-r-2 ${className}`}>
        {img&&<img src={img} alt="top-image"/>}
        <h2 className='heading text-[32px] !font-openSans font-bold'>{title}</h2>
        <p className='des text-neutral-600'>{description}</p>
        {button &&<button>{button}</button>}
    </div>
  )
}

export default Division