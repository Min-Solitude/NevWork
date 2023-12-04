import React from 'react'

type LabelProps = {
    className?: string
    htmlFor?: string
    children?: React.ReactNode
}

export default function Label({ className, htmlFor, children }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`${className}`}>
            {children}
        </label>
    )
}
