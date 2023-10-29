import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
 
const Layout = () => {
  return (
  <>
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/" >My Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    <Outlet/>
  </>
  )
};
 
export default Layout;