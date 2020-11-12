import React, { useState } from "react"
import IconCard from '../components/IconCard';
import Steps from '../components/Steps';

import Layout from '../components/Layout';
import indexStyles from './styles/index.module.scss';
import imgOne from '../images/imgOne.jpg';

import '../utils/fontawesome';
import ButtonLink from '../components/Button';

const Home = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

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
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    }

  return (
    <div>
        <Layout>
            <div className={indexStyles.container}>
                <div className={indexStyles.landingBoxes}>
                    <div className={indexStyles.left}>
                        <section>
                            <h1>Hello<span>,</span> i'm <span>Andrew Tudders</span> </h1>
                            <h2>Personal Trainer & fitness coach </h2>
                            <a>Get In Touch</a>
                        </section>
                    </div>
                    <div className={indexStyles.right}>
                        <img src={imgOne} alt="Picture Of Andrew"/>
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
                />
            </div>
            <div className={indexStyles.consultationForm}>
                <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" type="text" onChange={handleChange} value={formState.name} placeholder="Name..."/>
                    <label htmlFor="email">Name *</label>
                    <input id="email" name="email" type="email" onChange={handleChange} value={formState.email} placeholder="Email..."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    </div>
  );
}

export default Home;