import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <Header></Header>
            <div className='text-center mt-5'>
                <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-danger'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;