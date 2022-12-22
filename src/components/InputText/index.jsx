import { InputDiv } from './styles.js'

export function InputText({ label, change, must, value, placeholder }) {


    
    return (
        <InputDiv>
            <label htmlFor='nome'>{label}</label>
            <input
                placeholder={placeholder}
                value={value}
                required={must}
                onChange={(e) => change(e.target.value)}
                name='nome'
                type="text"
            />
        </InputDiv>
    )
}
