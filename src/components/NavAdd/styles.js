import styled from "styled-components";

export const Nav = styled.nav`
    width: 50vw;
    padding: 2rem;
    display: flex;
    justify-content: center;
    background-color: #2e2e2e;

    border-radius: 1rem;
    box-sizing: border-box;
    
`
export const Form = styled.form`
    border-radius: 1rem;
    div {
        justify-content: center;
        align-items: center;
        display: flex;

}
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    background-color: #4b4b4b;
    color: #fafafa;

    :hover {
        background-color: #fafafa;
        color: #4b4b4b;

    }
`