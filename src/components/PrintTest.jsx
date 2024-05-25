import React from 'react';
import { useLocation } from "react-router-dom";

export function PrintTest() {
    const location = useLocation();
    const { testName, questions } = location.state;

    return (
        <div className="page">
            <div className="container">
                <h1>{testName}</h1>
                {questions && questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div key={index}>
                            <h2>{question.condition}</h2>
                            {question.type === 'selectMany' ? (
                                <div>
                                    <label>Варианты ответов:</label>
                                    <ul>
                                        {question.answerOptions.split(',').map((option, optionIndex) => (
                                            <li key={optionIndex}>
                                                <input name={`question${index}`} type="checkbox" /> {option.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div>
                                    <label>Введите ваш ответ:</label>
                                    <input name={`question${index}`} type="text" />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Нет вопросов для отображения.</p>
                )}
            </div>
        </div>
    );
}