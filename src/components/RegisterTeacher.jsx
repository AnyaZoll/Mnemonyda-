import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterStudent.css'; 
import { useForm } from "react-hook-form";

class FormTeacher {
    constructor(secondName,name, middleName, email) {
        this.name = name;
        this.secondName = secondName;
        this.middleName = middleName;
        this.email = email;    
    }

}

const formReg = function () {
    alert("Регистрация прошла успешно!");
}
export function RegisterTeacher() {
   const {register, handleSubmit} = useForm();
   const navigate = useNavigate();
 
   const handleNext = () => {
    navigate('/Authorization-st');
  };
 
   
        return (
        <div className="registration-form-container">
          <div className="registration-form">
            <h2 className="registration-form-title">Регистрация преподавателя</h2>
            <form className="registration-form-form" onSubmit={handleSubmit(formReg)}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Имя
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Введите имя"
                  className="form-input"
                  {...register('name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Фамилия
                </label>
                <input
                  id="secondName"
                  type="text"
                  placeholder="Введите фамилию"
                  className="form-input"
                  {...register('secondName')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="middleName" className="form-label">
                  Отчество
                </label>
                <input
                  id="middleName"
                  type="text"
                  placeholder="Введите отчество"
                  className="form-input"
                  {...register('middleName')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Почта
                </label>
                <input
                  id="phone"
                  type="email"
                  placeholder="Введите почту"
                  className="form-input"
                  {...register('phone')}
                />
                </div>
                <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Пароль
                </label>
                <input
                  id="phone"
                  type="password"
                  placeholder="Введите пароль"
                  className="form-input"
                  {...register('phone')}
                />
                </div>
                <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Введите пароль повторно
                </label>
                <input
                  id="phone"
                  type="password"
                  placeholder="Введите пароль повторно"
                  className="form-input"
                  {...register('phone')}
                />
                </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-button">
                  Зарегистрироваться
                </button>
              </div>
              <div className="form-group">
                  <button
                  onClick={handleNext}
                  className="form-button">
                  Уже существует аккаунт
                  </button>
                </div>
            </form>
          </div>
        </div>
      );

    
        
 
   
    
}
