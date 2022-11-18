import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/682726c4-1229-4c71-a716-848a280d5c66" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>- Send me a message below or email me: myemail@gmail.com</p>
        </div>
        <input className='bg-[#d3d3d3] p-2 rounded' type="text" placeholder='Name' name='name' />
        <input className='my-4 py-4 p-2 bg-[#d3d3d3] rounded' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#d3d3d3] p-2 rounded' name="message" placeholder='Message'  rows="6"></textarea>
        <button className='text-white border-2 hover:bg-[#004aad] hover:border-[#004aad] px-4 py-3 my-8 mx-auto flex items-center rounded'>Let's Talk</button>
      </form>
    </div>
  )
}

export default Contact;