import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeLayout from './layouts/HomeLayout';
import ProductLayout from './layouts/ProductLayout';
import ProductAddLayout from './layouts/ProductAddLayout';
import ProductEditLayout from './layouts/ProductEditLayout';
import UserEditLayout from './layouts/UserEditLayout';
import RegistationLayout from './layouts/RegistationLayout';
import LoginLayout from './layouts/LoginLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path="/" component={HomeLayout} exact />
          <Route path="/product/:id" component={ProductLayout} />
          <Route path="/new/product" component={ProductAddLayout}  />
          <Route path="/edit/product/:id" component={ProductEditLayout} exact/>
          <Route path="/signup" component={RegistationLayout}  />
          <Route path="/login" component={LoginLayout}  />
          <Route path="/edit/user" component={UserEditLayout} exact/>
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
