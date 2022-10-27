import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import Pdf from "react-to-pdf";

const CourseDetails = ({ course }) => {
    const ref = React.createRef();
    const { name, _id, picture, created_by, ratings, about } = course;
    return (
        <Card ref={ref} className="mb-5 mt-5 border border-success">
            <Card.Header><img className='w-100' src={picture} alt='' /></Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        about.length > 200 ?
                            <>{about.slice(0, 210) + '...'} <Link to={`/course/${_id}`}>Read more</Link></>
                            : <>{about}</>
                    }
                </Card.Text>
                <Link to={`/course/${_id}`} className='text-white text-decoration-none me-2'><Button variant="primary">See Details</Button></Link>
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

export default CourseDetails;