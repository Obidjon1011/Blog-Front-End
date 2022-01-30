import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col } from 'reactstrap';

export default function BlogDetail() {
    const { slug } = useParams()
    const [Blog, setBlog] = useState([]);
    const [Tags, setTags] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/' + slug)
            .then(res => {
                setBlog(res.data)
                setTags(res.data.tags)
            })
            .catch(err => alert(err))
    }, []);


    return (
        <div>
            <div className=' mt-5'>
                <Link to='/' className='text-decoration-none'>
                    <p className='text-dark'>
                        <i className='bi bi-chevron-left'></i>
                        Back
                    </p>
                </Link>
            </div>
            <div className='text-center d-flex justif-content-center align-items-center' style={{ height: '78vh' }}>
                <Col lg='12'>
                    <div className='py-5 border-bottom'>
                        <h3 className='display-2 fw-bolder'>{Blog.title}</h3>
                        <div className='my-5'>
                            <p className='m-0'>{Blog.created_at}</p>
                            <p className='text-secondary m-0'>{Tags.title}</p>
                        </div>
                        <p>
                            {Blog.body}
                        </p>
                    </div>
                </Col>
            </div>
        </div>
    );
}
