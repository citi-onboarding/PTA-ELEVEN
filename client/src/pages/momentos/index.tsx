import React from "react";
import { MomentosContainer } from './styles';
import { LogoCITi } from '../../assets';
import { Momentos1 } from '../../assets';
import { Momentos2 } from '../../assets';
import { Momentos3 } from '../../assets';
import { Momentos4 } from '../../assets';
import { Momentos5 } from '../../assets';
import { Momentos6 } from '../../assets';

export const Momentos: React.FC = () => {
    return (
        <MomentosContainer id='momentos'>
            <div className="outerbox">
                <div className="innerbox">
                    <p id="sectionTitle">Momentos</p>
                    <div className="gridbox">
                        <div className="firstGrid">
                            <img id="picture1" src={Momentos1} alt=""/>
                            <img id="picture2" src={Momentos2} alt=""/>
                            <img id="picture3" src={Momentos3} alt=""/>
                        </div>
                        <div className="secondGrid">
                            <img id="picture1" src={Momentos4} alt=""/>
                            <img id="picture2" src={Momentos5} alt=""/>
                            <img id="picture3" src={Momentos6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </MomentosContainer>
    );
}