import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default function Blog() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/')
            .then(res => setdata(res.data))
    }, []);


    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className='d-flex align-items-center'>
                            <h1 className='me-3'>Blog</h1>
                            <Link to='add-article'>
                                <button className='btn btnCustom text-white'><span >Add Article</span><span ><i className='bi bi-plus fs-1'></i></span></button>
                            </Link>
                        </div>
                    </Col>
                    {
                        data.map(data => {
                            return (
                                <Col lg='12' key={data.id} >
                                    <div className='py-5 border-bottom'>
                                        <Link to={`blog-detail/${data.slug}`} className='text-dark text-decoration-none'>
                                            <h3>{data.title}</h3>
                                        </Link>
                                        <div className='d-flex align-items-center'>
                                            <p className='m-0'>{data.created_at.slice(0, 10)}</p>
                                            <span className='mx-4'>|</span>
                                            <p className='text-secondary m-0'>{data.tags.title}</p>
                                        </div>
                                        <p>
                                            {data.body}
                                        </p>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    );
}
