import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d, 0%, #ff6378 100%)' : 'transparent'};    
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 25px;

    &:hover {
        opacity: 0.9;
        color: ${props => props.theme === 'primary' ? '#010000' : '#0051ff'};
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fff, 0%, ##ff6378 100%)' : '#fff'};
    }

    &:active {
        opacity: ${props => props.theme === 'primary' ? '0.9' : '0.7'};
    }
`
