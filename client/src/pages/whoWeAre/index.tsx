import React,{useState} from "react";
import { Children, Paragrafo, Parent, Titulo } from './styles';
import { Card } from "../../components/Card";
import Slider from "react-slick";
import ArrowRight from '../../assets/arrowRight.png'
import ArrowLeft from '../../assets/arrowLeft.png'
import api from '../../services/api-axios';
import { Akito, Aline, Beca, Bruno, Cilas, Derek, Diogo, Gustavo, Isah, Julia, Lari, Lice, Lucky, Manu, Mari, Sofia } from "../../assets";

//setas do slide
function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <img src={ArrowRight} onClick={onClick} className={className} style={{ ...style, display: "abosulte", width: "auto", height: "auto" }}/>
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <img src={ArrowLeft} onClick={onClick} className={className} style={{ ...style, display: "abosulte", width: "auto", height: "auto" }}/>
    );
  }

export const WhoWeAre: React.ElementType = () => {
    getIntegrantes()

    //estilização slide
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,

        appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <div style={{
                zIndex: "15"
            }}>
              <ul style={{
                            margin: "0px",
                            display: "flex",
                            gap: "15px",
                            marginLeft: "5px",
                        }}> {dots} </ul>
            </div>
          ),
          customPaging: () => (
            <div
            style={{
                width: "40px",
                height: "3px",
                border: "1px #000000 solid",
                backgroundColor: "#000000",
              }}
            ></div>
          )
      };

    const [fotoIntegrante, setfotoIntegrante] = useState<string>();
    const [nomeIntegrante, setnomeIntegrantee] = useState<Array<string>>();
    const [instagramIntegrante, setinstagramIntegrante] = useState<string>();
    // const [cards, setCard] = useState();
    
    //busca os integrantes no data
    async function getIntegrantes() {    
        
        try {
            const response = await api.get(`card/`);
            const { foto, nomeParticipante, instagramParticipante } = response.data;
            console.log("🚀 ~ file: index.tsx ~ line 72 ~ getIntegrantes ~ response.data", response.data)

            setfotoIntegrante(foto)
            setnomeIntegrantee(nomeParticipante)
            setinstagramIntegrante(instagramParticipante)

        } catch(err){
            console.log(err)
            console.log('Integrantes nao encontrados');
        }
    }    

      
    return(
        <>
            <>
                <Titulo id='quemsomos'> Quem Somos? </Titulo>
                <Paragrafo> 
                Somos um grupo de dança de Recife, Brasil. Nós fazemos covers de coreografias de K-Pop desde 2018. Amamos a ideia de espalhar a cultura K-Pop para o mundo através da dança. Esperamos que vocês se divirtam conosco!
                </Paragrafo>
            </>
            <>
                <Parent>
                    <Children>
                        <Slider {...settings}>
                            <Card foto={Akito}
                            nomeParticipante="Akito"
                            instagramParticipante="https://www.instagram.com/justakito"/>

                            {/* <Card foto={Aline}
                            nomeParticipante="Aline" 
                            instagramParticipante="https://www.instagram.com/lhinemtg"/> */}
                            
                            <Card foto={Beca}
                            nomeParticipante="beca" 
                            instagramParticipante="https://www.instagram.com/rebsoos"/>

                            {/* <Card foto={Bruno}
                            nomeParticipante="Bruno" 
                            instagramParticipante="https://www.instagram.com/el_brunomunoz/"/> */}
                            
                            <Card foto={Cilas}
                            nomeParticipante="Cilas" 
                            instagramParticipante="https://www.instagram.com/cilayanglee"/>

                            {/* <Card foto={Derek}
                            nomeParticipante="Derek" 
                            instagramParticipante="https://www.instagram.com/derekai"/> */}
                            
                            {/* <Card foto={Diogo}
                            nomeParticipante="Diogo" 
                            instagramParticipante="https://www.instagram.com/diogo.fsm"/> */}

                            <Card foto={Gustavo}
                            nomeParticipante="Gustavo" 
                            instagramParticipante="https://www.instagram.com/gus_.rodrigues"/>

                            <Card foto={Isah}
                            nomeParticipante="Isah" 
                            instagramParticipante="https://www.instagram.com/its_adoraly"/>

                            <Card foto={Julia}
                            nomeParticipante="Julia" 
                            instagramParticipante="https://www.instagram.com/_y.plutao.y_/"/>
                            
                            <Card foto={Lari}
                            nomeParticipante="Lari" 
                            instagramParticipante="https://www.instagram.com/lari_bom/"/>

                            <Card foto={Lice}
                            nomeParticipante="Lice" 
                            instagramParticipante="https://www.instagram.com/licecoimbra"/>

                            <Card foto={Lucky}
                            nomeParticipante="Lucky" 
                            instagramParticipante="https://www.instagram.com/luckyopta"/>

                            <Card foto={Manu}
                            nomeParticipante="Manu" 
                            instagramParticipante="https://www.instagram.com/manummuniz/"/>
                            
                            <Card foto={Mari}
                            nomeParticipante="Mari" 
                            instagramParticipante="https://www.instagram.com/mari.boomi/"/>

                            {/* <Card foto={Sofia}
                            nomeParticipante="Sofia" 
                            instagramParticipante="https://www.instagram.com/sofia.mdl/"/> */}
                        </Slider>
                    </Children>
                </Parent>
            </>
        </>
        
    );
}