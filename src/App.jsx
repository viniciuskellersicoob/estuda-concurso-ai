import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { StudySetup } from './pages/StudySetup';
import { QuestionSetup } from './pages/QuestionSetup';
import { QuestionScreen } from './pages/QuestionScreen';
import { ErrorNotebook } from './pages/ErrorNotebook';
import { Progress } from './pages/Progress';

import { ThemeProvider } from './context/ThemeContext';
import { GamificationProvider } from './context/GamificationContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <GamificationProvider>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/study" element={<StudySetup />} />
              <Route path="/question/setup" element={<QuestionSetup />} />
              <Route path="/question" element={<QuestionScreen />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/errors" element={<ErrorNotebook />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </GamificationProvider>
    </ThemeProvider>
  );
}

export default App;
