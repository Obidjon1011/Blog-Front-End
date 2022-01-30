import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let post = {
            tags: {
                title: form.current[2].value,
                slug: slugify(form.current[2].value)
            },
            body: form.current[1].value,
            created_at: date,
            slug: slugify(form.current[0].value),
            title: form.current[0].value,
            name: 1
        }

        if (form.current[0].value === '', form.current[1].value === '', form.current[2].value === '') {
            alert('Fill all the gaps!')
        }else {
            axios.post('http://127.0.0.1:8000/api/v1/', post)
            .then(res => {
                form.current.reset()
                navigate('/');    
            })
            .catch(err => alert(err))
        }
    }
    

  return (
    <div className='my-5'>
        <Container >
            <Link to='/' className='text-decoration-none'>
                <p className='text-dark'>
                    <i className='bi bi-chevron-left'></i>
                    Back
                </p>
            </Link>
            <Row className='my-5'>
                <Col lg='12'>
                    <h1>Add Article</h1>
                    <form onSubmit={handleSubmit} ref={form}>
                        <div className='my-4'>
                            <label htmlFor="Title">Title</label>
                            <input type="text" id="Title" className='form-control' />
                        </div>
                        <div className='my-4'>
                            <label htmlFor="Content">Content</label>
                            <textarea id="Content" cols="30" className='form-control' rows="10"></textarea>
                        </div>
                        <div className='my-4'>
                            <label htmlFor="Tags">Tags</label>
                            <input type="text" id="Tags" className='form-control' />
                        </div>
                        <input type="submit" className='btn text-white' style={{background: '#FF7999'}} />
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
