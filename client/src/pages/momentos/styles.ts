import styled from 'styled-components'; 


export const MomentosContainer = styled.div`

// outerbox width: 948px
    
    .outerbox {
        width: vw;
        height: 448px;

        display: flex;
        
        margin-top: 50px;
        margin-bottom: 50px;

        justify-content: center;
        align-items: center;
    }

    .innerbox  {
        width: 948px;
        height: 600px;

        // margin-left: 15.3%;
        
        display: flex;
        flex-direction: column;

        gap: 32px;

        justify-content: center;
        // align-items: center;

        font-size: 55px;
    }

    .gridbox {
        // width: vw;
        // height: 600px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;

        justify-content: center;
        align-items: center;
        gap: 32px;
    }

    .gridbox img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .firstGrid {
        // width: 501px;
        // height: 350px;

        display: grid;
        grid-template-columns: 295px 174px;
        grid-template-rows: 123px 195px;

        gap: 32px;

        // background-color: #FFF;
    }

    .secondGrid {
        // width: 415px;
        // height: 350px;

        display: grid;
        grid-template-columns: 177px 206px;
        grid-template-rows: 178px 140px;

        gap: 32px;

        // background-color: #AAA;
    }

    #sectionTitle {
        color: #000000;
    }
    
    #picture1 {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    #picture2 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    #picture3 {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
  
`;