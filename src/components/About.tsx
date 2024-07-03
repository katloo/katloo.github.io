import React from 'react'
import meImage from '../assets/me.png'

const About = () => {
  return (
    <section id='about'>
        <div className='container max-w-[1040px] mx-auto p-4'>
            <div className='title text-xl justify-center'>
                About me
            </div>
            <div className='md:flex md:max-h-full'>
                <div className="block max-h-inherit md:max-lg:w-1/3 max-w-64 items-center justify-center mx-auto">
                    <img src={meImage} alt="me" className="object-scale-down items-center justify-center md:items-center"></img>
                </div>
                <div id='content' className='block font-serif md:max-lg:w-2/3 text-center py-4 px-16 text-l mx-auto'>
                    <p id='intro'>
                        Hi, my name is Kat, nice to meet you! <br /><br />
                        I'm a software engineer by trade with plenty of interests and opinions. 
                        Originally from New Jersey, but have found myself in Berlin for the past several years.
                    </p>
                    <br />
                    <div id='software' className='block'>
                        <div className='title text-sm justify-center'>
                            Software Stuff I love
                        </div>
                        <ul className='list-none'>
                            <li>System design & architecture</li>
                            <li>API design</li>
                            <li>Production operations</li>
                            <li>Resilience, scalability, and durability</li>
                            <li>Automation of all kinds</li>
                            <li>Team building, mentoring, and teaching</li>
                        </ul> 
                    </div>
                    < br/>
                    <div id='other' className='block'>
                        <div className='title text-sm justify-center'>
                            Other Stuff I love
                        </div>
                        <ul className='list-none'>
                            <li>Brazilian Jiu Jitsu & MMA</li>
                            <li>Cooking and food</li>
                            <li>Anything with black sesame</li>
                            <li>Kickstarting my DJ career</li>
                            <li>Advocating for the devil</li>
                        </ul> 
                    </div>
                </div>            
            </div>
            
        </div>
    </section>
  )
}

export default About
