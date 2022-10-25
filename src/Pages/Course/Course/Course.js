import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillStarFill } from "react-icons/bs";


const Course = () => {
    const course = useLoaderData();
    const { name, about, picture, ratings, created_by } = course;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>Course creator: <span className='fw-bold'>{created_by}</span></p>
                        <p>Ratings: <BsFillStarFill className='mb-1 text-warning'></BsFillStarFill> {ratings}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;