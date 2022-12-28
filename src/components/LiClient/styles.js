import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    background-color: #2e2e2e;
    width: 40vw;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 0.5rem 0;
    position: relative;

    img {
        margin: 0 1rem;;
        width: 5vw;
    }

`

export const TextDiv = styled.div`
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-left: 8rem;

        h2 {
            color: #fafafa;
            font-weight: normal;
            font-size: 1.6rem;
            padding: 1rem 0;
        }

        span {
            color: #c4c4c4;
            font-style: italic;
        }
    
`
export const Buttons = styled.div`
    display: flex;

    button {
        background-color: #fafafa;
        color: #000;
        margin: 2rem 1rem 0 0;
        cursor: pointer;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
        :hover {
            scale: 1.1;
            background-color: #000;
            color: #fafafa;
        } 
        :last-child:hover {
            background-color: #f3504f;
        }
    }
   
`

export const ButtonDelete = styled.button`
        background-color: #000;
        color: #fafafa;
        margin: 2rem 1rem 0 0;
        cursor: pointer;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
        :hover {
            scale: 1.1;
            background-color: #fafafa;
            color: #000;
        } 
        :last-child:hover {
            background-color: #f3504f;
        }
`