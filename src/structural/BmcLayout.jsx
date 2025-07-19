import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function BmcLayout(){
return(
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="about-us">About Us</Nav.Link>
                    <Nav.Link as={Link} to="eboard">Eboard</Nav.Link>
                    <Nav.Link as={Link} to="events">Events</Nav.Link>
                    <Nav.Link as={Link} to="interested">Interested</Nav.Link>
                </Nav>
            </Container>
            
        </Navbar>
        <div style={{ margin: "1rem" }}>
        <Outlet/>
        </div>
    </div>
)
}