import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeLayout from './layouts/HomeLayout';
import ProductLayout from './layouts/ProductLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path="/" component={HomeLayout} exact />
          <Route path="/product/:id" component={ProductLayout} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
