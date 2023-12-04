import React from 'react'

type NavigationProps = {
    className?: string
}

export default function Navigation({ className }: NavigationProps) {
    return (
        <div className={`fixed bottom-0 left-0 w-full ${className}`}>
            <div className="m-auto duration-150 px-2 md:py-4 py-2 md:px-0 md:w-4/5 w-full flex justify-between items-center">
                Navigaetop
            </div>
        </div>
    )
}
