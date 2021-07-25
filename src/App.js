
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero/Hero";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import { productData, productDataTwo } from "./components/Products/ProductData";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <Products heading='Choose your favorite' data={productData} />
    <Feature />
    <Products heading='Sweet Treats for You' data={productDataTwo} />
    <Footer />
  </Router>
  );
}

export default App;
