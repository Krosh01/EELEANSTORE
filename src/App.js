import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Deliver from './pages/deliver/deliver';
import Home from './pages/Home/Home';
import Like from './pages/Like/Like';
// import Zakaz from './pages/Zakaz/Zakaz';
import './sass/style.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='deliver' element={<Deliver/>}/>
        <Route path='like' element={<Like/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
