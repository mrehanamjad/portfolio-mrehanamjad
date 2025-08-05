import React from 'react'
import Container from './Container'

function ProjectSection() {
  return (
     <section className='w-full h-screen' >
            <Container>
                <div className='h-full w-full overflow-x-auto'>
                    <div className="h-full w-full  flex flex-col justify-center items-center gap-10">
                        <h2 className='text-5xl text-outline-my font-semibold '>PROJECTS</h2>
                        <h3 className='text-6xl md:text-8xl lg:text-8xl uppercase font-bold bg-gradient-to-t from-black/40 via-white to-white inline-block text-transparent bg-clip-text'>SOME OF MY RECENT WORKS</h3>
                    </div>
    
                </div>
            </Container>
        </section>
  )
}

export default ProjectSection