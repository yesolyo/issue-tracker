import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { Auth } from './pages/Auth';
import { IssueDetail } from './pages/IssueDetail';
import { IssueList } from './pages/IssueList';
import { LabelList } from './pages/LabelList';
import { Login } from './pages/Login';
import { MilestoneList } from './pages/MilestoneList';
import { NewIssue } from './pages/NewIssue';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme } from './styles/theme';

const App = () => {
  const [login, setLogin] = useState({ isLogin: false, accessToken: '' });
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/IssueList" element={<IssueList />} />
            <Route path="/newIssue" element={<NewIssue />} />
            <Route path="/issueDetail/:id" element={<IssueDetail />} />
            <Route path="/labelList" element={<LabelList />} />
            <Route path="/milestoneList" element={<MilestoneList />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
