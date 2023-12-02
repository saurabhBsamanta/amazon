import { Container, Nav, Navbar } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
          </Nav>
          <Nav>
            <a href="/signin" className="nav-link">
              Sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
