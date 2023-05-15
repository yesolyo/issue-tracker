import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IssueList } from './pages/IssueList';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<IssueList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
