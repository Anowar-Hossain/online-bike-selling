import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
        <div className="">
        <h1 style={{"color": "white"}}>Bike Town</h1>
        </div>
        <div>
        <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
      {
      user?.email ?
      <Box>
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
       <Button onClick={logOut} variant="light">Logout</Button>    
      </Box>
      :
       <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
    </Navbar.Text>
    </Nav>
        </div>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;