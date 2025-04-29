import React from 'react'
import { motion } from 'framer-motion'

const CompanyLogo = ({ images, from, to }) => {

    return (
        <div className="flex MyGradient">
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return <img className="h-40 w-56 pr-20 grayscale" src={`/assets/images/Company-logo-${image}`} key={index} />;
                })}
            </motion.div>

            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return <img className="h-40 w-56 pr-20 grayscale" src={`/assets/images/Company-logo-${image}`} key={index} />;
                })}
            </motion.div>
        </div>
    )
}

export default CompanyLogo