import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { IoPerson } from "react-icons/io5";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image style={{ width: '40px', height: '40px', marginRight: '5px' }} roundedCircle src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-1024.png'></Image>
                    <Navbar.Brand ><Link style={{ textDecoration: "none", color: '#00D8FF' }} to='/'>React GURU</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to='/course'>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button className='ms-2' onClick={handleLogOut} variant="light">Log Out</Button>
                                        </>
                                        :
                                        <div >
                                            <Button className='me-2' variant="light"><Link className='text-decoration-none' to='/login'>Login</Link></Button>
                                            <Button variant="light"><Link className='text-decoration-none' to='/register'>Register</Link></Button>
                                        </div>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ?
                                    <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL} alt='' ></Image>
                                    : <IoPerson></IoPerson>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;