import background from './Home/Background.jpg'
import React, {useState} from 'react'
import paragraphs from './Home/paragraphs.json'
import './App.css'

import idCard from './Home/id-card.png';
import Code from './Home/code.png';
import Blueprint from './Home/blueprint.png';
import Email from './Home/email.png'

import Title from './Home/Title.js'
import Card from './Home/Card'

import Skill from './Home/Skill.js'
import skills from './Home/Skill/skills.json'

import python from './Home/Skill/python.png'
import c from './Home/Skill/C++.svg'
import cs from './Home/Skill/CS.png'
import java from './Home/Skill/java.png'
import HTML from './Home/Skill/html.png'
import CSS from './Home/Skill/css.png'
import nodeJS from './Home/Skill/nodejs.png'
import react from './Home/Skill/react.png'
import SQL from './Home/Skill/sql.png'

function App() {

  /*
  fetch ('./Home/paragraphs.json').then(
    (res) => {
      console.log(JSON.stringify(res))
      return res.json()
    }
  ).then(
    (res) => {
      setTexts(res)
    }
  ).catch(
    (err) => {
      console.log(err)
    }
  )*/

  return (
    <div className="App">
      <div className="intro">
        <div className="hero"> 
          <div className="hero-bg">
          </div>
          <div className='hero-text'>
            <Title/>
          </div>
        </div>
        <div className="transition">
        </div>
      </div>
      <div className="cards-holder">
        <Card title="About me" path={idCard} hyper="#about"/>
        <Card title={"Skills & Experiences"} path={Code}  hyper="#skills"/>
        <Card title="Projects" path={Blueprint}/>
        <Card title="Contacts" path={Email}/>
      </div>
      
      <div className="about-me" id="about">
        <div className="left">
          <h1>About me</h1>
          <div className="img">
            <div>
            </div>
          </div>
          <h2>
            Supratouch Suwatno
          </h2>
          <h3>
            02 / Jan / 2004
          </h3>
        </div>
        <div className="right">
          <div>
            <p>
              {paragraphs.essay}
            </p>
            <p>
              {paragraphs.essay2}
            </p>
            <p>
              {paragraphs.essay3}
            </p>
          </div>
        </div>
      </div>

      <h1 className="Skills" id="skills">
        Skills
      </h1>

        <section className="skill-list">
          <Skill obj={skills["Python"]} path={python} size="80%"/>
          <Skill obj={skills["C++"]} path={c} size="72%"></Skill>
          <Skill obj={skills["C#"]} path={cs} size="72%"></Skill>
          <Skill obj={skills["Java"]} path={java} size="80%"></Skill>
          <Skill obj={skills["HTML"]} path={HTML} size="80%"></Skill>
          <Skill obj={skills["CSS"]} path={CSS} size="57.5%"></Skill>
          <Skill obj={skills["NodeJS"]} path={nodeJS} size="75%"></Skill>
          <Skill obj={skills["React"]} path={react} size="65%"></Skill>
          <Skill obj={skills["SQL"]} path={SQL} size="57.5%"></Skill>
        </section>
    </div>
  )
}

export default App;
