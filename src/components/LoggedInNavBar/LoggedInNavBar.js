import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import './LoggedInNavBar.css'
import AuthService from '../../services/auth'
import { logoutPending, logoutSuccess, logoutFail } from "../../features/userSlice";

function LoggedInNavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  async function handleLogout() {       

    dispatch(logoutPending());
    let json = await AuthService.logout()
    if(json.success){
      dispatch(logoutSuccess());
      localStorage.removeItem('auth_token');
      navigate('/');
    }else{
      dispatch(logoutFail('Error. Intente más tarde'));
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
                    <Nav.Link>
                      <Link to={`/dashboard`}>Dashboard</Link>
                      </Nav.Link>
                    <Nav.Link>
                      <a href="javascript:void(0)" onClick={handleLogout}>Salir</a>
                    </Nav.Link> 
                </Nav>
        </Navbar.Collapse>
        
        <NavDropdown title={<BsFillPersonFill />} id="basic-nav-dropdown">
          <NavDropdown.Item><Link to={`/dashboard`}>Dashboard</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <a href="javascript:void(0)" onClick={handleLogout}>Salir</a>
          </NavDropdown.Item>
        </NavDropdown>
        
      </Container>
    </Navbar>
  );
}

export default LoggedInNavBar;