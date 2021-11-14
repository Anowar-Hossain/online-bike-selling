import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div>
            <div className="container">
            <div className="row">
                {
                services.slice(0,6).map((srv) => (
                <Card className="col-md-4 p-2">
                <Card.Img variant="top"  src={srv.img} />
                <Card.Body>
                <Card.Title>Name: {srv.name}</Card.Title>
                <p>{srv.description}</p>
                <h6>Price:{srv.price}</h6>
                </Card.Body>
                <Link to={`/purchage/${srv._id}`}>
                    <button className="btn btn-warning">Order</button>
                    </Link>
               </Card>      
                ))
            }
            </div>
            </div> 
        </div>
    );
};

export default Services;