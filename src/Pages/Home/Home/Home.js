import React from 'react';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";

const Home = () => {
    return (
        <div>
            <Button variant="light"><FcGoogle></FcGoogle> Log in with Google</Button>
            <Button variant="light"><GrGithub></GrGithub> Log in with GitHub</Button>
        </div>
    );
};

export default Home;