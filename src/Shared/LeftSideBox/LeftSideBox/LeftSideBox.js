import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';

const LeftSideBox = () => {
    return (
        <div>
            <div>
                <Button variant="light"><FcGoogle></FcGoogle> Log in with Google</Button>
                <Button variant="light"><GrGithub></GrGithub> Log in with GitHub</Button>
            </div>
        </div>
    );
};

export default LeftSideBox;