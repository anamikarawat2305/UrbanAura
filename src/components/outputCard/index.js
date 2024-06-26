import React, { useState, useEffect } from 'react';
// import { Cloudinary } from '@cloudinary/url-gen';
// import { AdvancedImage, CloudinaryContext } from '@cloudinary/react';
// import MaskGallery from '../maskGallery';
import upload from '../../assets/img/th.jpeg';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { border } from '@cloudinary/url-gen/qualifiers/background';
import { center } from '@cloudinary/url-gen/qualifiers/textAlignment';

const OutputCard = ({furnitureSuggestions}) => {
  console.log("furnitureSuggestions"+ furnitureSuggestions)
    return (
        <div className='main'>
        <h2>Recommended Furniture Pieces</h2>
        <div style={{display: 'flex', flexDirection: 'row', gap: '8px', justifyContent: "center", alignItems: 'center', padding: '14px'}}>
        {
            furnitureSuggestions?.map((item)=>{
                return <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imgLink} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            })
        }
        </div>
        </div>
    );
};

export default OutputCard;