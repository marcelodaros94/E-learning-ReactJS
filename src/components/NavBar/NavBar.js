import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to={`/home`}>E-Learning Platform</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={`/home`}>Inicio</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <NavDropdown title={<BsFillPersonFill />} id="basic-nav-dropdown">
          <NavDropdown.Item>Dashboard</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          On/Off Session
          </NavDropdown.Item>
        </NavDropdown>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;