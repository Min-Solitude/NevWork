'use client'
import { motion } from "framer-motion";
import React, { useState } from 'react'

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

type ToggleProps = {
    isTurnOn: boolean;
    handleToggle: () => void;
};

export default function Toggle({ isTurnOn, handleToggle }: ToggleProps) {

    const [isOn, setIsOn] = useState(isTurnOn);

    return (
        <div className={`w-[45px] h-[22px] bg-[#ffffff70] flex rounded-full py-[3px] px-[4px] cursor-pointer ${isOn ? 'justify-end bg-cl-yellow' : 'justify-start'}`} onClick={() => {
            handleToggle();
            setIsOn(!isOn);
        }}>
            <motion.div className="w-[16.6px] h-[16.6px] bg-white rounded-full" layout transition={spring} />
        </div>
    )
}
