import './App.css';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Problems from './component/Problems';
import Contact from './component/Contact';
import AppNavbar from './component/AppNavbar'
import About from './component/About';
import AllAreas from './component/AllAreas';
import VotingPage from './component/VotingPage';
import Footer from './component/Footer'
import PrivacyPolicy from './component/PrivacyPolicy'
import Term from './component/Term'
import { ToastContainer } from 'react-toastify';




function App() {
  window.addEventListener("contextmenu", (e) => e.preventDefault())
  return (
    <React.Fragment>
      <ToastContainer />
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
        <Route path='privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='TermAndConditions' element={<Term />} />
      </Routes>
      <Footer />


    </React.Fragment>
  );
}

export default App;
