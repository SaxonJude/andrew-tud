import React from 'react';

import calculatorStyles from './styles/calculator.module.scss';
import Layout from '../components/Layout';

const Calculator = () => {
    return (
        <Layout tab="calculator">
            <div className={calculatorStyles.calcContainer}>
                <div className={calculatorStyles.calcForm}>
                    <h1>
                        Daily Calorie Needs Calculator
                    </h1>
                    <form>
                        <label htmlFor="age">Age <span>*</span></label>
                        <input type="text" name="age" id="age" placeholder="YEARS..."/>
                        <label htmlFor="sex">SEX <span>*</span></label>
                        <div className={calculatorStyles.doubleButton}>
                            <div className={calculatorStyles.halfButton}>MALE</div>
                            <div className={calculatorStyles.halfButton}>FEMALE</div>
                        </div>
                        <label htmlFor="height">HEIGHT <span>*</span></label>
                        <div className={calculatorStyles.doubleButton}>
                            <input type="text" name="height" id="height" placeholder="FEAT..."/>
                            <input type="text" name="height" id="height" placeholder="INCHES..."/>
                        </div>
                        <label htmlFor="weight">WEIGHT <span>*</span></label>
                        <div className={calculatorStyles.doubleButton}>
                            <div className={calculatorStyles.halfButton}>POUNDS</div>
                            <div className={calculatorStyles.halfButton}>KILOGRAMS</div>
                        </div>
                        <input type="text" className={calculatorStyles.kiloInput} name="weight" id="weight" placeholder="KILOGRAMS..."/>
                        <label htmlFor="goal">GOAL <span>*</span></label>
                        <div className={calculatorStyles.fullButton}>FAT LOSS</div>
                        <div className={calculatorStyles.fullButton}>MAINTENANCE</div>
                        <div className={calculatorStyles.fullButton}>MUSCLE GAINZ</div>
                        <label htmlFor="activity level">ACTIVITY LEVEL <span>*</span></label>
                        <div className={calculatorStyles.fullButton}>LIGHTLY ACTIVE <span> (MODERATE EXERCISE BUT SEDENTARY JOB)</span></div>
                        <div className={calculatorStyles.fullButton}>MODERATELY ACTIVE <span> (INENSE EXERCISE BUT SEDENTARY JOB)</span></div>
                        <div className={calculatorStyles.fullButton}>VERY ACTIVE <span> (MODERATE EXERCISE AND ACTIVE JOB)</span></div>
                        <div className={calculatorStyles.fullButton}>EXTRA ACTIVE <span> (INTENSE EXERCISE AND ACTIVE JOB)</span></div>
                        <p>CALCULATE</p>
                    </form>
                    <h2>TARGET DAILY CALORIC INTAKE: <span>3088</span> CALORIES</h2>
                </div>
            </div>
        </Layout>
    );
}

export default Calculator;