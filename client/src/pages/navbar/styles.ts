import styled from 'styled-components'; 

export const NavbarContainer = styled.div`

  width: 100vw;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    opacity: 1.0;
  }
  
  li {
    float: right;
    line-height: 24px;
  }
  
  li:first-child {
    border-left: none;
    // margin-top: 12px;
    margin-left: 120px;

    float: left;
    line-height: 48px;

    font-size: 40px;
  }

  li:nth-child(2) a {
    margin-right: 120px;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    margin-top: 44px; 
    margin-right: 24px;
    text-decoration: none;
  }

`;