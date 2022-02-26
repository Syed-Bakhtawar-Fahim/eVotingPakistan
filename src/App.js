import logo from './logo.svg';
import './App.css';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Problems from './component/Problems';
import Contact from './component/Contact';
import AppNavbar from './component/AppNavbar'
import About from './component/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AllAreas from './component/AllAreas';
import VotingPage from './component/VotingPage';
import Footer from './component/Footer'
import PrivacyPolicy from './component/PrivacyPolicy'
import Term from './component/Term'
import test from './component/Test';
import Test from './component/Test';


function App() {
  return (
    <React.Fragment>
      <AppNavbar />



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='problems' element={<Problems />} />
        <Route path='contact' element={<Contact />} />
        <Route path='allareas' element={<AllAreas />} />
        <Route path='votingPage' element={<VotingPage />} />
        <Route path='about/votingPage' element={<VotingPage />} />
        <Route path='problems' element={<VotingPage />} >
          <Route path='votingPage' element={<VotingPage />} />
        </Route>
        <Route path='privacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='TermAndConditions' element={<Term/>} />
        <Route path='test' element={<Test />} />
      </Routes>
      <Footer />




      {/* <Route path={["about/votingPage", "problem/votingPage"]}  element={<VotingPage />} /> */}
    </React.Fragment>
  );
}

export default App;
