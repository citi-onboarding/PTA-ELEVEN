import React from "react";
import { ContainerFooter, FooterImage, FooterSectionLeft, FotterRedes, FooterSectionRight, ContainerText } from './styles';
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
                    <FotterRedes>
                        <a href="https://www.instagram.com/elevendancegroup/" target='_blank'><img src={FooterInstagram}/></a>
                        <a href="https://www.tiktok.com/@elevendancegroup" target='_blank'><img src={FooterTiktok}/></a>
                        <a href="https://www.youtube.com/c/ElevenDanceGroup" target='_blank'><img src={FooterYoutube}/></a>
                    </FotterRedes> 
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
