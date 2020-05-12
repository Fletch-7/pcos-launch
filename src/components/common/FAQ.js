import React from 'react'
import { Link } from 'react-router-dom'

import G1 from '../assets/gym-sq.JPG'
import G2 from '../assets/gym-7.JPG'
import G3 from '../assets/gym-6.JPG'

class FAQ extends React.Component{
  render(){
    return(
      <section className="section" id="faq">
      <h1 className="title" id="faq-title">What services do I offer?</h1>

      <div className="service">
        <div className="service-container">
          <h2 className="title" id="title-main">The PCOS Party E-book</h2>
          <br/>
            <p>A 200 page ebook that I developed over several years from my education, experience and knowledge. It's all of my advice and information that I would have loved to have available to me 10 years ago. The great thing for you is that you don't have to take years of trial and error, and spend money on qualifications to figure it out.</p>
            <br/>
            <p>I've done all the work for you and it's available in one giant Ebook including:</p>
            <br/>
            <ul>
              <li>A 7 DAY reset kick start weight loss nutrition plan, with calculated calories, macros and full recipes/instructions </li>
              <li>My PCOS handbook outlines exactly what our condition is, why we get it and how we can manage it </li>
              <li>My own Journey and ALL my hints, tips and tricks. It literally tells you exactly how I managed to lose my weight, and how you can too. </li>
              <li>Over 100 PCOS friendly RECIPES of such delicious foods (made, tried and tested by a professional chef and myself)</li>
              <li>PCOS friendly shopping lists</li>
              <li>Several juice cleanses</li>
              <li>Over 20 PCOS friendly workouts</li>
              <li>An A-Z of my top foods with their benefits for PCOS</li>
              <li>A consultation call with me to answer any of your questions and to make sure you stay on track</li>
          </ul>
          <br/>
            <p>It's literally my bible of everything I've learnt over the past 15 years and I can assure you, it will work for you too. </p>
        </div>
      </div>

      <br/>

      <div className="service">
        <div className="service-container">
          <h2 className="title" id="title-main">PCOS 1-1 Coaching</h2>
          <br/>
            <p>We will work closely together to understand your goals, establish lifestyle changes and Implement new healthy habits. I’ll create a personalised program for you to boost overall energy, transform your body and build a positive mindset.</p>
            <br/>
            <p>I’ll help you turn PCOS into a sustainable lifestyle through my tips and tricks, becoming your motivator, coach but most of all -friend.</p>
              <br/>
            <p className="service-sub">As your coach, I provide:</p>
            <br/>
            <ul>
              <li>Key Habits - You’ll have complete clarity on what you should be working on, as we master a new habit together every two weeks</li>
              <li>Daily Lesson - You’ll feel guided through daily WhatsApps/voicenotes containing interesting lessons and a tip of the day!</li>
              <li>Accountability - Every day you’ll be asked to record whether or not you practiced the habit. Plus we will chat about your progress each week via text, a phone call, or email</li>
          </ul>
          <br/>
          <p className="service-sub">You’ll learn:</p>
            <br/>
            <ul>
              <li>Nutrition - You’ll learn a flexible, lifestyle “no-diet” approach to food through Meal planning, Portion control and Mindful eating</li>
              <li>Healthy Lifestyle - You’ll learn how to deal with out-of-control stress, negative thought patterns, and bad sleeping habits so you feel confident and relaxed in your body</li>
              <li>Exercise -  You'll learn the best exercise for PCOS and how to manage your hormones </li>
          </ul>
          <br/>
            <p>Let me be your coach so we can work together closely and achieve your goals. You deserve to feel like a Queen and I won’t give up until you do! </p>
        </div>
      </div>

      <br/>

      <div className="service">
        <div className="service-container">
          <h2 className="title" id="title-main">Personal Training</h2>
          <br/>
            <p>As a qualified level 2 and 3 personal trainer, 1 to 1 private sessions are available. Please get in contact for more information and pricing.</p>
        </div>
      </div>

      <br/>

      <div className="service">
      <Link to="/contact" className="button" alt="link"><span>CLICK NOW! For your FREE consultation call</span></Link>
      </div>

      <br/>

      <div className="contact-pics">
          <div className="pic-container">
            <img src={G1} id="profile" alt="pic" className="is-hidden-mobile"/>
            <img src={G2} id="profile" alt="pic"/>
            <img src={G3} id="profile" alt="pic" className="is-hidden-mobile"/>
          </div>
        </div>




      </section>
    )
  }
}

export default FAQ