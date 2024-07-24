import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './index.css'
import ThemeProvider from './components/ThemeProvider';
import CountryDetails from './components/CountryDetails'
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header />
          <main className='main__container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/country/:countryCode' Component={CountryDetails} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
