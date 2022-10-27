import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 ps-2'>
            <h2 className='mb-4 text-center fst-italic'>This is blog page</h2>
            <div>
                <h3 className='fst-italic'>What is cors?</h3>
                <h5>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</h5>
            </div>
            <div>
                <h3 className='fst-italic'>Why are you using firebase</h3>
                <h5>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</h5>
            </div>
            <div>
                <h3 className='fst-italic'>How does the private route work?</h3>
                <h5>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h5>
            </div>
            <div>
                <h3 className='fst-italic'>What is Node? How does Node work?</h3>
                <h5>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h5>
            </div>
        </div>
    );
};

export default Blog;