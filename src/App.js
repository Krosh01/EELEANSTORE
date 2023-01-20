import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Deliver from './pages/deliver/deliver';
import Obmen from './pages/deliver/deliver copy';
import Voz from './pages/deliver/deliver copy 2';
import Pay from './pages/deliver/deliver copy 3';
import Home from './pages/home';
import './sass/style.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='Home' element={<Home/>}/>
        <Route path='' element={<Deliver/>}/>
        <Route path='Obmen' element={<Obmen/>}/>
        <Route path='Voz' element={<Voz/>}/>
        <Route path='Pay' element={<Pay/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
