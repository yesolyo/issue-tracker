import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IssueList } from './pages/IssueList';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<IssueList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
