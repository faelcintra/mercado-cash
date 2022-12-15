import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;

    input {
        margin: 0 0.2rem;
        border-radius: 1rem;
        color: #fafafa;
        border-style: none;
        padding: 1rem;
        outline: none;
        background-color: #f3504f;
        position: relative;

        ::placeholder{
            color: #fafafa;
        }
    }

 

    label:hover {
    }
`