import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';



const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
   
    const handleDelete = id => {
      const proceed=window.confirm('Are you sure you want to cancle order!')
      if(proceed){
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.deletedCount){
                alert('Deleted Succesfully!')
                const remaining=orders.filter(order =>order._id !== id);
                setOrders(remaining)
            }
        })
    }
    }
      

    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">OrderName</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.OrderName}</TableCell>
              <TableCell align="right"><button onClick={()=> handleDelete(row._id)} className="btn btn-warning">Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
    );
};

export default Orders;