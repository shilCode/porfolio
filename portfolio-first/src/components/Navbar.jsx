import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.jpg'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleCLick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between px-4 bg-[#0a192f]
     text-gray-300'>

        <div>
          <img src= {logo} alt="logo" style={{width:'50px'}}/>
        </div>
        {/* menu */}

            <ul className='hidden md:flex font-bold'>
                <li>
                <Link  to="home" smooth={true} offset={50} duration={500}>
                Home</Link> 
                </li>
                <li>
                <Link  to="about" smooth={true} offset={50} duration={500}>
                About</Link> 
                </li>
                <li> <Link  to="skills" smooth={true} offset={50} duration={500}>
                Skills</Link> </li>
                <li> <Link  to="work" smooth={true} offset={50} duration={500}>
                Work</Link> </li>
                <li>
                <Link  to="contact" smooth={true} offset={50} duration={500}>
                Contact</Link> 
                </li>
            </ul>


  {/* Hamburger */}
<div onClick={handleCLick} className='md:hidden z-10'>
    {!nav ? <FaBars/> : <FaTimes/>}
    
</div>
    {/* mobile menu */}
    <div className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
        <ul>
                <li  className='py-6 text-4xl'><Link onClick={handleCLick} to="home" smooth={true} offset={50} duration={500}>
                Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleCLick} to="about" smooth={true} offset={50} duration={500}>
                About</Link> </li>
                <li className='py-6 text-4xl'><Link onClick={handleCLick} to="skills" smooth={true} offset={50} duration={500}>
                Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleCLick} to="work" smooth={true} offset={50} duration={500}>
                Work</Link></li>
                <li className='py-6 text-4xl'>  <Link onClick={handleCLick} to="contact" smooth={true} offset={50} duration={500}>
                Contact</Link> </li>
        </ul>
    </div>
    {/* social icons */}
    <div className='hidden  lg:flex flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300  ' href="/">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                <a className='flex justify-between items-center w-full text-gray-300 ' href="/">
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center   ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    Mail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300  ' href="/">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>




    </div>

</div>


  )
}

export default Navbar