import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="product/:id/*" element={<Products />} />
               <Route path="login" element={<Login />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
