import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h3>Course: {allCourse.length}</h3>
            {
                allCourse.map(course => <CourseDetails
                    key={course._id}
                    course={course}>
                </CourseDetails>)
            }
        </div>
    );
};

export default Home;