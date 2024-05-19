import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalCabinetTeacher.css';

export function PersonalCabinetTeacher() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleNext = () => {
    const route = '/createQuestion';
    navigate(route);
  };

  return ( 
    <div className='wrapper_class'>
      <header className='personalCabinet'>
        <div className='container_cab'>
          <p className='title_cab'>Личный кабинет преподавателя</p>
        </div>
      </header>
      <section>
      <div className='container_personal'>
        <p className='id_teahcer'>ФИО:</p>
        <div classNamr="list">
          <p className='subj_test'>Предметы, по которым можно составить тест:</p>
          <div>
            <input type="checkbox" id="subName"></input>
            <label htmlFor="subNAme">Информатика</label>
          </div>
          <div>
            <input type="checkbox" id="subName1"></input>
            <label htmlFor="subNAme1">Математика</label>
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className='container_persona2'>
        <p>Мои тесты:</p>
      </div>
      <div className='container_buttons'>
        <button type="submit" className='btnTest createTest' onClick={handleNext}>Создать тест</button>
        <button type="submit" className='btnTest dowloadTest'>Загрузить тест</button>
        <button type="submit" className='btnTest changeTest'>Изменить существующий тест</button>
      </div>
      </section>
    </div>
  );
}