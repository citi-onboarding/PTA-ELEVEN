import styled from 'styled-components';

export const BannerContainer = styled.div`  
    margin-bottom: 2rem;
    .outer {
        display: grid;
        grid-template: 1fr / 1fr;
        // place-items: center;
    }
    
    .outer > * {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
    }

    .outer .below {
        z-index: 1;
        display: flex;
        width: 100vw;

        justify-content: center;
        align-items: center;
    }

    .outer .top {
        z-index: 2;
      }

    #bannerimg {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;

        width: 1590px;
        height: 1060px;
        left: -112px;
        top: -255px;
    }
    
    #dancegroup {
        position: absolute;
        margin-top: -100px;

        font-style: italic;
        font-weight: 900;
        font-size: 150px;
        line-height: 180px;
        
        -webkit-text-stroke: 1.5px #FFF;
        -webkit-text-fill-color: transparent;
        transform: rotate(-3.94deg);
    }

`;