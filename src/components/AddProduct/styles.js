import styled from "styled-components"

export const Card = styled.form`
    color: #fafafa;
    flex-direction: column;

    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    box-sizing: border-box;

`

export const CardClient = styled.article`
    width: 35vw;
    border-radius: 1rem;
    background-color: #2e2e2e;
`

export const Info = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-sizing: border-box;

    h1 {
        margin-bottom: 0.5rem;
    }
    img {
        margin: 1rem 0 1rem 0;
        width: 10vw;
        box-sizing: border-box;
    }
    div {
        display: flex;
        flex-direction: column;

}
`

export const InputAdd = styled.div`
    flex-direction: row;
    padding: 1rem;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    bottom: 0;

    input:nth-child(2){
        box-sizing: border-box;
        margin: 0 1rem;
        border-radius: 1rem;
        color: #fafafa;
        border-style: none;
        padding: 1rem;
        outline: none;
        background-color: #f3504f;
        width: 20vw;
        ::placeholder {
            color: #fafafa;

        }
    }

    input:first-child {
        box-sizing: border-box;
        margin: 0 1rem;
        text-align: center;
        border-radius: 1rem;
        color: #fafafa;
        border-style: none;
        background-color: #f3504f;
        width: 5vw;
        ::placeholder {
            color: #fafafa;

        }
    }

    button {
        cursor: pointer;
        padding: 1rem;
        border-radius: 1rem;
        border: none;

        :hover {
            background-color: #000000;
            color: #fafafa;
        }
    }
`