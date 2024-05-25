import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { RegisterStudent } from './components/RegisterStudent';
import {RegisterTeacher} from './components/RegisterTeacher';
import { CreateTest } from './components/CreateTest';
import { Title } from './components/Title';
import { CreateTestButton } from './components/CreateTestButton';
import{Authorization} from './components/Authorization';
import { PersonalCabinetTeacher } from './components/PersonalCabinetTeacher';
import {CreateTests} from './components/questionsComponents/CreateTests';
import {PrintTests} from './components/printTest/PrintTests';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/register-teacher" element={<RegisterTeacher />} />
        <Route path="/createButton-test" element={<CreateTestButton />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="" element={<HomePage />} />
        <Route path="/PrintTest" element={<PrintTests/>} />
        <Route path="/Authorization-st" element={<Authorization/>} />
        <Route path="/personalCabinetTeacher" element={<PersonalCabinetTeacher/>} />
        <Route path="/createQuestion" element={<CreateTests/>}/> 
        <Route path='/PrintTests' element={<PrintTests/>}/> 
      </Routes>
    </BrowserRouter>
  );
}