import React, { useEffect, useState, useRef } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'
import SliderItem from './SliderItem'
import data from './talks.json'


const Talks = () => {

    return (
        <section id='talks'>
            <div className='container max-w-[1040px] mx-auto p-4 justify-center'>
                <div className='title text-xl justify-center align-center'>
                    Talks
                </div>
                <div className='mx-auto max-w-96 items-center justify-center'>
                    {
                        data.map((value, index) => {
                            return (
                                <SliderItem
                                    key={index}
                                    index={index} 
                                    metadata={value}>
                                </SliderItem>
                            )
                    })}
                </div>            
            </div>
        </section>
    )
}

export default Talks