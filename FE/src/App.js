import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NewIssue } from './pages/NewIssue';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<NewIssue />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
