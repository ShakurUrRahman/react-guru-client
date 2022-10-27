import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillStarFill } from "react-icons/bs";
import Pdf from "react-to-pdf";


const Course = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    const { name, about, picture, ratings, created_by, _id } = course;
    return (
        <Card ref={ref} className='mt-5 border border-success'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
                <Button variant="primary" className='me-2'><Link state={{ name, about, picture }} to={`/purchase/${_id}`} className='text-white text-decoration-none'>Buy this course</Link> </Button>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button variant="primary" onClick={toPdf}>Generate Pdf</Button>}
                </Pdf>
            </Card.Body>
            <Card.Footer className="">
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Course creator: <span className='fw-bold'>{created_by}</span></p>
                    <p>Ratings: <BsFillStarFill className='mb-1 text-warning'></BsFillStarFill> {ratings}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Course;