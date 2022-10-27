import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-5'>
            <h2 className='text-center bg-warning p-3'>We design this six courses for you:</h2>
            <div>
                {
                    allCourse.map(course => <CourseDetails
                        key={course._id}
                        course={course}>
                    </CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Home;