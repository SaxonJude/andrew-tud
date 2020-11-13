import React from 'react';
import { Link } from 'gatsby';

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
        <div className={`${stepsStyles.container} ${props.row === 'row-reverse' ? stepsStyles.flexboxRowReverse : stepsStyles.flexboxRow} ${props.step1 ? stepsStyles.step1 : ''}`}>
            <div className={stepsStyles.stepLeft}>
                {props.gym === 'puregym' ? <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.952376728817!2d-1.8863230840347833!3d50.72082267572685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1b8b882dbd3%3A0x763e0d9562f1a8fa!2sPureGym%20Bournemouth!5e0!3m2!1sen!2suk!4v1605210653145!5m2!1sen!2suk" width="100%" height="700" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> : <img src={imgFilter(props.img)} alt="Pic Of Andrew"/>}
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
                    {props.gym === 'puregym' ? <a href="https://g.page/puregymbournemouth?share" target="_blank" className={stepsStyles.smallButton}>{props.button}  <ButtonLink icon={'arrow-right'} /></a> : <Link to={props.url}  className={stepsStyles.smallButton}>{props.button} <ButtonLink icon={'arrow-right'} /></Link>}
                </div>
            </div>
        </div>
    );
};

export default Steps;