import React from "react";
import { BannerContainer } from './styles';
import { Navbar } from '../navbar/index';
import { BannerBackground } from '../../assets'

export const Banner: React.FC = () => {
    return (
        <BannerContainer id='navbar'>
            <div className="outer">
                <div className="top">
                    <Navbar/>
                </div>
                <div className="below">
                    <p id="dancegroup">Dance Group</p>
                    <img id="bannerimg" src={BannerBackground} alt="background"></img>
                </div>
            </div>
        </BannerContainer>
    );
}