"use client";


import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

const Header = () => {
  return (
    <>
      <div className="container justify-center items-center flex w-full h-[70vh] relative top-[15vh]">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Shashank Sharma <br /> <h2 className='flex text-[40px] text-center items-center p-6'>Electronic and Communication Engineer</h2>
          </motion.h1>
        </LampContainer>
      </div>
    </>
  )
}

export default Header