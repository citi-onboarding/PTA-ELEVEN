import React from "react";
import { Children, Paragrafo, Parent, Titulo } from './styles';
import { Card } from "../../components/Card";
import Slider from "react-slick";

export const WhoWeAre: React.ElementType = () => {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

      };

  
      
    return(
        <>
            <>
                <Titulo> Quem Somos? </Titulo>
                <Paragrafo> 
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem.
                </Paragrafo>
            </>
            <>
                <Parent>
                    <Children>
                    <Slider {...settings}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </Slider>
                    </Children>
                </Parent>
            </>
        </>
        
    );
}