import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    margin: auto;   
    height: 350px;
    width: 458px;

    display: flex;
    align-items: flex-end;

    background-color: red;
`;

export const CardImage = styled.div`
    background-color: blue;
    height: 350px;
    width: 458px;

    img{
        height: 350px;
        width: 458px;
        object-fit: cover;
    }
`;

export const ContainerText = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 34px 35px 32px


`;

export const CardNome = styled.div`
    Width:196px
    Height:30px

    font-weight: bold;
    font-weight: 900;
`;
export const CardInstagram = styled.div`
    Width: 21.67px;
    Height: 21.67px;

    img{
        Width: 21.67px;
        Height:21.67px;
        object-fit: contain;
        cursor: pointer;
    }
`;