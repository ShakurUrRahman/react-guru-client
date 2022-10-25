import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Carousell from '../Pages/Carousel/Carousell';
import Header from '../Shared/Header/Header';
import LeftSideBox from '../Shared/LeftSideBox/LeftSideBox/LeftSideBox';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Carousell></Carousell>
            <Container>
                <Row>
                    <Col lg="1">
                        <LeftSideBox></LeftSideBox>
                    </Col>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="2">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;