import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';


const Purchase = () => {
    const location = useLocation();
    const name = location.state.name;
    const picture = location.state.picture;
    const about = location.state.about;

    const soldDone = () => {
        toast.success('You have successfully purchased this course');
    }
    console.log(name);

    return (
        <Card className='mx-auto mt-5 border border-success' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
                <Button onClick={soldDone} variant="primary">
                    Complete Purchase
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Purchase;