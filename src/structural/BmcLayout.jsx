import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";
import Footer from "../componets/Footer";
import { HashLink } from 'react-router-hash-link';
export default function BmcLayout(){
return(
    <div>
         <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">BMC</Navbar.Brand>

      
        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
           
            <Nav.Link as={HashLink} smooth to="/#home">
              Home
            </Nav.Link>

            
            <Nav.Link as={HashLink} smooth to="/#about-us">
              About&nbsp;Us
            </Nav.Link>

        
            <Nav.Link as={Link} to="/eboard">E-Board</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/interested">Interested</Nav.Link>
            <Nav.Link as={Link} to="/questions">Questions</Nav.Link>
            <Nav.Link as={Link} to="/expansion">Expansion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
           
        <Outlet/>
         <Footer/>
        
    </div>
)
}