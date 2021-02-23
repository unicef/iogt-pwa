import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

type SurveyProps = {
  //survey: Survey
}

interface Survey {
  question: string
  options: string[]
}

const Survey: FunctionalComponent<SurveyProps> = (props: SurveyProps) => {

  //Either bring this in from the backend at this point, or pass it in as props.
  let survey = {
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
      <p class={style['survey-question']}>{survey.question}</p>

      {survey.options.map((option, index) =>
        <p class={style['survey-option']}>
          <input type="checkbox" id={String(index)} name={`option${index}`} value="" />
          <label for={`option${index}`}>{option}</label>
        </p>

      )}
      <input type="submit" />
    </form>
  );
};

export default Survey;
