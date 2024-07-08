import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const Contact = () => {
    const email = 'mailto:hello@katliu.me'
    const linkedIn = 'https://www.linkedin.com/in/kat-liu-0128096a/'
    const github = 'https://github.com/katloo'
  return (
    <section id='contact'>
        <div className='container max-w-[1240px] mx-auto p-4'>
            <div className='title text-xl justify-center'>
                Contact
            </div>
            <div className='py-8'></div>
            <div className='container max-w-32 mx-auto py-4'>
                <button className='px-2 mx-auto'>
                    <MdOutlineAlternateEmail 
                        size={30} 
                        onClick={(() => window.location.href = email )}>
                    </MdOutlineAlternateEmail>
                </button>
                <span className='inline-block align-top mx-auto'>
                    <a href={email} target='_blank' className='font-serif mx-auto align-middle'>
                        email
                    </a>
                </span>
            </div>
            <div className='container max-w-32 mx-auto py-4'>
                <button className='px-2 mx-auto'>
                    <FaLinkedinIn 
                        size={30} 
                        onClick={(() => window.location.href = linkedIn )}>
                    </FaLinkedinIn>
                </button>
                <span className='inline-block align-top mx-auto'>
                    <a href={linkedIn} target='_blank' className='font-serif mx-auto'>
                        linkedin
                    </a>
                </span>
            </div>
            <div className='container max-w-32 mx-auto py-4'>
                <button className='px-2 mx-auto'>
                    <IoLogoGithub 
                        size={30} 
                        onClick={(() => window.location.href = github )}>
                    </IoLogoGithub>
                </button>
                <span className='inline-block align-top mx-auto'>
                    <a href={github} target='_blank' className='font-serif mx-auto'>
                        github
                    </a>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Contact
