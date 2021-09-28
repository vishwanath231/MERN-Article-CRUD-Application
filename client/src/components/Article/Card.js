import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <>
            <Container>
                <div className="image">
                    <img src={item.image} alt="Article" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.article}</p>
                <Link to={{ pathname: `/article/${item._id}` }} className="link">Read More...</Link>
            </Container>
        </>
    )
}

export default Card;



// STYLE

const Container = styled.div `

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 3px;
    padding: 1.3rem;

    
    .image{
        text-align: center;
        
        img{
            height: 150px;
            width: 100%;
            object-fit: cover;
        }
    }

    h2{
        text-align: left;
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: 500;
    }
    p{
        text-align: justify;
        height: 95px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap; 
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.2rem;
    }

    .link{
        background:#EE2635;
        color: #fff;
        display: inline-block;
        padding:.6rem .8rem;
        border-radius: 3px;
        margin-top: 1rem;
        text-decoration:none;
        font-size: .8rem;
        font-weight: 500;
    }
`;