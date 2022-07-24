import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const navigate = useNavigate()
  async function handleLogout() {        

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer "+localStorage.getItem("auth_token"));

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: {},
      redirect: 'follow'
      };

      let response = await fetch("http://127.0.0.1:8000/api/auth/logout", requestOptions);
      let json = await response.json();
      if(json.success){
          localStorage.removeItem('auth_token');
          navigate('/');
      }
      
  }

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
                  <Nav.Link><Link to={`/dashboard`}>Dashboard</Link></Nav.Link>
                  <Nav.Link>
                  {localStorage.getItem('auth_token') === null ? (
                    <Link to={`/login`}>Ingresar</Link> )
                  : (
                    <a href="javascript:void(0)" onClick={handleLogout}>Salir</a>
                  )}
                  </Nav.Link>
                </Nav>
        </Navbar.Collapse>
        
        <NavDropdown title={<BsFillPersonFill />} id="basic-nav-dropdown">
          <NavDropdown.Item><Link to={`/dashboard`}>Dashboard</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          {localStorage.getItem('auth_token') === null  ? (
            <Link to={`/login`}>Ingresar</Link> )
          : (
            <a href="javascript:void(0)" onClick={handleLogout}>Salir</a>
          )}
          </NavDropdown.Item>
        </NavDropdown>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;