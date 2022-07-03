import Header from '../src/Componts/Header/Header';
import HomePage from '../src/Componts/HomePage/HomePage.jsx';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



const App = () =>{
  return(
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App