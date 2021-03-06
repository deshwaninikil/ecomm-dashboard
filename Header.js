import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Header() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user-Info'))
  console.warn(user)
  function logout() {

    localStorage.clear();
    history.push('/register')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/add" >Add Products</Link>
                <Link to="/update" >Update Products</Link>
              </>
              :
              <>

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>

          }


        </Nav>
        {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user && user.name} >
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>

            </NavDropdown>


          </Nav>
          : null
        }
      </Navbar>

    </div>

  )
}

export default Header