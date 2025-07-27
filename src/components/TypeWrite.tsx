"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function TypeWrite({texts}:{texts:string[]}) {
    const [currentText, setCurrentText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const containerRef = useRef(null)
    
    // GSAP animation for initial fade in
    useGSAP(() => {
        gsap.fromTo(containerRef.current, 
            { 
                opacity: 0, 
                y: 20 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6,
                delay: 0.6,
                ease: "power2.out"
            }
        )
    }, [])
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = texts[currentIndex]
            
            if (isDeleting) {
                setCurrentText(current.substring(0, currentText.length - 1))
                if (currentText === "") {
                    setIsDeleting(false)
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
                }
            } else {
                setCurrentText(current.substring(0, currentText.length + 1))
                if (currentText === current) {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            }
        }, isDeleting ? 50 : 100)
        
        return () => clearTimeout(timeout)
    }, [currentText, currentIndex, isDeleting, texts])

    return (
        <div
            ref={containerRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-100 h-12 flex items-center"
        >
            {currentText}
            <span className="ml-1 animate-pulse text-green-400">|</span>
        </div>
    )
}

export default TypeWrite