import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/App.css';
import Home from '../../components/Pages/Home';
import Products from '../../components/Pages/Products';

function App() {
   const { pathname } = window.location;

   let PageActual;
   pathname === '/' ? (PageActual = Home) : (PageActual = Products);

   return (
      <>
         <Header />

         <PageActual />

         <Footer />
      </>
   );
}

export default App;
