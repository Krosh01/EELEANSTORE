import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Deliver from './pages/deliver/deliver';
import ShowRoom from "./pages/showRoom/ShowRoom"
import Home from './pages/Home/Home';
import './sass/style.scss'
import Primerka from './pages/Primerka/Primerka';

function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='deliver' element={<Deliver/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='showRoom' element={<ShowRoom/>}/>
        <Route path='Primerka' element={<Primerka/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
