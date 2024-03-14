import Logo from '../../assets/logoipsum-282.svg'
import { BsFacebook, BsInstagram,BsGithub,BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="md:px-14 py-4 px-4 mx-auto max-w-screen-2xl bg-[#5a61ac] text-white">
        <div className='my-12 flex flex-col md:flex-row gap-10'>
              <div className='md:w-1/2 space-y-8'>
                <a href="/" className='flex items-center gap-2'>
                        <img src={Logo} alt="" className='w-10' />
                        <span className='text-white'>MY WEBSITE</span>
                  </a>
                  <p className='md:w-1/2'>A simple paragraph is comprised of three major components. 
                      The first sentence, which is often a declarative sentence.
                  </p>
                  <div>
                      <input type="email" name='email' id='email' placeholder='Your Email'
                          className='bg-[#404254] p-3 rounded-lg text-black focus:outline-none' />
                      <input type="submit" value="subscribe"
                          className='bg-[#daddff] p-3 rounded-lg text-black focus:outline-none -ml-3 cursor-pointer hover:bg-[#a5a8c3] duration-300 transition-all' />
                  </div>
              </div>
              
              <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start my-12'>
              <div className='space-y-4'>
                  <h4 className='text-2xl text-black sm:text-white'>Platform</h4>
                  <ul className='space-y-3'>
                      <a href="/" className='block hover:text-gray-300'>Overview</a>
                      <a href="/" className='block hover:text-gray-300'>Features</a>
                      <a href="/" className='block hover:text-gray-300'>About</a>
                      <a href="/" className='block hover:text-gray-300'>Pricing</a>
                  </ul>
              </div>
              <div className='space-y-4'>
                  <h4 className='text-2xl text-black sm:text-white'>Help</h4>
                  <ul className='space-y-3'>
                      <a href="/" className='block hover:text-gray-300'>How does it works?></a>
                      <a href="/" className='block hover:text-gray-300'>Where to ask questions?</a>
                      <a href="/" className='block hover:text-gray-300'>How to play?</a>
                      <a href="/" className='block hover:text-gray-300'>What is needed for this?</a>
                  </ul>
              </div>
              <div className='space-y-4'>
                  <h4 className='text-2xl text-black sm:text-white'>Contacts</h4>
                  <ul className='space-y-3'>
                      <p>(012) 1234-567-890</p>
                      <p >123 block 6 phase 9</p>
                      <p >Q.C. Manila, Philippines</p>
                      
                  </ul>
              </div>      
              </div>
          </div>


          <hr />
                <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                      <p className='tracking-widest'>@ Joshua Benas --- 2024 03 14. All rights reserved.</p>
                      <div className='flex items-center space-x-5'>
                          <BsFacebook className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                          <BsGithub className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                          <BsInstagram className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300' />
                          <BsTwitter className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                      </div>
                </div>
    </div>   
  )
}

export default Footer
