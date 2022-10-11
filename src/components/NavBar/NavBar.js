import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'

function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={`/home`}>
            <img src={process.env.PUBLIC_URL+'/assets/img/logo/logo.svg'}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to={`/login`}>Ingresar</Link>
                  </Nav.Link>
                </Nav>
        </Navbar.Collapse>
        
        <NavDropdown title={<BsFillPersonFill />} id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to={`/login`}>Ingresar</Link>
          </NavDropdown.Item>
        </NavDropdown>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;