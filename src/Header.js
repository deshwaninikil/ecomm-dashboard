import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header()
{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto nav_bar_wrapper">
      {
        localStorage.getItem('user-info') ?
        <>
        <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
      :
      <>
      <Link to="/add" >Add Products</Link>
      <Link to="/update" >Update Products</Link>
       </>

      }
     
      
    </Nav>
  </Navbar>

        </div>

    )
}

export default Header