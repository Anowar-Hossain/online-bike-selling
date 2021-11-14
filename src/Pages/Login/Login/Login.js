import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import initializeFirebase from '../firebase/firebase.init';
import Header from '../../Home/Header/Header';
import bike from '../../../images/login.webp'


initializeFirebase()
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {loginUser, isLoading, Autherror, user} = useAuth();

    const location = useLocation();
    const history = useHistory();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        }

        const handleLoginSubmit = e => {
            loginUser(loginData.email, loginData.password, location, history);
            e.preventDefault();
             
         }
    return (
        <>
        <Header></Header>
        <Container> 
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt:10}} variant="body1" gutterBottom>Login</Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            onBlur={handleOnChange}
            name="email"
            label="Your Email" 
            variant="standard" />
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            onBlur={handleOnChange}
            name="password"
            label="Your Password"
            type="password" 
            variant="standard" />
            <Button type="submit" sx={{width: '75%', m: 1}} variant="contained">LOgin</Button>
            <NavLink 
            style={{textDecoration: 'none'}}
            to="/register">
             <Button variant="text" >New User? Please Register</Button>
            </NavLink>
            </form>}
            {isLoading && <CircularProgress/>}
            {user?.email && <Alert severity="success">Login Succesfully!</Alert>}
            {Autherror && <Alert severity="error">{Autherror}</Alert>}
            <p>..................</p>
             </Grid>
            <Grid item xs={12} md={6}>
            <img src={bike} style={{width:'100%', marginTop:'70px'}} alt="" />
            </Grid>
        </Grid>
    </Container>
   </>
    );
};

export default Login;