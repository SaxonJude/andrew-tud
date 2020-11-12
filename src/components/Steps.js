import React from 'react';

import stepsStyles from './styles/steps.module.scss';
import imgTwo from '../images/imgTwo.jpeg';
import imgThree from '../images/imgThree.jpeg';
import map from '../images/map.svg';

import '../utils/fontawesome';
import ButtonLink from '../components/Button';

const imgFilter = img => {
    if(img === 'imgTwo') {
        return imgTwo;
    } else if(img === 'imgThree') {
        return imgThree;
    } else {
        return map;
    };
};

const Steps = props => {
    return (
        <div className={`${stepsStyles.container} ${props.row === 'row-reverse' ? stepsStyles.flexboxRowReverse : stepsStyles.flexboxRow}`}>
            <div className={stepsStyles.stepLeft}>
                <img src={imgFilter(props.img)} alt="Pic Of Andrew"/>
            </div>
            <div className={stepsStyles.stepRight}>
                <div className={stepsStyles.rightBox}>
                    <section>
                        <h5>{props.num}</h5>
                        <h4>{props.miniTitle}</h4>
                    </section>
                    <h3>{props.title}</h3>
                    <div>
                        <p>{props.content1}</p>
                        <p>​{props.content2}</p> 
                        <p>{props.content3}</p>
                    </div>
                    <button className={stepsStyles.smallButton}>{props.button} <ButtonLink icon={'arrow-right'} /></button>
                </div>
            </div>
        </div>
    );
};

export default Steps;