import React from "react";
import {CardContainer, CardDescription, CardImage, CardNome, ContainerText } from './style'

type CardProps = {
    foto: string
    nomeParticipante: string
    descricaoParticipante: string
}

export const Card: React.ElementType = () => {
    return(
        <CardContainer>
            <CardImage/>
            <ContainerText>
                <CardNome>Nome do Participante</CardNome>
                <CardDescription>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem.</CardDescription>
            </ContainerText>
        </CardContainer>
    );
}