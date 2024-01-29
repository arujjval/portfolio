import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {

  const handleAboutClick = (data) => {  
    switch(data.target.id) {
      case '0':
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
        break;
      case '1':
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
        break;
      case '2':
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
        break;
      case '3':
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        break;
    }
  }


  return (
    <div className='bg-opacity-0 h-20 w-full z-10 fixed'>
        <div className='px-40 py-10 h-full flex justify-between items-center'>
            <div className='my-name text-5xl hover:scale-110 duration-300 ease-in-out'>
              <Link id='0' className='hover:scale-110 duration-300 ease-in-out' onClick={handleAboutClick}>AN</Link>
            </div>
            <div className='flex gap-10 proxima text-lg'>
                <Link id='1' className='hover:scale-110 duration-300 ease-in-out' onClick={handleAboutClick}>About me</Link>
                <Link id='2' className='hover:scale-110 duration-300 ease-in-out' onClick={handleAboutClick}>Projects</Link>
                <Link id='3' className='hover:scale-110 duration-300 ease-in-out' onClick={handleAboutClick}>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar