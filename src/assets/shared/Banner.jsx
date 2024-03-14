import React from 'react'

function Banner({ bannerImg, heading, subheading, btn1, btn2 }) {
  return (
    <div className='bg-gradient p-8 rounded-xl rounded-br-[200px]'>
    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 '>
      <div>
        <img src={bannerImg} alt="" className='lg:h-[-368px]' />
      </div>
      <div className='md:w-3/5'>
                  <h2 className='md:text-7xl text-5xl font-bold text-white mb-6 md:leading-[110.4px] leading-relaxed'>{ heading}</h2>
                  <p className='text-white text-base mb-8 tracking-widest'>{ subheading}</p>

        <div className='md:space-x-5 '>
        <button className='px-8 py-2 border-solid rounded text-white bg-[#9a7af1] hover:bg-[#6348ab]'>{btn1}</button>
        <button className='px-8 py-2 border-solid  rounded text-white bg-[#9a7af1] hover:bg-[#6348ab]'>{ btn2}</button>
      </div>  
      
      </div>
    </div>
  </div>
  )
}

export default Banner
