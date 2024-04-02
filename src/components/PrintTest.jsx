import React from 'react';
import { useLocation } from "react-router-dom";

export function PrintTest() {
  const location = useLocation();
  const { testName, questions } = location.state;

  return (
    <div className="page">
      <div className="container">
        <h1>{testName}</h1>
        {questions.map((question, index) => (
          <div key={index}>
            <h2>{question.conditionText}</h2>
            {question.typeAnswer === 'typeMany' ? (
              <div>
                <label>Варианты ответов:</label>
                <ul>
                  {question.answerOptions.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <input name={`question${index}`} type="checkbox" /> {option}
                    </li>
                  ))}
                </ul>
              </div>
            )  : (
              <div>
                <label>Введите ваш ответ:</label>
                <input name={`question${index}`} type="text" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
