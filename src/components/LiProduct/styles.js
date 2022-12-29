import styled from "styled-components"

export const Li = styled.li `
    box-sizing: border-box;
    padding: 1rem;
    margin: 5px auto 0;
    border-radius: 1rem;
    height: 4vw;
    display: flex;
    align-items: center;
	background-color: #2e2e2e;
    width: 35vw;
    justify-content: space-between;

`

export const UlButtons = styled.div`
    justify-content: flex-end;
    display: flex;
    flex: content;
    width: 100%;
    button {
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        width: 5vw;
    }
    button:hover {
        background-color: #000;
        color: #fafafa;
    }
    button:last-child { 
        margin: 0 0 0 0.5rem;
    }
`

export const UlText = styled.div`
    display: flex;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: flex-end;

    span {
        width: 80%;
        padding: 0 1rem;
    }

    strong {
        box-sizing: border-box;
        width: auto;
        font-size: 2rem ;
    }

`