import { motion } from 'framer-motion';
import { slideUp } from './anim';
import React, { useEffect, useState } from 'react';
export default function Preloader() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }
    return (
        <motion.div variants={slideUp} initial='initial' exit='exit' className="h-screen w-screen bg-[#141516] fixed top-0 left-0 z-[99] text-white flex items-center justify-center">
            {dimension.width > 0 &&
                <>
                    <span className='text-[80px] absolute z-[1] flex font-lato'>àrtisto</span>
                    <svg className='absolute top-0 left-0 w-full svg-preload'>
                        <motion.path variants={curve} className='fill-[#141516]'></motion.path>
                    </svg>
                </>}
        </motion.div>
    )
}