import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";

const CourseDetails = ({ course }) => {
    const { name, _id, picture, created_by, ratings, about } = course;
    return (
        <Card className="mb-5 ">
            <Card.Header><img className='w-100' src={picture} alt='' /></Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        about.length > 200 ?
                            <p>{about.slice(0, 210) + '...'} <Link to={`/course/${_id}`}>Read more</Link></p>
                            : <p>{about}</p>
                    }
                </Card.Text>
                <Button variant="primary"><Link to={`/course/${_id}`} className='text-white text-decoration-none'>See Details</Link></Button>
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

export default CourseDetails;