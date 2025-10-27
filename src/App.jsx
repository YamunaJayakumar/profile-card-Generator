
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Forms from './pages/Forms'
import ProfileCardGenerator from './pages/ProfileCardGenerator'


function App() {
  return (
    
      <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/profilecard' element={<ProfileCardGenerator/>}/>
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
      </>
  
  );
}

export default App


