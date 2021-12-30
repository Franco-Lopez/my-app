import React from 'react';
import Metric from './Metric';

const Contentrowmovies = () => {

    let data=[
        {
            color: 'primary',
            title: "Movies in Data Base",
            value: 21,
            icon: "film"
        },
        {
            color: 'success',
            title: "Total awards",
            value: 79,
            icon: "award"
        },
        {
            color: 'warning',
            title: "Actors quantity",
            value: 49,
            icon: "user"
        }
    ];

    return (
        <div className="row">

        {
            data.map((item, index)=> <Metric {...item} key={index + item.title}/>)
        }
        
    </div>
    );
}

export default Contentrowmovies;
