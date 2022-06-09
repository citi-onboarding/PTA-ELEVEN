import styled from 'styled-components'; 

export const ContainerComponent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4.5rem 0 4.5rem 0;

    a{
        text-decoration: none;
    }
`;

export const ContainerText = styled.div`
    position: absolute;
    z-index: 10;

    A{
        color: rgba(69, 138, 170, 0.2);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgba(0, 0, 0, 1);    
    
        &:hover {
            color: rgba(0, 0, 0, 1);    
        }
    }
`; 

export const BackgroundImage = styled.div`
    overflow: hidden;
`;

export const L1 = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;

    font-family: Azo Sans;
    font-size: 100px;
    font-weight: 900;
    line-height: 120px;
    letter-spacing: 0em;
    text-align: center;
    
    margin-rigth: 380px;

`;

export const Arrows = styled.div`
    display: flex;
    gap: 12px;

    Width: 37.05px;
    Height: 60px;


`;

export const L2 = styled.div`
    font-family: Azo Sans;
    font-size: 100px;
    font-style: italic;
    font-weight: 900;
    line-height: 120px;
    letter-spacing: 0em;
    text-align: left;
    
    margin-left: 230px;

`;

