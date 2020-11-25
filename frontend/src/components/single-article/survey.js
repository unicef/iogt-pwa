import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

const Survey = (props) => {
    let surveyObject= {
      question: 'What else do you want to know about Coronavirus?',
      options: [
        'When it arrives in my country',
        'What to do if I get the virus',
        'What my government is doing to address Coronavirus',
        'When to wear a mask'
      ]
    }
  return (
    <form class={style['survey-section']}>
        <p  class={style['survey-question']}>{surveyObject.question}</p>

        {surveyObject.options.map((option, index) =>
          <p  class={style['survey-option']}>
            <input type="checkbox" id={index} name={`option${index}`} value="" />
          <label for={`option${index}`}>{option}</label>
          </p>

        )}
        <input type="submit" />
    </form>
  )
}

export default Survey
