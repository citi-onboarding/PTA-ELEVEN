import React,{useState} from "react";
import { Children, Paragrafo, Parent, Titulo } from './styles';
import { Card } from "../../components/Card";
import Slider from "react-slick";
import ArrowRight from '../../assets/arrowRight.png'
import ArrowLeft from '../../assets/arrowLeft.png'
import api from '../../services/api-axios';

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
    // getIntegrantes()
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
            <div style={{}}>
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
    const [nomeIntegrante, setnomeIntegrantee] = useState<string>();
    const [instagramIntegrante, setinstagramIntegrante] = useState<string>();
    // const [card, setCard] = useState();
    
    //busca os integrantes no data
    async function getIntegrantes() {    
        
        try {
            const response = await api.get(`card/`);
            const { foto, nomeParticipante, instagramParticipante } = response.data;
    
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
                <Titulo> Quem Somos? </Titulo>
                <Paragrafo> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat dolor in tortor varius, in pulvinar elit volutpat.
                </Paragrafo>
            </>
            <>
                <Parent>
                    <Children>
                        <Slider {...settings}>
                            <Card foto="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            nomeParticipante="isabela" 
                            instagramParticipante="https://www.w3schools.com/css/css3_object-fit.asp"/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </Slider>
                    </Children>
                </Parent>
            </>
        </>
        
    );
}