'use client'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

export default function Slider() {
    const sliderRef = useRef<HTMLDivElement | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        { img: '/img/culto.jpg' },
    ]

    const totalSlides = slides.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 3000)

        return () => clearInterval(interval)
    }, [totalSlides])

    useEffect(() => {
        if (!sliderRef.current) return
        const slideWidth = sliderRef.current.clientWidth
        sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    }, [currentSlide])

    return (
        <div className="flex flex-col items-center bg-black">
            <div className="w-full max-w-3xl overflow-hidden relative ">
                <div

                    className=" relative flex ransition-transform duration-500 ease-in-out md:max-w-full w-full"
                >

                    <Image
                        src={'/img/culto.jpg'}
                        sizes="100vw"
                        alt={'culto'}
                        fill
                        className="flex-shrink-0 object-cover"
                    />

                </div>
            </div>

        </div>
    )
}
