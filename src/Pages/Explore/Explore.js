import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Home/Header/Header';

const Explore = () => {
    const [services, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <Header></Header>
            {
                services.map(service => (
                    <Card style={{ width: '50%', marginLeft:'350px', padding:'20px',marginBottom:'10px', borderRadius:'20px'}}>
                    <Card.Img variant="top" src={service.img} style={{width: '100%'}} />
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <p>{service.description}</p>
                      <h6>Price: {service.price}</h6>
                    </Card.Body>
                    <Link to={`/purchage/${service._id}`}>
                    <button className="btn btn-warning">Order</button>
                    </Link>
                  </Card>
                ))
            }
        </div>
    );
};

export default Explore;