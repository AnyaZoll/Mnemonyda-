import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { RegisterStudent } from './components/RegisterStudent';
import { CreateTest } from './components/CreateTest';
import { Title } from './components/Title';
import { CreateTestButton } from './components/CreateTestButton';
import {PrintTest} from './components/PrintTest';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/createButton-test" element={<CreateTestButton />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="" element={<HomePage />} />
        <Route path="/PrintTest" element={<PrintTest/>} />
      </Routes>
    </BrowserRouter>
  );
}