import React from 'react';

export default function Footer() {
  return (
    <div className='position-sticky text-center' style={{left: '45%', top: '90%'}}>
        <div>
            <i className='bi bi-facebook fs-4 mx-2' style={{cursor: 'pointer'}}></i>
            <i className='bi bi-instagram fs-4 mx-2' style={{cursor: 'pointer'}}></i>
            <i className='bi bi-twitter fs-4 mx-2' style={{cursor: 'pointer'}}></i>
            <i className='bi bi-linkedin fs-4 mx-2' style={{cursor: 'pointer'}}></i>
            <p>Copyright &copy; 2020 All rights reserved </p>
        </div>
    </div>
  );
}
