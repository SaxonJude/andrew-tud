import React, { useState } from "react"
import IconCard from '../components/IconCard';
import Steps from '../components/Steps';

import Layout from '../components/Layout';
import indexStyles from './styles/index.module.scss';
import imgOne from '../images/imgOne.jpg';
import imgTwo from '../images/imgTwo.jpeg';
import imgThree from '../images/imgThree.jpeg';

import '../utils/fontawesome';
import ButtonLink from '../components/Button';

import { Carousel } from 'react-bootstrap';

const Home = props => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [ success, setSuccess ] = useState(false);
    const [ failure, setFailure ] = useState(false);

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
          })
            .then(() => setSuccess(true))
            .catch(error => {
                alert('Something went wrong submitting the form :(')
                console.log(error);
                setFailure(true);
            });
    
          e.preventDefault();
    }

  return (
    <div>
        <Layout tab="home">
            <div className={indexStyles.container}>
                <div className={indexStyles.landingBoxes}>
                    <div className={indexStyles.left}>
                        <section>
                            <h1>Hello<span>,</span> i'm <span>Andrew Tudders</span> </h1>
                            <h2>Personal Trainer & fitness coach </h2>
                            <a onClick={() => {console.log(props.location.pathname)}} className={indexStyles.touchButton}>Get In Touch <ButtonLink icon={'angle-down'} /></a>
                        </section>
                    </div>
                    <div className={indexStyles.right}>
                        <img src={imgOne} alt="Andrew"/>
                    </div>
                </div>
                <h3>Andrew</h3>
            </div>
            <div className={indexStyles.betterVersion}>
                <div className={indexStyles.betterTitle}>
                    <h2>Be The Best Version Of Yourself</h2>
                    <h3>Reaching your true potential is not just about a workout - a healthy lifestyle all round is what will get you to achieve your fitness goals and stick to them.</h3>
                </div>
                <div className={indexStyles.cards}>
                    <IconCard title="Hard Work" icon="dumbbell" />
                    <IconCard title="Healthy Nutrition Plan" icon="balance-scale-left" />
                    <IconCard title="Quality Sleep" icon="battery-full" />
                    <IconCard title="Results" icon="heartbeat" />
                </div>
                <button>Let's Talk <ButtonLink icon={'arrow-right'} /></button>
            </div>
            <div className={indexStyles.stepsContainer}>
                <Steps 
                    img="imgTwo" 
                    row="row-reverse" 
                    num="01"
                    miniTitle="Who Am I?"
                    title="Andrew Tudders"
                    content1="One of the leading providers of fitness, bespoke training programmes, nutritional programmes and lifestyle coaching in the South area."
                    content2="​Since becoming a Personal Trainer over 8 years ago my goal is to educate and change the lives of people wanting to lead a healthier, fitter lifestyle."
                    content3="As the name suggests my training is Bespoke, Effective and Next level."
                    button="About Me"
                    url="/about"
                />
                <Steps 
                    img="map"  
                    num="02"
                    miniTitle="Where Abouts?"
                    title="Bournemouth"
                    content1="I’m currently training and teaching at the Puregym
                    in Bournemouth - Triangle."
                    content2="​All lessons will be held here as normal when 
                    restrictions are lifted."
                    content3=""
                    button="Directions"
                    gym="puregym"
                />
                <Steps 
                    img="imgThree" 
                    row="row-reverse" 
                    num="03"
                    miniTitle="Know Your Limits"
                    title="Calculate Your Daily Calorie Needs"
                    content1="It’s vital to get to know your body and understand your limits. We can do this by tracking what goes in and how we’re going to use it."
                    content2="​Try out this quick 1 minute calculator to calculate yourdaily caloric needs."
                    content3=""
                    button="Take Me There"
                    url="/calculator"
                />
            </div>
            <div className={indexStyles.consultationForm}>
                <div className={indexStyles.formContainer}>
                    <section>
                        <h5>04</h5>
                        <h4>Let's Talk!</h4>
                    </section>
                    <h3>GET IN TOUCH FOR A <span>FREE</span> 40 MINUTE CONSULTATION.</h3>

                    <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <label htmlFor="name">Name <span>*</span></label>
                        <input id="name" name="name" type="text" onChange={handleChange} value={formState.name} />
                        <label htmlFor="email">Email <span>*</span></label>
                        <input id="email" name="email" type="email" onChange={handleChange} value={formState.email} />
                        <label htmlFor="message">Message <span>*</span></label>
                        <input id="message" name="message" type="text" onChange={handleChange} value={formState.message} />
                        <button className={success && !failure ? indexStyles.success : ''} type="submit">{success && !failure ? 'Submitted!' : 'Submit'}</button>
                    </form>
                </div>
            </div>
            <div className={indexStyles.testimonial}>
                <Carousel>
                    <Carousel.Item>
                        <div className={indexStyles.carouselItem}>
                            <ButtonLink icon={'quote-left'} />
                            <p>The session was made really fun by Andrew teaching me new 
                                exercises which i would never have had the confidence 
                                to do on my own. After only a few sessions my fitness 
                                level had improved. I would definitely recommend 
                                him to a friend!</p>
                            <h4>MOLLY NIPPER, Bournemouth</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className={indexStyles.carouselItem}>
                            <ButtonLink icon={'quote-left'} />
                            <p>Andrew is very professional and helpful. I felt extremely comfortable and he made me feel at ease. Great trainer with a lot of great resources.</p>
                            <h4>Alistair Standard, Bournemouth</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className={indexStyles.carouselItem}>
                            <ButtonLink icon={'quote-left'} />
                            <p>I done personal training with Andrew for a couple of months. I have to say I found him great to motivate and help me achieve some of the results I wanted. I really enjoyed my workouts and felt great while I’ve as doing it. Unfortunately I had to leave due to some personal circumstances. But I would highly recommend Andrew as a personal trainer. Thanks for all ur help Andrew.</p>
                            <h4>Craig Hooper, Bournemouth</h4>
                        </div>
                    </Carousel.Item>
                    </Carousel>
            </div>
        </Layout>
    </div>
  );
}

export default Home;