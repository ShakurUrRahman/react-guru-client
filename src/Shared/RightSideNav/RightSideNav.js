import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/react-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-5'>
            <h2 className='text-center fst-italic'>Our main courses</h2>
            <div className='bg-info p-3 fs-5 fst-italic mb-3 border border-success'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-black text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;