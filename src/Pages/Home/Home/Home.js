import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2 className='text-center'>We design this six course for you:</h2>
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