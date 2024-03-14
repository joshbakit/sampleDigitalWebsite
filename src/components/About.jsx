import React from 'react'
import about_logo from '../assets/undraw_Reading.png'
import about_logo2 from '../assets/undraw_universe.png'

function About() {
  return (
      <div className='md:px-14 p-4 max-w-screen-2xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
              <div className='md:w-1/2'>
                  <img src={ about_logo} alt="" className='rounded-lg' />
              </div>
              <div className='md:w-2/5'>
                  <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-blue-500'>for many years.</span></h2>
                  <p className='leading-relaxed text-secondary text-xl tracking-widest mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione veritatis necessitatibus possimus sequi laudantium. Magnam non inventore ipsa corrupti.</p>
                  <button className='px-8 py-2 border-solid rounded text-white bg-[#9a7af1] hover:bg-[#6348ab]'>Get Started</button>
              </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 mt-20'>
            <div className='md:w-2/5'>
                  <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any <span className='text-blue-500'>time convinent for you.</span></h2>
                  <p className='leading-relaxed text-secondary text-xl tracking-widest mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione veritatis necessitatibus possimus sequi laudantium. Magnam non inventore ipsa corrupti.</p>
                  <button className='px-8 py-2 border-solid rounded text-white bg-[#9a7af1] hover:bg-[#6348ab]'>Get Started</button>
            </div>
            <div className='md:w-1/2'>
                  <img src={ about_logo2} alt="" className='rounded-lg' />
            </div>  
          </div>
      
    </div>
  )
}

export default About
