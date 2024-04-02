import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterStudent.css'; 




export function RegisterStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можете добавить логику обработки отправки данных
        console.log("Submitted:", { firstName, lastName, email, grade });
        
        // Устанавливаем состояние submitted в true после успешной отправки данных
        setSubmitted(true);
    };

    // Функция для отображения сообщения об успешной регистрации
    const successMessage = () => { 
        return ( 
            <div 
                className="success"
                style={{ 
                    display: submitted ? "" : "none", 
                }} 
            > 
                <h1>Пользователь {firstName} {lastName} успешно зарегистрирован!!</h1> 
            </div> 
        ); 
    }; 

    return (
        <div className="register-container">
            <h2>Регистрация студента</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Имя:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Фамилия:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="grade">Класс:</label>
                    <input
                        type="text"
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </div>
                <button className="btn" type="submit">Зарегистрироваться</button>
            </form>
            
            {/* Отображение сообщения об успешной регистрации */}
            {successMessage()}
        </div>
    );
}
