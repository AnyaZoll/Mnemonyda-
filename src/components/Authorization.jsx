import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterStudent.css'; 
import { useForm } from "react-hook-form";

export function Authorization(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const handleNext = () => {
      const route = '/personalCabinetTeacher';
      navigate(route);
    };
  
    return (
        <div className="registration-form-container">
          <div className="registration-form">
            <h2 className="registration-form-title">Вход</h2>
            <form action="#" method="post"  className="registration-form-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Фамилия
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Введите фамилию"
                  className="form-input"
                  {...register('name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Имя
                </label>
                <input
                  id="secondName"
                  type="text"
                  placeholder="Введите имя"
                  className="form-input"
                  {...register('secondName')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Пароль
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  className="form-input"
                  {...register('password')}
                />
                </div>
               
              <div className="form-group">
                <button 
                  onClick={handleNext}
                  type="submit"
                  className="form-button">
                  Войти в аккаунт
                </button>
              </div>
             
            </form>
          </div>
        </div>
      );
}