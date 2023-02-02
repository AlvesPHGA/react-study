import React from 'react';
import styled from 'styled-components';
import Radio from './exercise/Radio';

const FormStyled = styled.form`
   margin: 20px auto 0;
   width: fit-content;
`;

const questions = [
   {
      question: 'Qual método é utilizado para criar componentes?',
      options: [
         'React.makeComponent()',
         'React.createComponent()',
         'React.createElement()',
      ],
      answer: 'React.createElement()',
      id: 'p1',
   },
   {
      question: 'Como importamos um componente externo?',
      options: [
         'import Component from "./Component"',
         'require("./Component")',
         'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: 'p2',
   },
   {
      question: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      answer: 'useFetch()',
      id: 'p3',
   },
   {
      question: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      answer: 'use',
      id: 'p4',
   },
];

function App() {
   const [answers, setAnswers] = React.useState({
      p1: '',
      p2: '',
      p3: '',
      p4: '',
   });

   const [slide, setSlide] = React.useState(0);
   const [hit, setHit] = React.useState(null);

   function questionsHits() {
      console.log('acertos');

      const hits = questions.filter(({ id, answer }) => answers[id] === answer);

      console.log(hits.length + ' / ' + questions.length);

      setHit(`Acertos: ${hits.length} / ${questions.length}`);
   }

   function handleChange({ target }) {
      setAnswers({ ...answers, [target.id]: target.value });
   }

   function handleClick({ target }) {
      if (slide < questions.length - 1) {
         setSlide(slide + 1);
      } else {
         questionsHits();
         target.style.pointerEvents = 'none';
         target.style.opacity = 0.6;
      }
   }

   return (
      <>
         <FormStyled onSubmit={(ev) => ev.preventDefault()}>
            {questions.map((ques, index) => (
               <Radio
                  active={slide === index}
                  onChange={handleChange}
                  value={answers[ques.id]}
                  key={ques.id}
                  {...ques}
               />
            ))}

            {hit && <p>{hit}</p>}

            <button onClick={handleClick}>Proximo</button>
         </FormStyled>
      </>
   );
}

export default App;
