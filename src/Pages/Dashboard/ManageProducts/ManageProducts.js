import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const ManageProducts = () => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.deletedCount){
                alert('Deleted Succesfully!')
                const remaining=services.filter(service =>service._id !== id);
                setServices(remaining)
            }
        })
    }
    return (
        <div>
            <h1>Manage Products</h1>
            {
                services.map(service => (
                    <Card style={{ width: '50%', marginLeft:'350px', padding:'20px',marginBottom:'10px', borderRadius:'20px'}}>
                    <Card.Img variant="top" src={service.img} style={{width: '100%'}} />
                    <Card.Body>
                      <Card.Title>{service.name}</Card.Title>
                      <p>{service.description}</p>
                      <h6>Price: {service.price}</h6>
                    </Card.Body>
                    <button onClick={()=> handleDelete(service._id)} className="btn btn-warning">Delete</button>
                  </Card>
                ))
            }

        </div>
    );
};

export default ManageProducts;