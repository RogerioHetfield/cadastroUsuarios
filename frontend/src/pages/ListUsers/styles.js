import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #fff;
        text-align: center;
        font-size: 38px;
        font-style: normal;
        font-weight: 700;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;


    @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 400px;

    h3 {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 12px;
        font-weight: 200;
    }

    
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`
export const Button = styled.button`
    padding: 20px;
    margin: 20px;
`
