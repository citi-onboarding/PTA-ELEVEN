import styled from 'styled-components'; 


export const ContainerFooter = styled.div`
    margin-top: 2rem;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
`;

export const FooterImage = styled.div`
    position: relative;
`;

export const ContainerText = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 309px 0 242px;
`;


export const FooterSectionLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    line-height: 1.6;

    font-family: Azo Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    
`;

export const FooterSectionRight = styled.div`
    text-align: right;
    line-height: 2;

    a{
        margin: 0 0 0 37px;
    }

`;
