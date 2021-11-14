import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, Autherror, user} = useAuth();
    const history = useHistory();
    


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
        }

        const handleLoginSubmit = e => {
            console.log('click');
           if(loginData.password !== loginData.password2) {
               alert('password did not match')
               return
           }
           registerUser(loginData.email, loginData.password, loginData.name, history );
           e.preventDefault();
          
       }

    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt:10}} variant="body1" gutterBottom>Register</Typography>
           {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            name="name"
            type="text"
            onBlur={handleOnBlur}
            label="Your Name" 
            variant="standard" />

            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            name="email"
            type="email"
            onBlur={handleOnBlur}
            label="Your Email" 
            variant="standard" />

            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            label="Your Password"
            type="password" 
            name="password"
            onBlur={handleOnBlur}
            variant="standard" />

            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            type="password" 
            name="password2"
            onBlur={handleOnBlur}
            label="Retype Your Password"
            variant="standard" />

            <Button type="submit" sx={{width: '75%', m: 1}} variant="contained">Register</Button>
            <NavLink 
            style={{textDecoration: 'none'}}
            to="/login">
            <Button type="submit" variant="text">ALREDY REGISTER? Please LOGIN</Button>
            </NavLink>
            </form>}
            {isLoading && <CircularProgress/>}
            {user?.email && <Alert severity="success">User Created Succesfully!</Alert>}
            {Autherror && <Alert severity="error">{Autherror}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;