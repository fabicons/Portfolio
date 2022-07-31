import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center h-full px-2 2xl:px-16'>
            <Image 
            src="/../public/assets/navLogo.png" 
            alt="/" 
            width="125" 
            height="50"/>
        </div>
            <ul className='hidden md:flex'>
                <Link href="/">
                <li className ='ml10 text sm uppercase hover:border-b' >Home</li>
                </Link>
                <Link href="/">
                <li className ='ml10 text sm uppercase hover:border-b' >About</li>
                </Link>
                <Link href="/">
                <li className ='ml10 text sm uppercase hover:border-b' >Skills</li>
                </Link>
                <Link href="/">
                <li className ='ml10 text sm uppercase hover:border-b' >Projects</li>
                </Link>
                <Link href="/">
                <li className ='ml10 text sm uppercase hover:border-b' >Contact</li>
                </Link>
            </ul>
            



    </div>
  )
}

export default Navbar