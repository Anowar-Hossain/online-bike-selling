import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Order = ({handleBookingClose, openBooking, service,setBoookingSuccess}) => {
    const{name, price} = service;
    const {user} = useAuth();

    const initialInfo = {email:user.email, name:user.displayName, OrderName: name, phone: '', address:''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
      }

    const handdleBookingSubmit = e => {
        const order = {
            ...bookingInfo,
            price,
            OrderName: name
          }
        fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        if (data.insertedId) {
         setBoookingSuccess(true);
        
        }
        });
        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handdleBookingSubmit}>
            <TextField
            disabled
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            defaultValue={price}
            variant="filled"
            size="small"
            />
            <TextField
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            onBlur={handleOnBlur}
            name="name"
            defaultValue={user.displayName}
            variant="filled"
            size="small"
            />
            <TextField
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            onBlur={handleOnBlur}
            name="OrderName"
            defaultValue={name}
            variant="filled"
            size="small"
            />
            <TextField
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            onBlur={handleOnBlur}
            name="email"
            defaultValue={user.email}
            variant="filled"
            size="small"
            />
            <TextField
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            onBlur={handleOnBlur}
            name="phone"
            defaultValue='Phone Number'
            variant="filled"
            size="small"
            />
            <TextField
            sx={{width:'90%', m:1 }}
            id="filled-size-small"
            onBlur={handleOnBlur}
            name="address"
            defaultValue="Address"
            variant="filled"
            size="small"
            />
            <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default Order;