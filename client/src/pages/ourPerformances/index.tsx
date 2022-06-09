import React from "react";
import { Arrows, BackgroundImage, ContainerComponent, ContainerText, L1, L2} from './styles';
import { PerformancesArrow, PerformancesBackground } from "../../assets";


export const OurPerformances: React.ElementType = () => {
    return(
        <>
            <ContainerComponent>
                <BackgroundImage><img src={PerformancesBackground}/></BackgroundImage>
                <ContainerText>
                    <a  type="hover" href='https://www.youtube.com/c/ElevenDanceGroup/videos' target='_blank'>
                        <L1>
                            Veja nossas
                            <Arrows>
                                <img src={PerformancesArrow}/>
                                <img src={PerformancesArrow}/>    
                            </Arrows>
                        </L1>
                        <L2>performances</L2>
                    </a>
                </ContainerText>
            </ContainerComponent>
        </>
    );
}
