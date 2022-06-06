import React from "react";
import {CardContainer, CardInstagram, CardImage, CardNome, ContainerText} from './style'
import { IconInstagram } from "../../assets";

type CardProps = {
    foto: string
    nomeParticipante: string
    instagramParticipante: string
}
// src nao funcionada em CardImage <img src={LogoCITi}/>
export const Card: React.ElementType = ({foto,nomeParticipante,instagramParticipante}:CardProps) => {
    return(
        <CardContainer>
            <CardImage><img src={foto}/></CardImage>
            <ContainerText>
                <CardNome>{nomeParticipante}</CardNome>
                <CardInstagram>
                    <a href={instagramParticipante} target="_blank">
                        <img src={IconInstagram}/>
                    </a>
                </CardInstagram>
            </ContainerText>
        </CardContainer>
    );
}