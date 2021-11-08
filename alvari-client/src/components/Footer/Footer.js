/*eslint-disable*/
import React from "react"

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap"

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} {" "}
          Alvari Digital Assets
        </div>
      </Container>
    </footer>
  )
}

export default Footer
