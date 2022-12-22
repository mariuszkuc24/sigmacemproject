import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pilot from './components/Pilot/Pilot';
import Skuchecker from './components/Skuchecker/Skuchecker';
import ServiceChecker from './components/ServiceChecker/ServiceChecker';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import logo from './assets/logo-light-2021.png';
import reportIcon from './assets/images/alert.svg';
import './App.scss';


const App = () => {
  const urlReportAnError="https://forms.clickup.com/2441912/f/2agnr-2588/AKR8LYVGRWAJMZPHUO";
  return (
    <Router>
      <div className="App">
        <header className='main__header '>
          <nav className="navbar">
            <div className="navbar__brand">
            <Link to="/"><img src={logo} alt="SigmaCem" /></Link>
              
            </div>
            <ul className='navbar__list'>
              <li className='navbar__list-item'>
                <Link to="/">Strona Główna</Link>
              </li>
              <li className='navbar__list-item'>
                <Link to="/pilot">Program pilotażowy</Link>``
              </li>
              <li className='navbar__list-item'>
                <Link to="/skuchecker">Sprawdź dział produktu</Link>
              </li>
              <li className='navbar__list-item'>
                <Link to="/servicechecker">Usługi</Link>
              </li>
              <li className='navbar__list-item'>
                <Link to="/login">Zaloguj</Link>
              </li>
              <li className='navbar__list-item'>
                <a className="report-error" target="_blank" rel="noopener noreferrer"
                  href={urlReportAnError}><img src={reportIcon} alt="rep" />Zgłoś błąd Manago!</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={< Landing />}></Route>
            <Route path='/pilot' element={< Pilot />}></Route>
            <Route path='/skuchecker' element={< Skuchecker />}></Route>
            <Route path='/servicechecker' element={< ServiceChecker />}></Route>
            <Route path='/login' element={< Login />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
