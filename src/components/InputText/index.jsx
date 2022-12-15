import React from 'react'
import { InputDiv } from './styles.js'

export function InputText({ label, change, must, value, placeholder }) {

    const aoChange = (e) => {
        change(e.target.value)
    }
    
    return (
        <InputDiv>
            <label htmlFor='nome'>{label}</label>
            <input
                placeholder={placeholder}
                value={value}
                required={must}
                onChange={aoChange}
                name='nome'
                type="text"
            />
        </InputDiv>
    )
}
