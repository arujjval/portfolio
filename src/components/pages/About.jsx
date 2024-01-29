import React from "react";

const About = () => {

  const myRef = React.createRef();

  return (
    <div id='about' ref={myRef} className='py-5 px-40 flex flex-col gap-4'>
      <div className='my-name text-4xl'>
        About me
      </div>
      <div className='flex flex-row justify-between pt-10'>
        <div className='bg-dark-3/30 rounded-lg py-7 px-10 md:basis-2/3 proxima text-lg'>
          Hi, I am Arujjwal Negi and am a 2nd year Student at Graphic Era Hill University, Dehradun. I have learned DSA with C++ and Web Development with ReactJS. Currently, I am working on Machine Learning and Cloud Technologies. I also contribute to Open Source Projects. 
        </div>
        <div className='hidden md:block rounded-xl p-4 border border-dark-3/80 opacity-80 hover:scale-110 hover:opacity-100 duration-300 ease-in-out'>
          <img src='/about-me.jpg' alt='about-me' className='h-80 w-80 object-fill rounded-xl'></img>
        </div>
      </div> 
    </div>
  )
}

export default About