import React from 'react'

export function InputText({ label, change, must, value }) {

    const aoChange = (e) => {
        change(e.target.value)
    }
    return (
        <div>
            <label htmlFor='nome'>{label}</label>
            <input
                value={value}
                required={must}
                onChange={aoChange}
                name='nome'
                type="text"
            />
        </div>
    )
}
