import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../../Shared/CourseDetails/CourseDetails';

const Category = () => {
    const categoryCourse = useLoaderData()
    return (
        <div className='mt-5'>
            <h4 className='text-center'>The fundamental course on this topic:</h4>
            {
                categoryCourse.map(course => <CourseDetails
                    key={course._id}
                    course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;