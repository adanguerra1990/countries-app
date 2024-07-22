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
          <main className='px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-6'>
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
