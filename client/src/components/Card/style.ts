import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: auto;
    Width: 851px;
    Height: 300px;

    background-color: #fff;

    display: flex;
    align-items: center;

    border-radius: 40px;
    padding: 62px 78px 75px 63px;
    gap: 58px;

    box-shadow: 2px 2px 2px 1px rgba(0, 250, 250, 0.2);
`;

export const CardImage = styled.div`
    Width: 450px;
    Height: 150px;

    border-radius: 100%;
    background-color: red;
`;

export const ContainerText = styled.div`
    Height: 9.375rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;  
`;

export const CardNome = styled.div`
    align-self: flex-start;
`;
export const CardDescription = styled.div`
    text-align: left;
`;