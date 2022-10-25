import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../../Shared/CourseDetails/CourseDetails';

const Category = () => {
    const categoryCourse = useLoaderData()
    return (
        <div>
            <h4>This is category has course: {categoryCourse.length}</h4>
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