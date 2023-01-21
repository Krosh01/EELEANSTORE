import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
// import Deliver from './pages/deliver/deliver';
import Home from './pages/Home/Home';
import './sass/style.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='Home' element={<Home/>}/>
        {/* <Route path='' element={<Deliver/>}/> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
