import React, { Component } from 'react';

import calculatorStyles from './styles/calculator.module.scss';
import Layout from '../components/Layout';

class Calculator extends Component {
    state = {
        sex: 0,
        weightType: 0,
        bodyWeight: 0,
        activityType: 0,
        bodyFat: 0,
        results: 0
    }

    submitRes = e => {
        const sex = this.state.sex;
        const bf = this.state.bodyFat;
        const activity = this.state.activityType;
        let weight = 0;
        if(sex === 1) {
            weight = this.state.bodyWeight * 1;
        } else if (sex === 2) {
            weight = this.state.bodyWeight * 0.9;
        }
        let weight2 = weight * 24;
        let weight3 = 0;
        if(sex === 1) {
            if(bf >= 10 && bf <= 14) {
                weight3 = weight2 * 1;
            } else if (bf >= 15 && bf <= 20 ) {
                weight3 = weight2 * 0.95;
            } else if (bf >= 21 && bf <= 28) {
                weight3 = weight2 * 0.9;
            } else if (bf > 28) {
                weight3 = weight2 * 0.85;
            }
        }
        if(sex === 2) {
            if(bf >= 14 && bf <= 18) {
                return weight2 * 1;
            } else if (bf >= 19 && bf <= 28 ) {
                weight3 = weight2 * 0.95;
            } else if (bf >= 29 && bf <= 38) {
                weight3 = weight2 * 0.9;
            } else if (bf > 38) {
                weight3 = weight2 * 0.85;
            }
        }
        let weight4 = 0;
        if(activity === 1) {
            weight4 = weight3 * 1.3;
        } else if (activity === 2) {
            weight4 = weight3 * 1.55;
        } else if (activity === 3) {
            weight4 = weight3 * 1.80;
        } else if (activity === 4) {
            weight4 = weight3 * 2;
        }
        this.setState({ results: Math.floor(weight4) })
    }

    render() {
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
                                <div 
                                className={`${calculatorStyles.halfButton} ${this.state.sex === 1 ? calculatorStyles.active : ''}`}
                                onClick={() => this.setState({ sex: 1 })}
                                >
                                    MALE
                                </div>
                                <div 
                                className={`${calculatorStyles.halfButton} ${this.state.sex === 2 ? calculatorStyles.active : ''}`}
                                onClick={() => this.setState({ sex: 2 })}
                                >
                                    FEMALE
                                </div>
                            </div>
                            <label htmlFor="height">HEIGHT <span>*</span></label>
                            <div className={calculatorStyles.doubleButton}>
                                <input type="text" name="height" id="height" placeholder="FEAT..."/>
                                <input type="text" name="height" id="height" placeholder="INCHES..."/>
                            </div>
                            <label htmlFor="weight">WEIGHT <span>*</span></label>
                            <div className={calculatorStyles.doubleButton}>
                                <div 
                                className={`${calculatorStyles.halfButton} ${this.state.weightType === 1 ? calculatorStyles.active : ''}`}
                                onClick={() => this.setState({ weightType: 1 })}
                                >
                                    LBS
                                </div>
                                <div 
                                className={`${calculatorStyles.halfButton} ${this.state.weightType === 2 ? calculatorStyles.active : ''}`}
                                onClick={() => this.setState({ weightType: 2 })}
                                >
                                    KG
                                </div>
                            </div>
                            <input 
                            type="number" 
                            className={calculatorStyles.kiloInput} 
                            name="weight" 
                            id="weight" 
                            placeholder={this.state.weightType === 1 ? 'POUNDS...' : 'KILOGRAMS...'}
                            onChange={e => {
                                const num = parseInt(e.target.value);
                                if(this.state.weightType === 1) {
                                    const res = num / 2.2;
                                    this.setState({ bodyWeight: res });
                                } else {
                                    this.setState({ bodyWeight: num });
                                }
                            }}
                            />
                            <label htmlFor="bf">BODY FAT % <span>*</span></label>
                            <input 
                            type="number" 
                            name="bf" 
                            id="bf" 
                            placeholder="ESTIMATED LEAN %..."
                            onChange={e => this.setState({ bodyFat: parseInt(e.target.value) })}
                            />
                            <label htmlFor="activity level">ACTIVITY LEVEL <span>*</span></label>
                            <div 
                            className={`${calculatorStyles.fullButton} ${this.state.activityType === 1 ? calculatorStyles.active : ''}`}
                            onClick={() => this.setState({ activityType: 1 })}
                            >
                                LIGHTLY ACTIVE <span> (MODERATE EXERCISE BUT SEDENTARY JOB)</span>
                            </div>
                            <div 
                            className={`${calculatorStyles.fullButton} ${this.state.activityType === 2 ? calculatorStyles.active : ''}`}
                            onClick={() => this.setState({ activityType: 2 })}
                            >
                                MODERATELY ACTIVE <span> (INTENSE EXERCISE BUT SEDENTARY JOB)</span>
                            </div>
                            <div 
                            className={`${calculatorStyles.fullButton} ${this.state.activityType === 3 ? calculatorStyles.active : ''}`}
                            onClick={() => this.setState({ activityType: 3 })}
                            >
                                VERY ACTIVE <span> (MODERATE EXERCISE AND ACTIVE JOB)</span>
                                </div>
                            <div 
                            className={`${calculatorStyles.fullButton} ${this.state.activityType === 4 ? calculatorStyles.active : ''}`}
                            onClick={() => this.setState({ activityType: 4 })}
                            >
                                EXTRA ACTIVE <span> (INTENSE EXERCISE AND ACTIVE JOB)</span>
                                </div>
                            <p onClick={() => this.submitRes()}>CALCULATE</p>
                        </form>
                        {this.state.results === 0 ? null : <h2>TARGET DAILY CALORIC INTAKE: <span>{this.state.results}</span> CALORIES</h2>}
                    </div>
                </div>
            </Layout>
        );
    };
}

export default Calculator;