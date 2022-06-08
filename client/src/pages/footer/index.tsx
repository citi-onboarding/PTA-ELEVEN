import React from "react";
import { ContainerFooter, FooterImage, FooterSectionLeft, FooterSectionRight, ContainerText } from './styles';
import { FooterBackground, LogoCitiBW, FooterEleven, FooterInstagram, FooterTiktok, FooterYoutube } from '../../assets';

export const Footer: React.FC = () => {
    return(
        <ContainerFooter>
            <FooterImage>
                <img src={FooterBackground}/>
            </FooterImage>
            <ContainerText>
                <FooterSectionLeft>
                    <img src={FooterEleven}/>
                    <p>K-Pop Dance Group <br/> from Recife, Brazil</p>
                </FooterSectionLeft>
                <FooterSectionRight>
                    <a href=""><img src={FooterInstagram}/></a>
                    <a href=""><img src={FooterTiktok}/></a>
                    <a href=""><img src={FooterYoutube}/></a> 
                    <br/>
                    <p>
                        Made with
                        {' '}
                        <strong>&lt; &#x0002F; &gt;</strong>
                        {' '}
                        and
                        {' '}
                        <strong>&hearts;</strong>
                        {' '}
                        by <img src={LogoCitiBW}/>
                    </p>
                </FooterSectionRight>
            </ContainerText>
        </ContainerFooter>
    );
}
