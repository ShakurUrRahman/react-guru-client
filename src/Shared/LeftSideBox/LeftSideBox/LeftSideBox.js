import { logDOM } from '@testing-library/react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const LeftSideBox = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIN = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div >
                <Button onClick={handleGoogleSignIn} className='mt-5' variant="light"><FcGoogle></FcGoogle> Log in with <span className='fw-bold'>Google</span></Button>
                <Button onClick={handleGitHubSignIN} variant="light"><GrGithub></GrGithub> Log in with <span className='fw-bold'>GitHub</span></Button>
            </div>
        </div>
    );
};

export default LeftSideBox;