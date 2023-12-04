import React from 'react'

type InputProps = {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'password' | 'email' | 'number'
    placeholder?: string
    required?: boolean
    className?: string
    name?: string
    id?: string
    kind?: 'default' | 'form'
}

export default function Input({ value, id, kind = 'default', name, className, onChange, type = 'text', placeholder, required }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            id={id}
            name={name}
            className={`${kind === 'form' && ' outline-none text-black bg-bg-input-form py-2 px-4 text-sm rounded-lg'} ${className}`}
        />
    )
}
