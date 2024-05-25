import React from 'react';
import { useLocation } from "react-router-dom";

export function PrintTests() {
  const location = useLocation();
  const { testName, questions } = location.state;

  return (
    <div className="page">
      <div className="container_printTest">
        <h1>{testName}</h1>
        <div className='question'>
          {questions.condition}
        </div>
      </div>
    </div>
  );
}
