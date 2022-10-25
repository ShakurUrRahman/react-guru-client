import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData()
    return (
        <div>
            <h4>This is category has course: {course.length}</h4>
        </div>
    );
};

export default Category;