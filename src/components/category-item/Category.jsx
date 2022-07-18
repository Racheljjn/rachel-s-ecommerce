import React from 'react';
import "./category.styles.scss";
import { Link } from 'react-router-dom';

const Category = ({title,imageUrl}) => {
 return (
    <div className='directory-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        <Link to={`/shop/${title}`}>
         <h2>{title}</h2>
        </Link>      
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default Category