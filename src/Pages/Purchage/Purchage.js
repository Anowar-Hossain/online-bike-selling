import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import {Alert} from '@mui/material';
import Order from '../Order/Order/Order';
import Header from '../Home/Header/Header';

const Purchage = () => {
    const [openBooking, setBookingOpen] = useState(false);
    const [bookingSuccess, setBoookingSuccess] = useState(false);
    const handleBookingOpen= () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const{serviceId} = useParams();
    const [service, setService] = useState({});
    useEffect(()=> {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <>
        <Header></Header>
             <Card style={{ width: '50%', marginLeft:'350px', padding:'20px',marginBottom:'10px', borderRadius:'20px'}}>
                    <Card.Img variant="top" src={service.img} style={{width: '100%'}} />
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <p>{service.description}</p>
                      <h6>Price: {service.price}</h6>
                    </Card.Body>
                    <button onClick={handleBookingOpen} className="btn btn-warning">Purchage</button>
                  </Card>
                  {bookingSuccess && <Alert severity="success">Booking Succesfully!</Alert>}
                  <Order
                  handleBookingClose={handleBookingClose}
                  openBooking={openBooking}
                  service={service}
                  setBoookingSuccess={setBoookingSuccess}
                  ></Order>
         </> 
    );
};

export default Purchage;