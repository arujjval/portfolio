import React from 'react'
import 'primeicons/primeicons.css';

const Contact = () => {
  return (
    <div id='contact' className='px-40 pt-40'>
      <div className='text-4xl my-name'>Connect with me on</div>
      <div className='flex sm:flex-row flex-col justify-center gap-20 py-20 text-3xl'>
        <a href="https://twitter.com/arujjval" target='_blank'><i className="pi pi-twitter"></i></a>
        <a href="https://www.linkedin.com/in/arujjwal/" target='_blank'><i className="pi pi-linkedin"></i></a>
        <a href="https://github.com/arujjval" target='_blank'><i className="pi pi-github"></i></a>
        <a href="mailto:arujjwal0208@gmail.com" target='_blank'><i className="pi pi-envelope"></i></a>
      </div>
    </div>
  )
}

export default Contact