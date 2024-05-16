import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

export function HomePage() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleNext = () => {
    const route = userType === 'student' ? '/register-student' : '/register-teacher';
    navigate(route);
  };

  return ( 
    <div className="container_homepage">
      <div className="form">
        <p className="description">Это платформа для создания тестов</p>
        <p className="">Выберите:</p>
        <div className="options">
          <label className="option">
            <input type="radio" value='student' checked={userType === 'student'} onChange={handleUserTypeChange} />
            Я ученик
          </label>
          <label className="option">
            <input type="radio" value='teacher' checked={userType === 'teacher'} onChange={handleUserTypeChange} />
            Я учитель
          </label>
        </div>
        <div className='btn_wrapper'></div>
        <button className="btn" onClick={handleNext} disabled={userType === ''}>Продолжить</button>
      </div>
    </div>
  );
}